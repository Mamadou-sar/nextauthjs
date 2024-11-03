import { auth } from '@/auth';
import LogOutButton from '@/components/logout-button';
import React from 'react';

export default async function Dashboard() {
   const session = await auth();

   if (!session) {
      return <div>Not logged in</div>;
   }

   return (
      <div className='container'>
         <pre>{JSON.stringify(session, null, 2)}</pre>
         Dashboard
         <LogOutButton />
      </div>
   );
}
