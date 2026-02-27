import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations("home");

  return <div className="text-3xl bg-primary-400">{t("title")}</div>;
}

export default Page;
