"use client";
import Image from "next/image";
import { MascotSectionText } from "@/lib/text";

interface MascotSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  name?: string;
  role?: string;
}

export default function MascotSection({
  imageSrc = "/seattle.jpg", // Placeholder until you provide the dog image
  imageAlt = MascotSectionText.defaultImageAlt,
  title = MascotSectionText.defaultTitle,
  description = MascotSectionText.defaultDescription,
  name = MascotSectionText.defaultName,
  role = MascotSectionText.defaultRole
}: MascotSectionProps) {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content Side */}
          <div className="space-y-6" style={{animation: 'slide-in 1s ease-out'}}>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="">
                  {title}
                </span>
              </h2>
              
              {/* Name and Role */}
              <div className="mb-6">
               
                <p className="text-slate-800 font-semibold text-lg">{name}</p>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift">
              <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>


            {/* Call to Action */}
            <div className="rounded-2xl bg-gradient-to-r primary-background p-6 text-center">
              <p className="text-white text-lg font-semibold mb-4">
                {MascotSectionText.cta}
              </p>
              <a 
                href="/book"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {MascotSectionText.bookNow}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative" style={{animation: 'slide-in 0.8s ease-out'}}>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}} />
          </div>

          
        </div>
      </div>
    </section>
  );
}
