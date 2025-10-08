import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Kenya College</h1>
            <p className="text-lg text-muted-foreground">
              For over 50 years, Kenya College has been a beacon of excellence in higher education, 
              transforming lives and shaping futures across East Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide world-class education that empowers students with knowledge, skills, and values 
                necessary to become responsible global citizens and leaders in their chosen fields.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to fostering innovation, critical thinking, and academic excellence while 
                maintaining strong ties with industry and community partners.
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading institution of higher learning in Africa, recognized globally for 
                  academic excellence, innovative research, and transformative impact on society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at Kenya College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in teaching, research, and service to our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold honesty, transparency, and ethical conduct in all our endeavors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive, inclusive environment where everyone can thrive and succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our History</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Five decades of educational excellence and innovation.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex gap-6">
              <div className="text-2xl font-bold text-primary shrink-0">1970</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                <p className="text-muted-foreground">
                  Kenya College was established with just 200 students and 5 programs, driven by a vision 
                  to provide quality higher education in East Africa.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-bold text-primary shrink-0">1990</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                <p className="text-muted-foreground">
                  Introduction of graduate programs and establishment of research centers, marking our 
                  commitment to advanced education and innovation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-bold text-primary shrink-0">2010</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modernization</h3>
                <p className="text-muted-foreground">
                  Major infrastructure upgrade with state-of-the-art laboratories, digital libraries, and 
                  smart classrooms to enhance learning experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-bold text-primary shrink-0">2025</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Present Day</h3>
                <p className="text-muted-foreground">
                  Today, Kenya College serves over 15,000 students from 50+ countries with 100+ programs, 
                  maintaining our position as a leader in African higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
