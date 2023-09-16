import Link from "next/link";

const projects = [
  {
    difficultyLevel: "1",
    projectList: [
      { name: "Results Summary Component", href: "/results-summary" },
    ],
  },
];

export default function Home() {
  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen font-roboto">
      <div className="max-w-6xl mx-auto pt-4 space-y-10">
        <h1 className="text-4xl text-center">UI Portfolio</h1>
        <section className="flex flex-col items-center gap-8">
          {projects.map((project, index) => (
            <section
              key={project.difficultyLevel}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-2xl">
                Difficulty Level: {project.difficultyLevel}
              </h3>
              {project.projectList.map((project) => (
                <Link
                  href={project.href}
                  key={project.href}
                  className="text-lg"
                >
                  {index + 1}. {project.name}
                </Link>
              ))}
            </section>
          ))}
        </section>
      </div>
    </section>
  );
}
