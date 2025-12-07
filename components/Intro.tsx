import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="py-8 flex flex-col md:flex-row items-center gap-8">
      
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border dark:border-gray-700">
        <Image
          src="/profile.png"
          alt="Profile Photo"
          width={200}
          height={200}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-4xl font-bold">Hariharamoorthi S</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Senior Software Engineer • Node.js | Java | Microservices | AWS
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
          Backend & Full-stack developer with expertise in enterprise-level, 
          scalable applications, zero-downtime deployments, and high-performance systems.
        </p>

        <div className="mt-4 flex gap-3">
          {/* <a className="px-4 py-2 bg-blue-600 text-white rounded" href="/resume.pdf" download>
            Download Resume
          </a> */}
          <a className="px-4 py-2 border rounded dark:border-gray-600" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
