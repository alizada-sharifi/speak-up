'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAuthSchema, UserFormValues } from '@/schema/AuthSchema';
import { Input } from '@/components/custom-input/Input';
import { Button } from '@/components/ui/button';
import { Link, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('auth');
  const schema = createAuthSchema(t);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (authData: UserFormValues) => {
    setIsLoading(true);
    console.log(authData);
    try {
      const { data, error } = await authClient.signUp.email({
        email: authData.email,
        password: authData.password,
        name: authData.fullName,
      });

      if (data) {
        console.log(data);
        router.push('/');
      } else {
        console.log(error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 py-16 px-4 md:px-8"
    >
      <h3 className="text-xl md:text-2xl font-bold">{t('signUp.title')}</h3>
      <Input
        label={t('signUp.fullName')}
        name="fullName"
        placeholder={t('signUp.fullNamePlaceholder')}
        register={register}
        error={errors.fullName}
        required
      />

      <Input
        label={t('signUp.email')}
        name="email"
        type="email"
        placeholder={t('signUp.emailPlaceholder')}
        register={register}
        error={errors.email}
        required
      />

      <Input
        label={t('signUp.password')}
        name="password"
        type="password"
        placeholder={t('signUp.passwordPlaceholder')}
        register={register}
        error={errors.password}
        required
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="bg-primary-400 rounded-sm cursor-pointer hover:bg-primary-500 transition-colors duration-150"
      >
        {isLoading ? (
          <span>
            <svg
              className="animate-spin size-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </span>
        ) : (
          t('signUp.buttonLabel')
        )}
      </Button>

      <div className="flex justify-center gap-1 text-center text-sm">
        <p className="text-center">{t('signUp.haveAccount')}</p>
        <Link href="/login" className="text-primary-400">
          {t('signUp.buttonLabel')}
        </Link>
      </div>
    </form>
  );
}
