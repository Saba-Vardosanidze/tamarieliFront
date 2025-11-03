import ProjectsDetail from 'features/projects/controller/composite/ProjectsDetail';
import { ParamsProps } from 'features/type';

export default async function Projects({ params }: ParamsProps) {
  const resolvedParams = await params;
  return <ProjectsDetail id={resolvedParams.id} />;
}
