import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <Card>
                <CardHeader className="gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    University Way, Nairobi<br />
                    Kenya, East Africa
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Main Line: +254 700 000 000<br />
                    Admissions: +254 700 000 001<br />
                    International: +254 700 000 002
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    General: info@kenyacollege.edu<br />
                    Admissions: admissions@kenyacollege.edu<br />
                    Support: support@kenyacollege.edu
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us on Campus</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Map integration would appear here</p>
              <p className="text-sm text-muted-foreground mt-2">University Way, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
