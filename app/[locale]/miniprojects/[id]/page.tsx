import MiniProject from '@features/miniProjects/controller/composite/MiniProject';

type MiniProjectPageParams = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function MiniProjects({ params }: MiniProjectPageParams) {
  const { id } = await params;
  return <MiniProject id={id} />;
}
