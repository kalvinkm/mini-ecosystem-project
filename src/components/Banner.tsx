interface BannerProps {
  text: string
  variant?: 'default' | 'highlight'
}

export function Banner({ text, variant = 'default' }: BannerProps) {
  return (
    <div className={`banner banner--${variant}`}>
      <p>{text}</p>
    </div>
  )
}