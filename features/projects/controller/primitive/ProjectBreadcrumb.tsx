import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  title: string;
};

export default function ProjectBreadcrumb({ title }: Props) {
  return (
    <nav className="flex items-center gap-2 text-gray-500 text-sm">
      <Link href="/" className="hover:text-black transition-colors">
        Home
      </Link>
      <FaChevronRight size={10} />
      <span className="font-medium text-black truncate">{title}</span>
    </nav>
  );
}
