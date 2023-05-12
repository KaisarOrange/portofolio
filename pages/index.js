import Project from '../components/Project';
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectTwo from '../components/ProjectTwo';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <ProjectTwo />
      <Contact />
      <Footer />
    </div>
  );
}
