import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-light whitespace-nowrap">
            <span className="font-mono text-primary text-xl">01.</span> About Me
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm an Electronics and Instrumentation Engineer with a unique journey spanning 
              embedded systems development, industrial automation, and a decade of government 
              civil service where I applied technology to transform public sector operations.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in building <span className="text-primary">intelligent, autonomous robotic systems</span> that 
              leverage AI for real-world applications. Having spent my formative years in 
              <span className="text-primary"> Abu Dhabi, UAE</span>, I'm deeply committed to contributing to the 
              Emirates' growing innovation ecosystem.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently serving as <span className="text-primary">Senior Grade Assistant at State Protocol Kerala</span>, 
              I manage VIP protocol arrangements and supervise the development of digital governance platforms. 
              I also serve as <span className="text-primary">Advisory Board Member</span> for Hayyatek, 
              a UAE-based pharma tech startup.
            </p>

            <div className="pt-4">
              <p className="font-mono text-sm text-primary mb-3">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {[
                  'C/C++/Embedded C',
                  'Python (Flask, OpenCV)',
                  'ROS2 & MATLAB',
                  'PLC/SCADA/HMI',
                  'Arduino/ESP32/RPi',
                  'KiCAD & 3D Printing'
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="relative group">
              {/* Profile Image Container */}
              <div className="relative z-10 rounded-lg overflow-hidden bg-secondary">
              <img
                src={profilePhoto}
                alt="Zafir Ahamed Abdul Rauf - Electronics and Robotics Engineer"
                className="w-full aspect-square object-cover object-[25%_15%]"
              />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Border Frame */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg -z-0 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
            </div>

            {/* Quick Facts */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Thiruvananthapuram, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Briefcase size={16} className="text-primary" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <GraduationCap size={16} className="text-primary" />
                <span>B.Tech Electronics & Instrumentation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Heart size={16} className="text-primary" />
                <span>UAE Connection - Abu Dhabi Schooling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
