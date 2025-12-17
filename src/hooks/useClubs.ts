import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clubsAPI } from '@/lib/api';
import { Club, normalizeIds } from '@/types/api';
import { toast } from 'sonner';

export const useClubs = () => {
  return useQuery({
    queryKey: ['clubs'],
    queryFn: async () => {
      const { data } = await clubsAPI.getAll();
      return normalizeIds(data.data as Club[]);
    },
  });
};

export const useCreateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubData: { name: string; description: string; category: string; logo?: string }) =>
      clubsAPI.create(clubData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
      toast.success('Club created successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to create club');
    },
  });
};

export const useUpdateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<{ name: string; description: string; category: string; logo?: string }> }) =>
      clubsAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
      toast.success('Club updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to update club');
    },
  });
};

export const useDeleteClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => clubsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
      toast.success('Club deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to delete club');
    },
  });
};
