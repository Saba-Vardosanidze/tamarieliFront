type Props = {
  description: string;
  title: string;
};

export default function ProjectContent({ description, title }: Props) {
  return (
    <div className="lg:col-span-2 bg-white shadow-sm p-8 border border-gray-100 rounded-2xl">
      <h3 className="mb-4 font-bold text-gray-900 text-xl">{title}</h3>

      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
