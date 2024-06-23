import { cn } from '@/lib/utils'

interface CoffeBackgroundProps {
  className?: string
  children: string
}
export function Ascii({ className, children }: Readonly<CoffeBackgroundProps>) {
  return (
    <pre className={cn('text-2xl pointer-events-none', className)}>
      {children}
    </pre>
  )
}
