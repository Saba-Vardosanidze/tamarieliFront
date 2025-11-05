import ProjectsDetailClient from '../primitive/ProjectsDetailClient';

type Props = {
  id: string;
};

export default function MiniProject({ id }: Props) {
  return <ProjectsDetailClient id={id} />;
}
