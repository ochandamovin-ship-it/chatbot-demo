import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import { FlaskConical, Laptop, Building2, Heart, BookOpen, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Computer Science",
    description: "Master programming, AI, and software development with cutting-edge technology and expert faculty.",
    icon: Laptop,
    image: "/Science_laboratory_classroom_scene_cf181a8f.png",
  },
  {
    title: "Business Administration",
    description: "Learn leadership, strategy, and entrepreneurship to build your career in the business world.",
    icon: Building2,
    image: "/Business_technology_classroom_collaboration_8be99353.png",
  },
  {
    title: "Health Sciences",
    description: "Prepare for a rewarding career in healthcare with our comprehensive medical programs.",
    icon: Heart,
    image: "/Library_study_environment_4fb96a10.png",
  },
  {
    title: "Engineering",
    description: "Innovate and create solutions to real-world problems with our engineering programs.",
    icon: Microscope,
  },
  {
    title: "Arts & Humanities",
    description: "Explore culture, history, and creative expression in our diverse humanities programs.",
    icon: BookOpen,
  },
  {
    title: "Sciences",
    description: "Discover the natural world through hands-on research and laboratory experience.",
    icon: FlaskConical,
  },
];

const testimonials = [
  {
    name: "Sarah Kamau",
    program: "Business Administration, Class of 2023",
    quote: "Kenya College provided me with the skills and confidence to launch my career. The faculty are exceptional and truly care about student success.",
    image: "/Female_student_testimonial_portrait_a944208f.png",
  },
  {
    name: "David Ochieng",
    program: "Computer Science, Class of 2024",
    quote: "The hands-on projects and industry connections I gained here opened doors I never imagined. Best decision I ever made.",
    image: "/Male_student_testimonial_portrait_c972c0de.png",
  },
  {
    name: "Grace Wanjiru",
    program: "Health Sciences, Class of 2022",
    quote: "The practical training and supportive environment prepared me perfectly for my medical career. I'm now working at a top hospital in Nairobi.",
    image: "/Graduate_student_testimonial_portrait_15214824.png",
  },
  {
    name: "James Mutua",
    program: "Engineering, Class of 2023",
    quote: "From theory to practice, Kenya College equipped me with everything I needed. The innovation labs are world-class!",
    image: "/Energetic_student_testimonial_portrait_6a14af44.png",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from over 100 programs designed to help you achieve your academic and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" data-testid="button-view-all-programs">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Choose Kenya College?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience excellence in education with world-class facilities and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground">
                Learn from industry leaders and renowned academics dedicated to your success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-muted-foreground">
                State-of-the-art labs, libraries, and technology to enhance your learning experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Support</h3>
              <p className="text-muted-foreground">
                Comprehensive support services including counseling, career guidance, and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our alumni about their transformative experiences at Kenya College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students who are shaping their future at Kenya College. Applications are now open!
          </p>
          <Button size="lg" variant="secondary" data-testid="button-apply-today">
            Apply Today
          </Button>
        </div>
      </section>
    </div>
  );
}
