export default function Achievements() {
  const achievements = [
    {
      title: 'Re-Imagine Hackathon – Qualified',
      linkLabel: 'LinkedIn post',
      href: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_webdevelopment-html-css-activity-7221220181547634688-PJWE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
      description: 'Qualified for Re-Imagine Hackathon; collaborated on an innovative solution and presented to judges.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Achievements</h1>
        <ul className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
          {achievements.map((a) => (
            <li key={a.title} className="rounded-none border border-white/15 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">{a.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{a.description}</p>
                {a.href && (
                  <a href={a.href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs sm:text-sm text-green-300 hover:text-green-200 underline underline-offset-4">
                    {a.linkLabel}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

