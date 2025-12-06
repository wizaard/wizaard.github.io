import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          I'm currently exploring opportunities in robotics, AI, and autonomous systems. 
          Whether you have a question, a project idea, or just want to connect – 
          my inbox is always open!
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:zafir.engineer@gmail.com"
            className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary mx-auto w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail size={24} />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm text-slate-light group-hover:text-primary transition-colors">
              zafir.engineer@gmail.com
            </p>
          </a>

          <a
            href="tel:+919567777086"
            className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary mx-auto w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone size={24} />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">Phone</p>
            <p className="text-sm text-slate-light group-hover:text-primary transition-colors">
              +91 95677 77086
            </p>
          </a>

          <div className="group p-6 bg-card rounded-lg border border-border">
            <div className="p-3 rounded-lg bg-primary/10 text-primary mx-auto w-fit mb-4">
              <MapPin size={24} />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-sm text-slate-light">
              Thiruvananthapuram, Kerala, India
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:zafir.engineer@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono rounded hover:bg-primary/10 transition-all duration-300 glow"
        >
          Say Hello
          <ExternalLink size={16} />
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-border">
          <a
            href="https://wizaard.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="text-sm">GitHub/Portfolio</span>
          </a>
          <a
            href="https://linkedin.com/in/zafir-ahamed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
