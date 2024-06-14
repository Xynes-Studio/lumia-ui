import { useContext } from 'react';
import { NotificationContext } from '../Contexts/notifications/NotificationProvider';

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};


