import { Button } from '@/components/ui/button';
import { Download, ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 fade-in-up">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          John Doe
        </h1>
        <p className="mt-4 font-headline text-2xl md:text-3xl text-primary">
          Software Engineer & UX Designer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Crafting beautiful, functional, and user-centric digital experiences. I turn complex problems into elegant solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Get In Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/cv.pdf" download>
              Download CV <Download className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
      <Link href="#about" aria-label="Scroll to about section" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-bounce bg-card p-2 w-10 h-10 ring-1 ring-border-muted-foreground/10 shadow-lg rounded-full flex items-center justify-center">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </Link>
    </section>
  );
}
