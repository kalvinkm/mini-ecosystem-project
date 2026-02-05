interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}