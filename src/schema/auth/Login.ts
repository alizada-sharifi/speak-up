import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const LoginSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z.string().email(t('validation.invalidEmail')),

    password: z.string().min(6, t('validation.passwordMin')),
  });

export type LoginFormValues = z.infer<ReturnType<typeof LoginSchema>>;
