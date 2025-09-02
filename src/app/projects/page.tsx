export default function ProjectPage() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">📚 BookStore App</h3>
          <p className="mb-4">
            A full-stack MERN application where users can browse, purchase, and
            manage books. Built with React, Node.js, Express, and MongoDB.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View Project
          </a>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🛒 E-Commerce Platform</h3>
          <p className="mb-4">
            An online store with authentication, product filtering, and a
            shopping cart. Developed with Next.js, Tailwind, and MongoDB.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
