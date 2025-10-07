import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TopProjects from "@/components/TopProjects/TopProjects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="font-sans">
      <Container>
        <Navbar/>
        <Hero />
        <TopProjects/>
        <Skills/>
      </Container>
      <Footer/>
    </div>
  );
}
