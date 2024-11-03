'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/lib/zod';
import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginAction } from '@/actions/auth-action';

const FormLogin = () => {
   const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   });

   async function onSubmit(values: z.infer<typeof loginSchema>) {
      await loginAction(values);
      console.log(values);
   }

   return (
      <div className='max-w-52'>
         <h1 className='text-3xl font-bold'>Login</h1>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className='space-y-8'
            >
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                              type='email'
                              placeholder='email@example.com'
                              {...field}
                           />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                              type='password'
                              placeholder='************'
                              {...field}
                           />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type='submit'>Login</Button>
            </form>
         </Form>
      </div>
   );
};

export default FormLogin;
