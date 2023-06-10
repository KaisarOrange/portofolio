import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectTwo from '../components/Projects/ProjectTwo';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Heading />
      <ProjectTwo />
      <Contact />
      <Footer />
    </Box>
  );
}
