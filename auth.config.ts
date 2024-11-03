import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
   providers: [
      GitHub({}),
      Google({}),
      Credentials({
         authorize: async (credentials) => {
            console.log(credentials);
            return { id: '1', name: 'John Doe' };
         },
      }),
   ],
} satisfies NextAuthConfig;
