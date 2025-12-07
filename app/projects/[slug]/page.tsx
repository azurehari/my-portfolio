import { projects } from "@/data/projects";
import PageWrapper from "@/components/PageWrapper";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <h3 className="mt-6 font-semibold">Tech Stack</h3>
        <ul className="mt-2 list-disc ml-6">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold">Details</h3>
        <p className="mt-2 whitespace-pre-line text-gray-700 dark:text-gray-200">
          {project.content}
        </p>
      </div>
    </PageWrapper>
  );
}
