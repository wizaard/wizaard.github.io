import { Cpu, Factory, Code, Wrench, Globe, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    skills: [
      'C, C++, Embedded C',
      '8-bit Assembly (AVR, 8085)',
      'CircuitPython, MicroPython',
      'AVR, PIC, ESP32, Arduino',
      'Raspberry Pi, BeagleBone',
      'Altera & Xilinx FPGAs'
    ]
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    skills: [
      'PLC Programming',
      'SCADA Systems',
      'HMI Configuration',
      'DCS (Distributed Control)',
      'VFD Programming',
      'PAC Systems'
    ]
  },
  {
    icon: Wrench,
    title: 'Hardware & Prototyping',
    skills: [
      'PCB Design (KiCAD, Eagle)',
      '3D Printing',
      'RFID & Fingerprint Sensors',
      'IMU & Accelerometers',
      'Servo & Stepper Motors',
      'Zigbee & IoT Protocols'
    ]
  },
  {
    icon: Code,
    title: 'Software Development',
    skills: [
      'Python (Flask, Django)',
      'OpenCV & NumPy',
      'MATLAB & LabVIEW',
      'ROS2',
      'SQL (PostgreSQL, SQLite)',
      'HTML5, CSS3, JavaScript'
    ]
  },
  {
    icon: Lightbulb,
    title: 'AI & Data Science',
    skills: [
      'SciPy & NumPy',
      'Matplotlib',
      'NLTK',
      'OpenCV',
      'Godot Engine',
      'Unreal Engine Basics'
    ]
  },
  {
    icon: Globe,
    title: 'Languages',
    skills: [
      'Malayalam (Native)',
      'English (Very Fluent)',
      'Tamil (Fluent)',
      'Hindi (Fluent)',
      'Arabic (Elementary)'
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-light whitespace-nowrap">
            <span className="font-mono text-primary text-xl">03.</span> Skills & Technologies
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-light">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-light mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">+</span>
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'e-Governance Capacity Building (Level I & II)', org: 'Kerala University of Digital Sciences', year: '2022-2023' },
              { title: 'Industrial Automation Certification', org: 'SMECLabs (Schneider, Allen Bradley, Siemens)', year: '2012' },
              { title: 'Industrial Training', org: 'Travancore Titanium Products Ltd.', year: '2010' },
              { title: 'Scientific Computing with Python', org: 'SciPy.in by FOSSEE, IIT Bombay', year: '2009' }
            ].map((cert) => (
              <div key={cert.title} className="p-4 bg-secondary/50 rounded-lg border border-border">
                <p className="font-medium text-slate-light text-sm">{cert.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.org} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
