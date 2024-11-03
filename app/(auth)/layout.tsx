import React from 'react';

type Props = {
   children: React.ReactNode;
};
export default function AuthLayout({ children }: Props) {
   return <div className='grid place-items-center min-h-screen'>{children}</div>;
}
