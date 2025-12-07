export default function Experiments() {
  const experiments = [
    {
      title: "Personal WhatsApp AI Agent",
      description:
        "Built a multilingual WhatsApp agent using Node.js and Gemini 2.5 Pro. Automatically translates messages to friends’ native languages like Tamil, Telugu, Odiya, Kannada. Fun project created for learning and experimentation.",
      year: "2025",
    },
    {
      title: "AI Productivity Toolkit",
      description:
        "Created a personal workflow combining ChatGPT, Gemini, Claude, Perplexity, Zapier, and custom Node.js scripts to automate research, summarization, resume tailoring, and content generation.",
      year: "2024–2025",
    },
    {
      title: "Portfolio Automation Engine",
      description:
        "A script that parses my resume PDF and auto-generates project data for my portfolio website.",
      year: "2025",
    },
  ];

  return (
    <section id="experiments" className="py-10">
      <h2 className="text-2xl font-semibold">Experiments & Side Projects</h2>

      <div className="mt-6 space-y-6">
        {experiments.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-gray-800 rounded shadow hover:scale-[1.01] transition"
          >
            <h3 className="text-md font-bold">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {exp.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {exp.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
