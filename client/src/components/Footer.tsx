import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">Kenya College</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming lives through quality education and innovation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-programs">Programs</Link></li>
              <li><Link href="/admissions" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-admissions">Admissions</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Business</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Engineering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Health Sciences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@kenyacollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kenya College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
