'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAuthSchema, UserFormValues } from '@/schema/AuthSchema';
import { Input } from '@/components/custom-input/Input';
import { Button } from '@/components/ui/button';
import { Link, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';

export default function Login() {
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
      <h3 className="text-xl md:text-2xl font-bold">{t('Login.title')}</h3>
      <div className="flex gap-1 text-sm">
        <p className="text-center">{t('Login.newToSpeakUp')}?</p>
        <Link href="/sign-up" className="text-primary-400">
          {t('Login.accountLink')}
        </Link>
      </div>

      <Input
        label={t('Login.email')}
        name="email"
        type="email"
        placeholder={t('Login.emailPlaceholder')}
        register={register}
        error={errors.email}
        required
      />

      <Input
        label={t('Login.password')}
        name="password"
        type="password"
        placeholder={t('Login.passwordPlaceholder')}
        register={register}
        error={errors.password}
        required
      />

      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-1.5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />

              <div
                className="size-4 rounded border bg-white border-neutral-50 
                 peer-checked:bg-primary-400 
                 peer-checked:border-primary-400 
                 transition-colors"
              />

              {/* Check icon */}
              <svg
                className="absolute inset-0 m-auto w-3 h-3 text-white 
                 opacity-0 peer-checked:opacity-100 
                 transition-opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-sm text-gray-700">
              {t('Login.rememberMe')}
            </span>
          </label>
        </div>
        <Link href="/forgot-password" className="hover:text-primary-400">
          {t('Login.forgotPassword')}
        </Link>
      </div>

      <Button
        disabled={isLoading}
        type="submit"
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

      {/* sign in with providers */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />
          <p className="text-neutral-400 text-sm whitespace-nowrap">
            {t('Login.orContinueWith')}
          </p>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="flex gap-3 items-center justify-center">
          <Link href="#">
            <Image
              src="/images/auth/google.svg"
              alt="google"
              width={24}
              height={24}
            />
          </Link>

          <Link href="#">
            <Image
              src="/images/auth/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </Link>

          <Link href="#">
            <Image
              src="/images/auth/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-1 text-center text-sm">
        <p className="text-center">{t('Login.DontHaveAccount')}</p>
        <Link href="/sign-up" className="text-primary-400">
          {t('Login.buttonLabel')}
        </Link>
      </div>
    </form>
  );
}
