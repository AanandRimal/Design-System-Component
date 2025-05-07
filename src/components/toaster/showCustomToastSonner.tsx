// utils/showCustomToast.tsx
import { toast } from 'sonner';
import Toaster from './Toaster'; // your custom styled Alert
import { Space } from 'antd';
import Button from '../button/Button';

export const showCustomToastSonner = ({
  CustomType = 'info',
  message,
  description,
  closable = true,
  duration = 4000,
}: {
  CustomType?: 'primary' | 'success' | 'warning' | 'destructive' | 'info' | 'neutral';
  message?: string;
  description?: string;
  closable?: boolean;
  duration?: number;
}) => {
  toast.custom((t) => (
    <Toaster
      CustomType={CustomType}
      message={message}
      description={description}
      closable={closable}
      onClose={() => toast.dismiss(t)}
      showIcon
      action={
        <Space>
          <Button Customtype="secondary">Button Label</Button>
        </Space>
      }
    />
  ), {
    duration,
  });
};
