import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Intro */}
        <p className="font-mono text-primary mb-4 animate-fade-in-up opacity-0">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4 animate-fade-in-up opacity-0 delay-100">
          Zafir Ahamed Abdul Rauf.
        </h1>

        {/* Tagline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 animate-fade-in-up opacity-0 delay-200">
          I build intelligent systems.
        </h2>

        {/* Description */}
        <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-12 animate-fade-in-up opacity-0 delay-300">
          Electronics and Instrumentation Engineer with expertise in{' '}
          <span className="text-primary">embedded systems</span>,{' '}
          <span className="text-primary">industrial automation</span>, and{' '}
          <span className="text-primary">robotics hardware design</span>. 
          Currently bridging government innovation with emerging tech, passionate about 
          AI-driven autonomous systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up opacity-0 delay-400">
          <a
            href="#experience"
            className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono rounded hover:bg-primary/10 transition-all duration-300 glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 animate-fade-in-up opacity-0 delay-500">
          <a
            href="https://wizaard.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/zafir-ahamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:zafir.engineer@gmail.com"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <div className="h-px w-24 bg-muted-foreground/30 ml-4" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
