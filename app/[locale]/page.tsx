import LocaleSwitcher from "feature/i18n/components/LocaleSwitcher";
import Landing from "feature/landing/components/composites/Landing";
import React from "react";

const Home = async ({ params }: { params: { locale: string } }) => {
  const messages = (await import(`feature/i18n/messages/${params.locale}.json`))
    .default;
  const t = (key: string) => messages[key] ?? key;
  return (
    <div>
      <Landing />
    </div>
  );
};

export default Home;
