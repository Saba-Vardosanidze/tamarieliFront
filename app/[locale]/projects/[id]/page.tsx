import ProjectsDetail from 'feature/projects/controller/composite/ProjectsDetail';
import { ParamsProps } from 'feature/type';

export default async function Projects({ params }: ParamsProps) {
  const resolvedParams = await params;
  return <ProjectsDetail id={resolvedParams.id} />;
}
