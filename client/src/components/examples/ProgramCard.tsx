import ProgramCard from "../ProgramCard";
import { FlaskConical } from "lucide-react";
import scienceImage from "@assets/generated_images/Science_laboratory_classroom_scene_cf181a8f.png";

export default function ProgramCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ProgramCard
        title="Computer Science"
        description="Master the fundamentals of programming, algorithms, and software development with our comprehensive computer science program."
        icon={FlaskConical}
        image={scienceImage}
      />
    </div>
  );
}
