import MiniProject from '@features/miniProjects/controller/composite/MiniProject';

type MiniProjectPageParams = {
  params: {
    id: string;
  };
};

export default function MiniProjects({ params }: MiniProjectPageParams) {
  return <MiniProject id={params.id} />;
}
