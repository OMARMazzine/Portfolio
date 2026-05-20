"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python'},
      { name: 'SQL' },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'TensorFlow'  },
      { name: 'Keras'  },
      { name: 'Scikit-learn' },
      { name: 'Deep Learning'  },
    ],
  },
  {
    title: 'Computer Vision',
    skills: [
      { name: 'OpenCV', level: 92 },
      { name: 'Image Processing', level: 88 },
      { name: 'Object Detection', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'Django', level: 80 },
      { name: 'REST APIs', level: 75 },
      { name: 'HTML/CSS', level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Database Design', level: 82 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Jupyter', level: 90 },
      { name: 'Linux', level: 75 },
    ],
  },
]


// Simple skill list item (no percentage)
function SkillListItem({ name }: { name: string }) {
  return (
    <li className="text-sm font-medium text-foreground pl-2 list-disc">{name}</li>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border/50">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  <ul className="space-y-2 ml-2">
                    {category.skills.map((skill) => (
                      <SkillListItem key={skill.name} name={skill.name} />
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Additional technologies I work with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'YOLO', 'CNN', 'SSIM', 'Pyzbar'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
