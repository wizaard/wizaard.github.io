import { Bot, Cog, Gamepad2, BookOpen } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'Robotic Arms & Rover Platforms',
    description: 'Designed and prototyped affordable, lightweight 6 DOF robotic arms and customizable rover platforms for educational and research applications.',
    tags: ['Embedded C', 'Sensors', 'Motor Control', 'Wireless']
  },
  {
    icon: Cog,
    title: 'PLC-Based Auto Sludge Removal',
    description: 'Final year project implementing an automated control system for industrial process optimization at a Titanium Dioxide Plant.',
    tags: ['PLC', 'Industrial Automation', 'SCADA']
  },
  {
    icon: Gamepad2,
    title: 'Robotics Simulations',
    description: 'Development of interactive simulations and visualizations using game engines for robotics simulation and human-robot interaction research.',
    tags: ['Godot', 'Unreal Engine', 'ROS2']
  },
  {
    icon: BookOpen,
    title: 'K-Protocol e-Solution',
    description: 'Supervising development of comprehensive digital platform for managing all protocol activities of State Protocol Kerala in coordination with NIC.',
    tags: ['e-Governance', 'Digital Transformation', 'Process Optimization']
  }
];

const interests = [
  'Computer vision for robotic perception using OpenCV',
  'Multi-sensor fusion for robotics (IMU, proximity, vision)',
  'Open-source hardware advocacy and maker movement',
  'AI applications in infrastructure, logistics, and autonomous vehicles',
  'Defence technology and autonomous systems',
  'Medical robotics in surgery and rehabilitation'
];

const ProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-light whitespace-nowrap">
            <span className="font-mono text-primary text-xl">05.</span> Projects & Interests
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <project.icon size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-light mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-semibold text-slate-light mb-6">
            Research Interests
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {interests.map((interest) => (
              <li key={interest} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="text-primary mt-1">▹</span>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Personal Interests */}
        <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-slate-light mb-4">Personal Interests</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="text-primary font-mono text-xs mb-2">Sci-Fi & Inspiration</p>
              <p>H.G. Wells, Arthur C. Clarke, Frank Herbert. Films: I Robot, Bicentennial Man, The Matrix</p>
            </div>
            <div>
              <p className="text-primary font-mono text-xs mb-2">Creative Pursuits</p>
              <p>3D Modeling (Blender), Video Editing (DaVinci Resolve), Hindustani Classical Music</p>
            </div>
            <div>
              <p className="text-primary font-mono text-xs mb-2">Tech Culture</p>
              <p>Open-source advocacy, regular reader of Slashdot and Wired, tinkering since Windows 98 era</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
