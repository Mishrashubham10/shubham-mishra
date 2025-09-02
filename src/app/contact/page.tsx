'use client';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto overflow-hidden"
    >
      <div className="h-screen bg-background flex flex-col items-center justify-center px-4 md:px-16 lg:px-32">
        <h1 className="text-2xl md:text-3xl font-stretch-semi-condensed">Get in Touch</h1>
        <p className="text-md mt-2">
          Whether you&apos;re interested in collaborating, have some questions,
          or just want to say hello — I&apos;m all ears! Drop your message
          below, and I&apos;ll get back to you as soon as possible. Rest
          assured, your privacy is important to me, and I&apos;ll never misuse
          your information. It&apos;s just me, ready to help, so don&apos;t
          hesitate to reach out!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mt-6 w-full"
        >
          {/* ========= NAME ========== */}
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="name" className="text-sm tracking-tight">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="outline-none border-1 border-gray-500 py-2 px-4 rounded-md hover:border-primary"
            />
          </div>
          {/* ========= EMAIL ========== */}
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="email" className="text-sm tracking-tight">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="outline-none border-1 border-gray-500 py-2 px-4 rounded-md hover:border-primary"
            />
          </div>
          {/* ========= MESSAGE ========== */}
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="message" className="text-sm tracking-tight">
              Project / Message
            </label>
            <textarea
              name="message"
              id=""
              className="outline-none border-1 border-gray-500 py-2 px-4 rounded-md hover:border-primary"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          {/* =========== BUTTON ========== */}
          <div className="flex items-center justify-center md:justify-end mt-2 mr-4 w-full">
            <button className="py-2 px-6 bg-primary w-full rounded-md text-foreground font-normal text-md tracking-tight cursor-pointer shadow-lg">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}