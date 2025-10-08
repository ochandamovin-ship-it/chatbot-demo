import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  program: string;
  quote: string;
  image?: string;
}

export default function TestimonialCard({ name, program, quote, image }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="h-full" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
        <p className="text-foreground mb-6 italic">"{quote}"</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{program}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
