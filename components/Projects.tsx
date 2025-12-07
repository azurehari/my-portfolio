import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-4 space-y-4">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:scale-[1.02] transition">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
