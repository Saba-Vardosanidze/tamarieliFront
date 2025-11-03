import { useLocale } from 'next-intl';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';

const LocaleSwitcher = () => {
  const locale = useLocale();
  return (
    <div className="flex items-center cursor-pointer">
      <LocaleSwitcherSelect
        defaultValue={locale}
        label="Select a Locale"
      ></LocaleSwitcherSelect>
    </div>
  );
};

export default LocaleSwitcher;
