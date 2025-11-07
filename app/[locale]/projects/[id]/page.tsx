import ProjectsDetail from '@features/projects/controller/composite/ProjectsDetail';

type ProjectPageParams = {
  params: {
    id: string;
  };
};

export default function Projects({ params }: ProjectPageParams) {
  return <ProjectsDetail id={params.id} />;
}
