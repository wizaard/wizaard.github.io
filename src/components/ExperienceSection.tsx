import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 'protocol',
    company: 'State Protocol Kerala',
    title: 'Senior Grade Assistant',
    location: 'Government Secretariat, Thiruvananthapuram',
    period: 'Nov 2021 – Present',
    points: [
      'Manage protocol arrangements for VIP visits including heads of state, central ministers, and dignitaries',
      'Coordinated major events including inauguration of Vizhinjam International Port (2025) and G20 India Presidency events (2023)',
      'Supervising development of "K-Protocol" e-solution platform for digital protocol management',
      'Serve as liaison officer to VIPs visiting Kerala for official functions'
    ]
  },
  {
    id: 'hayyatek',
    company: 'Hayyatek',
    title: 'Advisory Board Member – Technology & Innovation',
    location: 'Sharjah, UAE',
    period: '2024 – Present',
    points: [
      'Contributing strategic and technical insights to UAE-based pharma tech startup',
      'Advising on AI and blockchain solutions for the pharmaceutical sector',
      'Connecting government experience with healthcare technology innovation'
    ]
  },
  {
    id: 'keralahouse',
    company: 'Kerala House, New Delhi',
    title: 'Assistant Liaison Officer',
    location: 'Government of Kerala',
    period: 'Feb 2020 – Nov 2021',
    points: [
      'Coordinated Government of Kerala\'s interactions with Union Government departments',
      'Liaised with foreign embassies and high commissions on behalf of State Government',
      'Assisted Governor, Chief Minister, and Ministers during official visits to New Delhi'
    ]
  },
  {
    id: 'biotz',
    company: 'Biotz Intelligent Systems Ltd.',
    title: 'Director of Research (Founding Team)',
    location: 'Thiruvananthapuram, India',
    period: '2013 – Early 2014',
    points: [
      'Led R&D of affordable, lightweight 6 DOF robotic arms and customizable rover platforms',
      'Designed embedded control solutions integrating microcontrollers, sensors, and wireless communication',
      'Developed training programs in embedded systems and robotics for professionals'
    ]
  },
  {
    id: 'smec',
    company: 'SMEC Automation Pvt. Ltd.',
    title: 'Embedded Systems Trainer',
    location: 'Kerala, India',
    period: 'Feb 2014 – Jun 2014',
    points: [
      'Conducted hands-on training in embedded systems and microcontroller programming',
      'Developed curriculum covering C programming, hardware interfacing, and debugging',
      'Guided students through sensor integration, actuator control, and embedded logic'
    ]
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const activeExp = experiences.find(exp => exp.id === activeTab)!;

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-light whitespace-nowrap">
            <span className="font-mono text-primary text-xl">02.</span> Experience
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-muted">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap text-left transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                  activeTab === exp.id
                    ? 'text-primary border-primary bg-primary/5'
                    : 'text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:pl-8 pt-4 md:pt-0 min-h-[350px]">
            <h3 className="text-xl font-semibold text-slate-light mb-1">
              {activeExp.title}{' '}
              <span className="text-primary">@ {activeExp.company}</span>
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-2">
              {activeExp.period}
            </p>
            <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
              <ExternalLink size={14} className="text-primary" />
              {activeExp.location}
            </p>
            <ul className="space-y-4">
              {activeExp.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
