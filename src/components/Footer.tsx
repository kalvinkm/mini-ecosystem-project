interface FooterProps {
  year: number
  text?: string
}

export function Footer({ year, text }: FooterProps) {
  return (
    <footer>
      <p>
        © {year} {text}
      </p>
    </footer>
  )
}