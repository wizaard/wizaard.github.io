import { GraduationCap, Award, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-light whitespace-nowrap">
            <span className="font-mono text-primary text-xl">04.</span> Education
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {/* BTech */}
          <div className="group relative bg-card p-6 md:p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary self-start">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-light">
                    Bachelor of Technology
                  </h3>
                  <span className="font-mono text-sm text-primary">2006 – 2010</span>
                </div>
                <p className="text-primary font-medium mb-1">
                  Electronics and Instrumentation Engineering
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Cochin University of Science and Technology<br />
                  Sarabhai Institute of Science and Technology, Thiruvananthapuram
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Award size={16} className="text-primary" />
                  <span>First Class: 65.28%</span>
                </div>
                <div className="space-y-3 border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-light mb-1">Coursework Seminar</p>
                    <p className="text-sm text-muted-foreground">
                      "Open-Source Hardware" – Explored open-source hardware platforms and their applications in innovation ecosystems
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-light mb-1">Final Year Project</p>
                    <p className="text-sm text-muted-foreground">
                      "Implementation of PLC Based Auto Sludge Removal System in Titanium Dioxide Plant" – Designed automated control system for industrial process optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="group relative bg-card p-6 md:p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary self-start">
                <MapPin size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-light mb-4">
                  Secondary Education <span className="text-primary">(Abu Dhabi, UAE)</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between gap-1 pb-3 border-b border-border/50">
                    <div>
                      <p className="font-medium text-slate-light">Grade 12 (AISSCE) – Science</p>
                      <p className="text-sm text-muted-foreground">Indian Islahi Islamic School, Abu Dhabi</p>
                    </div>
                    <span className="font-mono text-sm text-primary">CBSE 2006</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-1">
                    <div>
                      <p className="font-medium text-slate-light">Grade 10 (AISSE)</p>
                      <p className="text-sm text-muted-foreground">Wisdom High School, Abu Dhabi</p>
                    </div>
                    <span className="font-mono text-sm text-primary">CBSE 2004</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                  "Schooling in the UAE forged a lasting emotional and intellectual connection to the Emirates. 
                  Abu Dhabi is my formative home, and returning to build technology there is a central life goal."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Honors */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-light mb-6 flex items-center gap-3">
            <Award className="text-primary" size={24} />
            Academic Honors & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">🥈</span>
                <div>
                  <p className="font-medium text-slate-light text-sm">2nd Best Paper Award</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    "Energy Generation using Bioethanol Fuel Cell" at Seminar on Space Instrumentation, 
                    Sarabhai Institute (March 2010)
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">🏆</span>
                <div>
                  <p className="font-medium text-slate-light text-sm">1st Prize Winner</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    IETE Foundation Day Quiz Competition (November 2009)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
