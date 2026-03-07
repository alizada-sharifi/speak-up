import { footerData } from '@/constants/layout';
import { ROUTES } from '@/constants/route';
import { Link } from '@/i18n/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Facebook, Linkedin, X } from '../icons';

async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="py-10 bg-linear-to-t from-primary-800 overflow-x-hidden to-primary-400">
      <div className="containers grid mb-3 text-white sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        <div>
          <p className="max-sm:text-sm">{t('footer.desc')}</p>

          <div className="flex items-center gap-6 mt-4">
            <Facebook />
            <Linkedin />

            
            <X />
          </div>
        </div>

        {footerData.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold mb-2 max-sm:text-sm">{t(item.title)}</h3>

            <ul>
              {item.values.map((item) => (
                <li key={item.label}>
                  <Link className="text-xs sm:text-sm" href={item.value}>
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* =============== contact information ====== */}
        <div>
          <h3 className="font-bold mb-2">{t('footer.contactInfo')}</h3>
          <ul className="space-y-3">
            <li>
              <Link
                className="text-sm flex items-center gap-2"
                href={ROUTES.HOME}
              >
                <Phone />
                (+93) 73 104 8907
              </Link>
            </li>

            <li>
              <Link
                className="text-sm flex items-center gap-2"
                href={ROUTES.HOME}
              >
                <Mail />
                speakUp@gmail.com
              </Link>
            </li>

            <li>
              <Link
                className="text-sm flex items-center gap-2"
                href={ROUTES.HOME}
              >
                <MapPin />
                {t('footer.address')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      {/* =========== copy right section ====== */}
      <div className="flex max-sm:flex-col items-center justify-between gap-4 mt-4 containers text-white">
        <b className="max-sm:text-sm">{t('footer.copyRight')}</b>

        <div className="flex items-center gap-4 md:gap-10 max-sm:justify-between">
          <Link className="max-sm:text-xs" href={'/'}>
            {t('common.terms')}
          </Link>
          <Link className="max-sm:text-xs" href={'/'}>
            {t('common.privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
