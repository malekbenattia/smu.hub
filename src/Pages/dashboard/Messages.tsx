import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockMessages, Message } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Shield } from 'lucide-react';
import { toast } from 'sonner';

const Messages = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const isOfficerOrAdmin = user?.role === 'officer' || user?.role === 'admin';

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: String(messages.length + 1),
      authorId: user?.id || '',
      authorName: user?.name || 'Unknown',
      content: newMessage,
      timestamp: new Date().toISOString(),
      isOfficerOnly: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
    toast.success('Message sent!');
  };

  if (!isOfficerOrAdmin) {
    return (
      <DashboardLayout title="Communications" subtitle="Officer-only area">
        <div className="flex flex-col items-center justify-center py-16 bg-card rounded-xl">
          <Shield className="w-16 h-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Access Restricted</h3>
          <p className="text-muted-foreground">This area is only accessible to officers and admins.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Officer Communications"
      subtitle="Internal messages for officers"
    >
      <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
        {/* Messages List */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.authorId === user?.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl p-4 ${
                  message.authorId === user?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className={`text-sm font-medium mb-1 ${
                  message.authorId === user?.id ? 'text-primary-foreground/80' : 'text-foreground'
                }`}>
                  {message.authorName}
                </p>
                <p className={message.authorId === user?.id ? 'text-primary-foreground' : 'text-foreground'}>
                  {message.content}
                </p>
                <p className={`text-xs mt-2 ${
                  message.authorId === user?.id ? 'text-primary-foreground/60' : 'text-muted-foreground'
                }`}>
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-3">
            <Textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="min-h-[60px]"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage} className="shrink-0">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
