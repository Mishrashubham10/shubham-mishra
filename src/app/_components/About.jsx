export default function About() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-32 mx-auto items-center justify-center flex flex-col gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h5 className="text-2xl font-normal">Introduction</h5>
        <h2 className="text-4xl font-bold tracking-wide">About Me</h2>
      </div>

      {/* ========= INFORMATION ========== */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto gap-6 mt-3">
        <p className="text-lg font-semibold text-balance tracking-wide">
          I am an experienced Frontend Developer with over 1 and half years of
          professional expertise in the field. Throughout my career, I have had
          the privilage of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
        {/* ============ CARDS ============= */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          {/* ======== CARD ========= */}
          <div className="border-[0.5px] border-foreground p-4 rounded-md shadow-md flex flex-col items-start gap-4">
            {/* ====== ICON ======== */}
            <h5 className="text-xl font-semibold">Language</h5>
            <p className="text-md font-normal">
              HTML, CSS, JavaScript, React js, Next js
            </p>
          </div>
          {/* ======== CARD ========= */}
          <div className="border-[0.5px] border-foreground p-4 rounded-md shadow-md flex flex-col items-start gap-4">
            {/* ====== ICON ======== */}
            <h5 className="text-xl font-semibold">Education</h5>
            <p className="text-md font-normal">
              B.Sc in Information Technology
            </p>
          </div>
          {/* ======== CARD ========= */}
          <div className="border-[0.5px] border-foreground p-4 rounded-md shadow-md flex flex-col items-start gap-4">
            {/* ====== ICON ======== */}
            <h5 className="text-xl font-semibold">Project</h5>
            <p className="text-md font-normal">Build more than 5 projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
