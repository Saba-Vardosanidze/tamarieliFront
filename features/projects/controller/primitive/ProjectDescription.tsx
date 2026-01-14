type Props = {
  title: string;
  description: string;
};

export default function ProjectDescription({ title, description }: Props) {
  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-2xl">
      <h3 className="mb-4 font-bold text-black text-xl">{title}</h3>
      <p className="text-gray-600 whitespace-pre-line">{description}</p>
    </div>
  );
}
