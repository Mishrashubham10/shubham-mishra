export default function ExperiencePage() {
  return (
    <section className="w-full py-6">
      <div className="bg-background mt-8 flex flex-col items-center justify-center">
        <main className="container mx-auto px-4">
          <section className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">
              Experience
            </h1>

            <div className="space-y-8">
              {/* ========= IGNICULUSS Experience ========= */}
              <div className="border-l-4 border-primary pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Full Stack Engineer
                    </h2>
                    <p className="text-lg text-muted-foreground">IGNICULUSS</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Sep 2024 - Apr 2025 · 8 mos</p>
                    <p>Indore, Madhya Pradesh, India · Remote</p>
                  </div>
                </div>
                <div className="space-y-2 text-foreground">
                  <p>
                    • Collaborated with a talented remote team to design and
                    implement user-friendly web interfaces.
                  </p>
                  <p>
                    • Enhanced user experience through responsive design and
                    innovative project contributions.
                  </p>
                  <p>
                    • Utilized modern technologies to streamline development
                    processes, improving project delivery timelines.
                  </p>
                </div>
              </div>

              {/* ========= BookmyInsurance Experience ========= */}
              <div className="border-l-4 border-primary pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Full Stack Engineer
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      BookmyInsurance · Internship
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Oct 2021 - Apr 2022 · 7 mos</p>
                    <p>On-site</p>
                  </div>
                </div>
                <div className="space-y-2 text-foreground">
                  <p>
                    As an Intern Developer at coverKrlo, I worked with the
                    Full-Stack team to enhance the user interface and optimize
                    performance for the company&apos;s primary product.
                  </p>
                  <p>
                    Assisted in the design and implementation of RESTful APIs
                    using Node.js.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}