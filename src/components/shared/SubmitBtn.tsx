import { ClipLoader } from 'react-spinners';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface SubmitButtonProps {
  label: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  className,
  loading,
  disabled,
  icon,
}) => {
  return (
    <Button
      disabled={disabled}
      className={cn('w-full h-12 disabled:cursor-not-allowed', className)}
    >
      {loading ? (
        <>
          {/* <span>Please wait</span> */}
          <ClipLoader color="#fff" size={24} />
        </>
      ) : (
        <>
          <span>{label}</span>
          <span>{icon}</span>
        </>
      )}
    </Button>
  );
};
export default SubmitButton;
