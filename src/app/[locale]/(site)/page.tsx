import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations();

  return <div className="text-3xl bg-blue-400">{t("title")}</div>;
}

export default Page;
