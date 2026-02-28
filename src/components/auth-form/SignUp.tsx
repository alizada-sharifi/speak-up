'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, UserFormValues } from '@/schema/AuthSchema';
import { Input } from '@/components/custom-input/Input';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

type FormValues = z.infer<typeof authSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 py-16 px-4 md:px-8"
    >
      <h3 className="text-xl md:text-2xl font-bold">Sign Up</h3>
      <Input
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        register={register}
        error={errors.fullName}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
        required
      />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        register={register}
        error={errors.password}
        required
      />

      <Button className="bg-primary-400 rounded-sm cursor-pointer hover:bg-primary-500 transition-colors duration-150">
        Sign Up
      </Button>

      <div className="flex justify-center gap-1 text-center text-sm">
        <p className="text-center">Already have an account?</p>
        <Link href="/login" className="text-primary-400">
          Login
        </Link>
      </div>
    </form>
  );
}
