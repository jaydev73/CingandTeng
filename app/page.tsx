import HeroSection from "./components/hero-section";
import Contact from "./components/contact";
import Feature from "./components/feature";
import Content from "./components/content";
// import Features from "./components/feature";

// export default async function Home() {
//   return (

// )
//
// }

// import mountains from '../public/mountains.jpg'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Content />
      <Feature />
      <Contact />
    </>
  );
}
