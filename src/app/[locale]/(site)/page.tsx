import { CustomButton } from "@/components";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function Page() {
  const t = await getTranslations("home");

  return (
    <>
      <p className="bg-primary-800 text-secondary-200 text-sm py-2 text-center font-semibold max-sm:text-xs animate-marquee">
        {t("premiumDiscountBanner")}
      </p>

      {/* ================ hero section ============== */}
      <section className="bg-linear-to-r py-20 from-primary-400 to-primary-300">
        <div className="containers grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white flex flex-col gap-3 max-md:items-center">
            <h1 className="font-bold text-xl sm:text-2xl md:text-4xl max-md:text-center">
              {t("bannerTitle")}
            </h1>

            <p className="md:textlg lg:text-xl max-md:text-center">
              {t("bannerDesc")}
            </p>

            <CustomButton variant="secondary">{t("ctaButton")}</CustomButton>
          </div>

          <Image
            src="/images/bannerImage.webp"
            alt="Banner Image"
            width={600}
            height={100}
          />
        </div>
      </section>

      <section className="py-20 containers ">
        {/* =========== speak in 6 month ========== */}
        <section className="grid lg:grid-cols-3 justify-between items-center gap-10">
          <div className="bg-white shadow-sm border border-neutral-200 rounded-lg p-4 lg:col-span-1">
            <h2 className="text-primary-400 font-bold text-lg md:text-xl lg:text-2xl text-center mb-3">
              {t("learnFromHome")}
            </h2>

            <p className="text-neutral-300 max-md:text-sm  ">
              {t("englishTestDescription")}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Image
              src={"/images/image-1.webp"}
              alt="banner image"
              width={500}
              height={200}
              className="object-cover rounded-lg w-full h-100"
            />

            <h3 className="font-bold text-neutral-600 text-lg md:text-2xl lg:text-3xl">
              {t("sixMonthsFaster")}
            </h3>

            <p className="max-sm:text-sm text-neutral-300 md:text-lg lg:text-xl ">
              {t("teacherResources")}
            </p>

            <div className="bg-white p-3 border border-neutral-600 rounded-md">
              <b className="font-semibold text-sm mb-1.5">{t("funFact")}</b>

              <p className="max-sm:text-xs text-sm text-neutral-300">
                {t("funFactMessageRetention")}
              </p>
            </div>
          </div>
        </section>

        {/* =============== learn online and sit in class ======== */}
        <section className="grid md:grid-cols-2 mt-15 gap-10">
          <Image
            src={"/images/image-1.webp"}
            alt="banner image"
            width={500}
            height={200}
            className="object-cover rounded-lg w-full h-70"
          />

          <div>
            <b className="sm:text-lg md:text-2xl lg:text-3xl text-neutral-600">
              {t("learningOptions")}
            </b>

            <p className="text-neutral-300 max-md:text-sm lg:text-lg mt-3">
              {t("englishTest")}
            </p>
          </div>
        </section>

        {/* =========== together we inspire ============ */}
        <section className="flex max-md:flex-col-reverse mt-15 gap-10">
          <div>
            <b className="sm:text-lg md:text-2xl lg:text-3xl text-neutral-600">
              {t("inspireLearners")}
            </b>

            <p className="text-neutral-300 max-md:text-sm lg:text-lg mt-3">
              {t("intro")}
            </p>
          </div>

          <Image
            src={"/images/image-1.webp"}
            alt="banner image"
            width={500}
            height={200}
            className="object-cover rounded-lg w-full h-70"
          />
        </section>
      </section>
    </>
  );
}

export default Page;
