"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    id: 3,
    title: 'AI Engineer Intern',
    company: 'YaneCode Digital',
    location: 'Hybrid',
    period: 'July 2026 - August 2026',
    description:
      'Designed and developed CardioScope, an AI-powered heart disease risk assessment application, combining machine learning, data preprocessing, model evaluation, and interactive deployment.',
    responsibilities: [
      'Developed an end-to-end machine learning pipeline for cardiovascular disease risk prediction',
      'Performed data preprocessing, feature engineering, and exploratory data analysis on the Framingham Heart Study dataset',
      'Trained and optimized an XGBoost classification model',
      'Applied SMOTE on training data to address class imbalance',
      'Evaluated model performance using Recall, F1-score, and ROC-AUC',
      'Built an interactive Streamlit application for risk assessment and result interpretation',
      'Deployed the application using Streamlit Community Cloud',
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'XGBoost',
      'Pandas',
      'NumPy',
      'SMOTE',
      'Streamlit',
      'Machine Learning',
    ],
  },
  
  {
    id: 2,
    title: 'Computer Vision Intern',
    company: 'Saint-Gobain',
    location: 'Industrial Site',
    period: 'April 2025 - June 2025',
    description: 'Developed computer vision solutions focused on automated visual analysis and logo detection for industrial quality control applications.',
    responsibilities: [
      'Implemented image processing pipelines using OpenCV',
      'Developed logo detection systems for quality control',
      'Applied similarity analysis algorithms (SSIM)',
      'Integrated barcode and QR code processing',
      'Collaborated with industrial teams on visual inspection systems',
    ],
    technologies: ['OpenCV', 'Python', 'SSIM', 'Pyzbar', 'Computer Vision'],
  },
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Provaince of Essaouira',
    location: 'Province of Essaouira, Morocco',
    period: 'July 2024 - August 2024',
    description: 'Developed web-based solutions for local government services, focusing on improving accessibility and user experience for administrators.',
    responsibilities: [
      'facilitated the navigation between chauffeurs and cars for administrative tasks',
      'Implemented user-friendly interfaces for administrative tasks',
      'Optimized web applications for performance and scalability',
      'Ensured accessibility standards were met for all users',
      'automatic availability checking for chauffeurs and cars',
    ],
    technologies: ['Django', 'Python', 'SQLite'],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Contributions</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Looking for opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center p-6 bg-primary/5 border border-primary/20 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground">
              Currently seeking a 2-month internship opportunity in AI, Data Science, or Computer Vision 
              to further apply and expand practical skills.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
