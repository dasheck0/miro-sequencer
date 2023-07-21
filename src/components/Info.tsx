import { FC } from 'react';

export interface InfoProps {
  message: string;
}

export const Info: FC<InfoProps> = (props: InfoProps) => {
  return (
    <div className='grid mb-medium p-medium'>
      <div className='cs1 ce12'>{props.message}</div>
    </div>
  );
};
