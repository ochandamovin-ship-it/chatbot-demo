import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, GraduationCap, Calendar } from "lucide-react";

const requirements = [
  "Secondary school certificate or equivalent",
  "Minimum grade of B in relevant subjects",
  "English language proficiency (for international students)",
  "Completed application form with all required documents",
  "Personal statement or essay",
  "Two letters of recommendation",
];

const steps = [
  {
    number: 1,
    title: "Submit Application",
    description: "Complete our online application form and submit all required documents including transcripts and personal statement.",
    icon: FileText,
  },
  {
    number: 2,
    title: "Application Review",
    description: "Our admissions team will review your application within 2-3 weeks and may request additional information.",
    icon: UserCheck,
  },
  {
    number: 3,
    title: "Receive Decision",
    description: "You'll receive an admission decision via email. Successful applicants will receive an acceptance letter and next steps.",
    icon: CheckCircle,
  },
  {
    number: 4,
    title: "Enroll & Register",
    description: "Accept your offer, complete enrollment paperwork, and register for your courses to begin your journey!",
    icon: GraduationCap,
  },
];

export default function Admissions() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join Kenya College and take the first step toward an exceptional education and a bright future.
            </p>
            <Button size="lg" data-testid="button-start-application">
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to join our community of scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.number}
                    </div>
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Admission Requirements</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To be considered for admission to Kenya College, applicants must meet the following requirements:
              </p>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-3" />
                <CardTitle className="text-2xl">Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <div className="font-semibold">Application Deadline</div>
                    <div className="text-sm text-muted-foreground">September Intake</div>
                  </div>
                  <div className="text-primary font-semibold">July 31, 2025</div>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <div className="font-semibold">Application Deadline</div>
                    <div className="text-sm text-muted-foreground">January Intake</div>
                  </div>
                  <div className="text-primary font-semibold">Nov 30, 2025</div>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <div className="font-semibold">Orientation Week</div>
                    <div className="text-sm text-muted-foreground">September Intake</div>
                  </div>
                  <div className="text-primary font-semibold">Sep 1-5, 2025</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Classes Begin</div>
                    <div className="text-sm text-muted-foreground">September Intake</div>
                  </div>
                  <div className="text-primary font-semibold">Sep 8, 2025</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our admissions team is here to assist you throughout the application process.
            Contact us for personalized guidance and answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" data-testid="button-contact-admissions">
              Contact Admissions
            </Button>
            <Button size="lg" variant="outline" data-testid="button-schedule-visit">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
