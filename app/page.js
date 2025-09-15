import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [modalItem, setModalItem] = useState(null);

  const skills = [
    "Media Relations & Journalist Engagement",
    "Campaign Planning & Execution",
    "Crisis Communications & Reputation Management",
    "Content Development & Social Media Strategy",
    "SEO-driven PR & Digital Marketing Analytics",
    "Influencer Marketing & Stakeholder Communication",
    "New Business Development & Pitch Support"
  ];

  const experience = [
    {
      role: "Assistant Account Manager",
      company: "Prose Integrated, Mumbai",
      timeline: "Aug 2023 – Jul 2024",
      details: [
        "Led PR campaigns for Reliance Securities, Toyota Kirloskar Motor & NMIMS University.",
        "Secured media coverage strengthening SEO and online visibility.",
        "Produced campaign analytics using Google Analytics & Cision."
      ],
      coverage: [
        { sector: "Education", link: "https://www.forbesindia.com/article/education/forbes-india-ready-reckoner-to-study-abroad-from-choosing-the-right-country-and-university-to-visa-applications/92635/1", title: "Forbes India – Education Abroad", snippet: "Positioned NMIMS University as a thought leader in higher education, highlighting global study pathways.", img: "/thumbnails/forbes.jpg" },
        { sector: "Finance", link: "https://www.hindustantimes.com/lifestyle/brunch/work-life-money-three-experts-help-you-set-and-meet-your-2024-goals-101704448806209.html", title: "Hindustan Times – Work-Life-Money", snippet: "Showcased client expertise on financial goal-setting, aligning brand with aspirational lifestyle audiences.", img: "/thumbnails/ht.jpg" }
      ]
    },
    {
      role: "Senior Account Executive",
      company: "StoryBrews Communications, Bengaluru",
      timeline: "Feb 2022 – May 2023",
      details: [
        "Directed multi-channel campaigns for fintech & real estate clients in India & UAE.",
        "Led influencer activations, secured media placements, managed timelines.",
        "Drafted & proofread press releases, ensuring editorial alignment."
      ],
      coverage: [
        { sector: "Real Estate", link: "https://timesproperty.com/news/post/chennai-real-estate-to-see-faster-approval-process-with-cmda-gcc-software-integration-blid4293", title: "Times Property – Chennai Real Estate", snippet: "Highlighted client role in real estate reform discussions, increasing authority in policy debates.", img: "/thumbnails/timesproperty.jpg" },
        { sector: "Finance", link: "https://www.ptinews.com/news/business/502334.html", title: "PTI News – Business Feature", snippet: "Boosted brand credibility with a nationally syndicated press release via PTI.", img: "/thumbnails/pti.jpg" }
      ]
    },
    {
      role: "Junior Account Executive",
      company: "PR24x7, Indore",
      timeline: "Jan 2021 – Jan 2022",
      details: [
        "Supported digital PR campaigns in the entertainment sector.",
        "Coordinated interviews and assisted in brand storytelling.",
        "Awarded 'Intern of the Year' for outstanding performance."
      ],
      coverage: [
        { sector: "Entertainment", link: "https://www.youtube.com/watch?v=02gY6bju7gE", title: "YouTube Campaign Showcase", snippet: "Boosted entertainment client’s digital footprint through creative campaign storytelling.", img: "/thumbnails/youtube.jpg" }
      ]
    }
  ];

  const allCoverage = experience.flatMap((exp) => exp.coverage || []);
  const filteredCoverage = filter === "All" ? allCoverage : allCoverage.filter((cov) => cov.sector === filter);
  const sectors = ["All", "Finance", "Education", "Health", "Real Estate", "Entertainment"];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Siddesh Neema</h1>
        <p className="text-lg text-gray-700">PR & Communications Professional | 4+ years of experience in PR, Marketing & Digital Media</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/siddesh-neema-a02894216/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://siddheshneema.wordpress.com/" target="_blank" className="text-blue-600 hover:underline">Blog</a>
          <a href="/Siddesh_Neema_Resume.pdf" download className="text-blue-600 hover:underline">Download CV</a>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a communications and PR professional with 4+ years of experience leading integrated campaigns across BFSI, fintech, automotive, real estate, and higher education sectors. Skilled in media relations, influencer marketing, digital storytelling, and crisis communication, I thrive on making complex topics like AI, SaaS, and cybersecurity accessible to diverse audiences. Currently based in London, I am eligible to work in the UK without sponsorship.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <h2 className="text-3xl font-semibold">Core Competencies</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </motion.section>

      {/* Filterable Gallery */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Media Coverage Portfolio</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setFilter(sector)}
              className={`px-4 py-2 rounded-lg border ${filter === sector ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
            >
              {sector}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredCoverage.map((cov, j) => (
            <div
              key={j}
              className="border rounded-lg p-3 bg-gray-50 shadow-sm cursor-pointer hover:shadow-lg transition"
              onClick={() => setModalItem(cov)}
            >
              {cov.img && (
                <Image src={cov.img} alt={cov.title} width={500} height={280} className="rounded-lg mb-2 object-cover" />
              )}
              <p className="text-blue-600 font-medium">{cov.title}</p>
              <p className="text-sm text-gray-600 mt-1">{cov.snippet}</p>
              <p className="text-xs text-gray-400 mt-1">Sector: {cov.sector}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Modal Popup */}
      {modalItem && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full space-y-4 relative">
            {modalItem.img && (
              <Image src={modalItem.img} alt={modalItem.title} width={600} height={340} className="rounded-lg mb-2 object-cover" />
            )}
            <h3 className="text-2xl font-semibold">{modalItem.title}</h3>
            <p className="text-gray-700">{modalItem.snippet}</p>
            <a href={modalItem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read Full Article</a>
            <button onClick={() => setModalItem(null)} className="absolute top-2 right-2 px-3 py-1 border rounded-lg">Close</button>
          </div>
        </div>
      )}

      {/* Contact */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-gray-700">I’d love to connect for opportunities in PR, marketing, or communications. Let’s collaborate to bring impactful stories to life.</p>
        <a href="mailto:siddeshneema@gmail.com" className="inline-block px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700">Contact Me</a>
      </motion.section>
    </div>
  );
}
