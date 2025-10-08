import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Active Students" },
  { icon: BookOpen, value: "100+", label: "Programs" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: Globe, value: "50+", label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Icon className="w-10 h-10 mx-auto mb-3 opacity-90" />
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
