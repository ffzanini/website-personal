import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'
import ProjectDetailsView from './ProjectDetailsView'

export async function generateStaticParams() {
  return projects.map((project) => ({
    navigation: project.navigation,
  }))
}

export default function ProjectDetailsViewPage({
  params,
}: Readonly<{
  params: { navigation: string }
}>) {
  const project = projects.find(
    (project) => project.navigation === params.navigation,
  )

  if (!project) {
    notFound()
  }

  return <ProjectDetailsView project={project} />
}
