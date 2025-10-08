import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container"
import TopProjects from "@/components/TopProjects/TopProjects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="font-sans">
      <Container>
        <Hero />
        <TopProjects/>
        <Skills/>
      </Container>
    </div>
  );
}
