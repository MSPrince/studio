import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const highlights = [
  '5+ years of experience in web development',
  'Expert in React, Next.js, and TypeScript',
  'Passionate about creating accessible and performant UIs',
  'Collaborative team player with strong communication skills',
];

export function About() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-photo');

  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 fade-in-up">
             {profileImage && (
              <Card className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            )}
          </div>
          <div className="md:col-span-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-headline text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a passionate developer with a knack for building beautiful and intuitive web applications. My journey into tech started with a fascination for how things work, and it has evolved into a career dedicated to creating meaningful digital products.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new hiking trails, experimenting in the kitchen, or contributing to open-source projects.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-foreground/80">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
