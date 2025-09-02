import Link from 'next/link';

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: 'BookStore App',
      content:
        'A full-stack MERN application where users can browse, purchase, and manage books. Built with React, Node.js, Express, and MongoDB. In this application user can manage books.',
    },
    {
      id: 2,
      title: 'MERN E-Commerce App',
      content:
        "An online store with authentication, product filtering, and a shopping cart. Developed with Next.js, Tailwind, Node.js, Express.js, JWT, and MongoDB. It's a role based application.",
    },
    {
      id: 3,
      title: 'Tech Notes',
      content:
        'Tech Notes is a role-based note-taking application designed for organizations to securely create, manage, and share notes within teams. The application supports multiple user roles.',
    },
    {
      id: 4,
      title: 'AI Agent',
      content:
        'AI Agent is an interactive intelligent assistant application that leverages OpenAI’s API to provide natural language responses, perform tasks, and assist users in real-time.',
    },
    {
      id: 5,
      title: 'X Design Clone',
      content:
        'X Design Clone is a front-end replica of the popular X Design platform, built using React.js to demonstrate UI/UX replication, responsiveness.',
    },
  ];

  return (
    <div className="w-full max-h-[calc(100vh-4rem)] overflow-auto py-10">
      <section
        id="projects"
        className="h-screen py-10 px-6 flex flex-col gap-6 items-center justify-center bg-gray-100 dark:bg-gray-900"
      >
        <h2 className="text-3xl font-bold text-start self-start md:self-center">
          Professional Projects
        </h2>
        <p>
          Here&apos;s a selection of the projects I&apos;ve built or contributed to —
          spanning web, mobile, and open-source tools. Each one reflects my
          focus on performance, design, and problem-solving. Explore the
          collection below — each project includes real-world challenges,
          polished interfaces, and thoughtful implementations.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-background flex flex-col gap-6 border-1 border-foreground rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">📚 {project.title}</h3>
              <p
                className="break-words"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {project.content}
              </p>
              <Link
                href="/projects"
                className="py-2 px-6 w-max rounded-md text-foreground font-normal text-md tracking-tight cursor-pointer shadow-lg border-[0.3px] border-foreground mt-2"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
