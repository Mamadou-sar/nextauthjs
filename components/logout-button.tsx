'use client';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const LogOutButton = () => {
   const logout = async () => {
      try {
         await signOut({ callbackUrl: '/' });
      } catch (error) {
         console.error('Erreur lors de la déconnexion :', error);
      }
   };
   return <Button onClick={logout}>Logout</Button>;
};

export default LogOutButton;
