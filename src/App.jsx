import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const ProgramDetails = lazy(() => import("./pages/ProgramDetails"));
const Education = lazy(() => import("./pages/Education"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const WomenEmpowerment = lazy(() => import("./pages/WomenEmpowerment"));
const FoodRelief = lazy(() => import("./pages/FoodRelief"));
const RuralDevelopment = lazy(() => import("./pages/RuralDevelopment"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Donate = lazy(() => import("./pages/Donate"));
const Transparency = lazy(() => import("./pages/Transparency"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<Loader fullScreen label="Loading page" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/food-relief" element={<FoodRelief />} />
          <Route path="/rural-development" element={<RuralDevelopment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
