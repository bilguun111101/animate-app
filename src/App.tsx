import {
  Blog, 
  Home, 
  Video,
  Skills, 
  Footer, 
  Contact, 
  Pricing, 
  Services, 
  Portfolio, 
  Milestones, 
  ScrollToTop, 
  Testimonials, 
} from "./components";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
 
export default App;