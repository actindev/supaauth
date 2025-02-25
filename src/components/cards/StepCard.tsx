export interface StepCardProps {
  number: string
  title: string
  description: string
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center p-6 group gradient-border transition-all duration-300">
      <div className="w-12 h-12 mx-auto mb-4 number-circle flex items-center justify-center">
        <span className="text-xl font-bold text-primary">{number}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-text group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed font-normal">
        {description}
      </p>
    </div>
  )
} 