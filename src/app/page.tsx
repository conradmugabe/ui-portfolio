import Link from "next/link";

const projects = [
  { name: "Results Summary Component", href: "/results-summary" },
];

export default function Home() {
  return (
    <section>
      <div className="max-w-6xl mx-auto pt-4 space-y-4">
        <h1 className="text-4xl text-center">UI Portfolio</h1>
        <article className="flex flex-col items-center">
          {projects.map((project, index) => (
            <Link href={project.href} key={project.href}>
              {index + 1}. {project.name}
            </Link>
          ))}
        </article>
      </div>
    </section>
  );
}
