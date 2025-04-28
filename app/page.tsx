// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 rounded">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg">Building great web experiences!</p>
      </section>

      {/* About Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I&aposm a full-stack developer passionate about creating scalable web
          applications and exploring new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 rounded text-center">
        <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
        <ul className="list-disc list-inside max-w-md mx-auto text-left text-center">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Tailwind CSS / UI Design</li>
          <li>MongoDB / SQL</li>
        </ul>
      </section>
    </div>
  );
}