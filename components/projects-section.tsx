"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'Traffic Sign Recognition System',
    description: 'A deep learning solution for traffic sign classification using convolutional neural networks. Built to recognize and classify traffic signs in real-time, contributing to intelligent transportation systems and road safety applications.',
    longDescription: `This project implements a traffic sign classification system using deep learning techniques. 
    The model is trained on the German Traffic Sign Recognition Benchmark (GTSRB) dataset, which contains 
    over 50,000 images across 43 different traffic sign classes.
    
    The system uses a Convolutional Neural Network (CNN) architecture optimized for image classification tasks. 
    Key features include data augmentation for improved generalization, batch normalization for stable training, 
    and dropout layers to prevent overfitting.`,
    technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'CNN', 'NumPy', 'Matplotlib'],
    metrics: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Precision', value: '95%' },
      { label: 'Recall', value: '95%' },
      { label: 'F1 Score', value: '95%' },
    ],
    features: [
      'Deep learning classification with CNN architecture',
      'Trained on GTSRB dataset with 43 sign classes',
      'Real-time prediction capability',
      'Data augmentation for robust performance',
      'Visualization of model predictions',
    ],
    category: 'Computer Vision',
    github : 'https://github.com/OMARMazzine/trrafic_sign_recognition',
  },
  {
    id: 2,
    title: 'Industrial Logo Detection System',
    description: 'Du to confidentiality I can\'t disclose the details of this project. \n A computer vision solution developed during an internship at Saint-Gobain focused on automated visual analysis and logo detection using OpenCV-based image processing techniques.',
    longDescription: `Developed a computer vision solution during an internship at Saint-Gobain focused on 
    automated visual analysis and logo detection. The system employs various image processing techniques 
    for industrial quality control applications.
    
    The solution utilizes similarity analysis algorithms and barcode/QR code processing for comprehensive 
    visual inspection capabilities. Implementation details remain general due to the confidential nature 
    of the internship work.`,
    technologies: ['OpenCV', 'Python', 'SSIM', 'Pyzbar', 'Image Processing', 'Computer Vision'],
    metrics: null,
    features: [
      'Industrial computer vision application',
      'Logo detection and visual inspection',
      'Image preprocessing pipeline',
      'SSIM for similarity comparison',
      'Barcode/QR processing with Pyzbar',
    ],
    category: 'Industrial CV',
    github: null,
  },
  {
  id: 3,
  title: 'CardioScope – Heart Disease Risk Assessment',
  description:
    'An AI-powered web application that estimates cardiovascular disease risk using machine learning. Developed an end-to-end prediction pipeline and an interactive Streamlit interface to help users understand cardiovascular risk factors and model predictions.',
  longDescription: `CardioScope is a machine learning project developed during my AI Engineering internship at YaneCode Digital.

  The project uses the Framingham Heart Study dataset, containing 4,240 records, to develop a cardiovascular disease risk prediction model based on 14 clinical and demographic features.

  The machine learning pipeline includes data preprocessing, exploratory data analysis, feature preparation, and class imbalance handling using SMOTE applied exclusively to the training data.

  An XGBoost classifier was selected and evaluated using Recall, F1-score, and ROC-AUC to better assess its ability to identify potential high-risk cases.

  The final model was integrated into an interactive Streamlit application featuring conversational-style data collection, risk estimation, result interpretation, and cardiovascular health information.

  The application was deployed using Streamlit Community Cloud.`,
  technologies: [
    'Python',
    'XGBoost',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'SMOTE',
    'Streamlit',
    'Machine Learning',
  ],
  metrics: null,
  features: [
    'End-to-end machine learning prediction pipeline',
    'Framingham Heart Study dataset (4,240 records)',
    '14 clinical and demographic input features',
    'XGBoost classification model',
    'Class imbalance handling using SMOTE',
    'Model evaluation using Recall, F1-score, and ROC-AUC',
    'Interactive conversational-style user interface',
    'Cardiovascular risk interpretation and educational information',
    'Cloud deployment using Streamlit Community Cloud',
  ],
  category: 'AI & Machine Learning',
  github: 'https://github.com/OMARMazzine/Heart-Disease-Prediction',
  liveDemo: 'https://cardio-scope.streamlit.app',
},
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics (if available) */}
      {project.metrics && (
        <div className="px-6 pb-4">
          <div className="grid grid-cols-4 gap-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-2 bg-secondary/50 rounded-lg"
              >
                <div className="text-lg font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Details */}
      <div className="border-t border-border/50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-3 flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 pb-6"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">About</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
             {project.github && (
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of AI and computer vision projects showcasing practical applications 
              of machine learning and image processing techniques.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
