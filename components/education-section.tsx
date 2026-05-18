"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Engineering Degree in Data Science & Artificial Intelligence',
    institution: 'ENSIASD - National School of Applied Sciences',
    location: 'Morocco',
    period: 'Current',
    description: 'Comprehensive program covering machine learning, deep learning, data engineering, computer vision, and AI system design. Focus on practical applications and industry-relevant projects.',
    highlights: [
      'Machine Learning & Deep Learning',
      'Computer Vision & Image Processing',
      'Data Engineering & Big Data',
      'Statistical Analysis & Mathematics',
      'Software Engineering Principles',
    ],
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-20 md:py-32 bg-card/30">
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
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Academic Background
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.degree}
                    </h3>

                    <div className={`flex items-center gap-4 mb-4 text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-sm font-medium">{item.institution}</span>
                    </div>

                    <div className={`flex items-center gap-1 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
