'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, UserFormValues } from '@/schema/AuthSchema';
import { Input } from '@/components/custom-input/Input';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type FormValues = z.infer<typeof authSchema>;

export default function Login() {
  const t = useTranslations('auth');
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

      <Button className="bg-primary-400 rounded-sm cursor-pointer hover:bg-primary-500 transition-colors duration-150">
        {t('Login.buttonLabel')}
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
          {t('Login.accountLink')}
        </Link>
      </div>
    </form>
  );
}
