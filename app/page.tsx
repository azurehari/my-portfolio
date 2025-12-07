import PageWrapper from "@/components/PageWrapper";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experiments from "../components/Experiments";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen max-w-4xl mx-auto p-6">
        <Intro />
        <Skills />
        <Projects />
        <Experiments />
        <Contact />
      </main>
    </PageWrapper>
  );
}
