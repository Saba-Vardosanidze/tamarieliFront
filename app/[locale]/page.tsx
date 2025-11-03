import Landing from 'features/landing/components/composites/Landing';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  return (
    <>
      <Landing />
    </>
  );
}
