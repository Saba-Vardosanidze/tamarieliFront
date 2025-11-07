import ProjectsDetail from '@features/projects/controller/composite/ProjectsDetail';

type ProjectPageParams = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function Projects({ params }: ProjectPageParams) {
  const { id } = await params;
  return <ProjectsDetail id={id} />;
}
