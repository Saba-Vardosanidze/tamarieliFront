import MiniProject from 'feature/miniProjects/controller/composite/MiniProject';
import { ParamsProps } from 'feature/type';

export default async function Projects({ params }: ParamsProps) {
  const resolvedParams = await params;
  return <MiniProject id={resolvedParams.id} />;
}
