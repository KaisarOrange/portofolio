import Project from '../components/Project';
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
