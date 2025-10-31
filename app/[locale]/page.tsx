import Landing from "feature/landing/components/composites/Landing";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  return (
    <>
      <Landing />
    </>
  );
}
