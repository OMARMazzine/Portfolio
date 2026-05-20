"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Eye, Target } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Deep expertise in neural networks and ML algorithms',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Specialized in visual analysis and image processing',
  },
  {
    icon: Target,
    title: 'AI Solutions',
    description: 'Building intelligent systems for real-world applications',
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-20 md:py-32">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Passionate About AI & Innovation
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                Engineering student in Data Science & Artificial Intelligence at ENSIASD, 
                passionate about computer vision, machine learning, and intelligent systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in developing AI-driven visual analysis solutions using technologies 
                such as OpenCV, TensorFlow, and Keras. Completed an internship at Saint-Gobain 
                focused on industrial computer vision applications and logo detection systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking a 2-month internship opportunity in AI, Data Science, or 
                Computer Vision to further apply and expand practical skills in building 
                intelligent systems that solve real-world problems.
              </p>
              
              {/* Quick stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Internship</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
