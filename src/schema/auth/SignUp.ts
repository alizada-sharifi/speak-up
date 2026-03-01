import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const signUpSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    fullName: z.string().min(3, t('validation.fullNameMin')),

    email: z.string().email(t('validation.invalidEmail')),

    password: z.string().min(6, t('validation.passwordMin')),
  });

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>;
