'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAuthSchema, UserFormValues } from '@/schema/AuthSchema';
import { Input } from '@/components/custom-input/Input';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function SignUp() {
  const t = useTranslations('auth');
  const schema = createAuthSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
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

      <Button className="bg-primary-400 rounded-sm cursor-pointer hover:bg-primary-500 transition-colors duration-150">
        {t('signUp.buttonLabel')}
      </Button>

      <div className="flex justify-center gap-1 text-center text-sm">
        <p className="text-center">{t('signUp.haveAccount')}</p>
        <Link href="/login" className="text-primary-400">
          {t('signUp.accountLink')}
        </Link>
      </div>
    </form>
  );
}
