import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Toaster } from 'sonner';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('auth');
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            success: 'bg-white text-green-500',
            error: 'bg-white text-red-500',
          },
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 w-3xl mx-auto rounded-md">
        <div className="relative">
          <Image
            src="/images/auth/auth.webp"
            alt="auth-image"
            width={320}
            height={320}
            className="object-cover w-full rounded-l-md hidden md:block"
          />
          <p className="text-neutral-500 hidden md:block max-w-40 text-sm absolute top-7 left-6">
            {t('welcomeText')}
          </p>
        </div>

        {/* fields */}
        <div className="bg-auth rounded-r-md w-full">{children}</div>
      </div>
    </div>
  );
}
