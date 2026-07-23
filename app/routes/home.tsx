import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream  job" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

      <section id="resumes" className="resumes-section px-4 pb-10" aria-label="Your resumes">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </section>
    </main>
  );
}
