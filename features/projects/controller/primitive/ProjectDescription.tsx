type Props = {
  title: string;
  description: string;
};

export default function ProjectDescription({ title, description }: Props) {
  return (
    <div className="lg:col-span-2 bg-white shadow-sm p-8 md:p-10 border border-zinc-100 rounded-3xl">
      <div className="relative mb-6">
        <h3 className="font-bold text-zinc-900 text-2xl tracking-tight">
          {title}
        </h3>
        <div className="-bottom-2 left-0 absolute bg-blue-600 rounded-full w-12 h-1" />
      </div>

      <p className="text-zinc-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
