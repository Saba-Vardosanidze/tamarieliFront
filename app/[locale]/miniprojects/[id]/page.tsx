import MiniProject from 'features/miniProjects/controller/composite/MiniProject';
import { ParamsProps } from 'features/type';

export default async function Projects({ params }: ParamsProps) {
  const resolvedParams = await params;
  return <MiniProject id={resolvedParams.id} />;
}
