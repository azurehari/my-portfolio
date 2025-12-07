const backend = ["Node.js", "Java / Spring Boot", "NestJS", "Microservices", "MongoDB", "MySQL", "Redis", "Elasticsearch"];
const frontend = ["Angular", "React", "Next.js", "TailwindCSS"];
const devops = ["AWS (EC2, S3, ELB)", "CI/CD", "Docker", "Kubernetes", "Vercel"];

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-medium">Backend</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            {backend.map(s => <li key={s}>• {s}</li>)}
          </ul>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-medium">Frontend</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            {frontend.map(s => <li key={s}>• {s}</li>)}
          </ul>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-medium">DevOps / Cloud</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            {devops.map(s => <li key={s}>• {s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
