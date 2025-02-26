import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group gradient-border p-6 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed font-normal">
        {description}
      </p>
    </div>
  )
} 