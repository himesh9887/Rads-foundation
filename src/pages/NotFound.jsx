import { Compass, Home } from "lucide-react";
import SEO from "../components/common/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ThemedVisual from "../components/ui/ThemedVisual";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="flex min-h-[70vh] items-center py-16">
        <Container width="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <ThemedVisual
              theme="general"
              seed={9}
              alt="Illustration representing a page that could not be found"
              className="aspect-square w-40 sm:w-52"
              iconSize={64}
            />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              404 Error
            </p>
            <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Looks like this path has wandered off.
            </h1>
            <p className="max-w-md text-navy-500">
              The page you're looking for doesn't exist or may have moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/" icon={Home}>
                Go Home
              </Button>
              <Button to="/programs" variant="outline" icon={Compass}>
                Explore Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
