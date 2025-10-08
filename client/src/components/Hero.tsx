import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/Kenya_campus_hero_image_edeefa06.png";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
          Transform Your Future at<br />Kenya College
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Excellence in education, innovation in learning. Join thousands of students achieving their dreams with world-class programs and dedicated faculty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="default"
            className="text-base"
            data-testid="button-hero-apply"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
            data-testid="button-hero-programs"
          >
            Explore Programs <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
