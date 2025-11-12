import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="text-center bg-background shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                <skill.icon className="h-10 w-10 text-primary" />
                <p className="font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
