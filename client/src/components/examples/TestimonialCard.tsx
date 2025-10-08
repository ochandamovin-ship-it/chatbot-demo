import TestimonialCard from "../TestimonialCard";
import studentImage from "@assets/generated_images/Female_student_testimonial_portrait_a944208f.png";

export default function TestimonialCardExample() {
  return (
    <div className="p-6 max-w-md">
      <TestimonialCard
        name="Sarah Kamau"
        program="Business Administration, Class of 2023"
        quote="Kenya College provided me with the skills and confidence to launch my career. The faculty are exceptional and truly care about student success."
        image={studentImage}
      />
    </div>
  );
}
