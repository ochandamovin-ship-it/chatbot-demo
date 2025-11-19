"use client";

import { useState } from "react";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { FlaskConical, Laptop, Building2, Heart, BookOpen, Microscope, Palette, Calculator } from "lucide-react";

const allPrograms = [
  {
    category: "Technology",
    items: [
      {
        title: "Computer Science",
        description: "Master programming, AI, and software development with cutting-edge technology and expert faculty.",
        icon: Laptop,
        image: "/Science_laboratory_classroom_scene_cf181a8f.png",
      },
      {
        title: "Information Technology",
        description: "Learn network administration, cybersecurity, and IT infrastructure management.",
        icon: Laptop,
      },
      {
        title: "Data Science",
        description: "Analyze and interpret complex data to drive business decisions and innovation.",
        icon: Calculator,
      },
    ],
  },
  {
    category: "Business",
    items: [
      {
        title: "Business Administration",
        description: "Learn leadership, strategy, and entrepreneurship to build your career in the business world.",
        icon: Building2,
        image: "/Business_technology_classroom_collaboration_8be99353.png",
      },
      {
        title: "Marketing",
        description: "Develop strategic marketing skills for the digital age and global markets.",
        icon: Building2,
      },
      {
        title: "Finance",
        description: "Master financial analysis, investment strategies, and corporate finance.",
        icon: Calculator,
      },
    ],
  },
  {
    category: "Health",
    items: [
      {
        title: "Health Sciences",
        description: "Prepare for a rewarding career in healthcare with our comprehensive medical programs.",
        icon: Heart,
        image: "/Library_study_environment_4fb96a10.png",
      },
      {
        title: "Nursing",
        description: "Train to become a skilled and compassionate healthcare professional.",
        icon: Heart,
      },
      {
        title: "Public Health",
        description: "Learn to improve community health through policy, prevention, and education.",
        icon: Heart,
      },
    ],
  },
  {
    category: "Engineering",
    items: [
      {
        title: "Civil Engineering",
        description: "Design and build infrastructure that shapes our communities and cities.",
        icon: Microscope,
      },
      {
        title: "Electrical Engineering",
        description: "Innovate in electronics, power systems, and renewable energy technologies.",
        icon: Microscope,
      },
      {
        title: "Mechanical Engineering",
        description: "Create mechanical systems and solutions for industrial challenges.",
        icon: Microscope,
      },
    ],
  },
  {
    category: "Arts",
    items: [
      {
        title: "Fine Arts",
        description: "Express your creativity through painting, sculpture, and digital media.",
        icon: Palette,
      },
      {
        title: "Literature",
        description: "Explore world literature, creative writing, and critical analysis.",
        icon: BookOpen,
      },
      {
        title: "History",
        description: "Study the past to understand the present and shape the future.",
        icon: BookOpen,
      },
    ],
  },
  {
    category: "Sciences",
    items: [
      {
        title: "Biology",
        description: "Discover life sciences through hands-on research and laboratory experience.",
        icon: FlaskConical,
      },
      {
        title: "Chemistry",
        description: "Explore molecular science and chemical processes in modern laboratories.",
        icon: FlaskConical,
      },
      {
        title: "Physics",
        description: "Understand the fundamental laws of nature through theory and experimentation.",
        icon: FlaskConical,
      },
    ],
  },
];

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...allPrograms.map(cat => cat.category)];

  const filteredPrograms = selectedCategory === "All"
    ? allPrograms.flatMap(cat => cat.items)
    : allPrograms.find(cat => cat.category === selectedCategory)?.items || [];

  return (
    <div>
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-lg text-muted-foreground">
              Discover over 100 programs designed to help you achieve your academic and professional goals.
              From undergraduate to graduate studies, we offer world-class education in diverse fields.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-category-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Can't Find Your Program?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We offer many more specialized programs. Contact our admissions team to learn about all available options.
          </p>
          <Button size="lg" data-testid="button-contact-admissions">
            Contact Admissions
          </Button>
        </div>
      </section>
    </div>
  );
}
