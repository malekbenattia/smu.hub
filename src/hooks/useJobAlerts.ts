import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { jobAlertsAPI } from '@/lib/api';
import { JobAlert, normalizeIds } from '@/types/api';
import { toast } from 'sonner';

export const useJobAlerts = () => {
  return useQuery({
    queryKey: ['jobAlerts'],
    queryFn: async () => {
      const { data } = await jobAlertsAPI.getAll();
      return normalizeIds(data.data as JobAlert[]);
    },
  });
};

export const useCreateJobAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobData: { title: string; description: string; type: string; deadline: string; priority: string }) =>
      jobAlertsAPI.create(jobData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobAlerts'] });
      toast.success('Job alert created successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to create job alert');
    },
  });
};

export const useClaimJobAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => jobAlertsAPI.claim(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobAlerts'] });
      toast.success('Job claimed successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to claim job');
    },
  });
};

export const useDeleteJobAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => jobAlertsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobAlerts'] });
      toast.success('Job alert deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to delete job alert');
    },
  });
};
