import './Footer.css'

interface FooterProps {
  year: number
  text?: string
}

export function Footer({ year, text }: FooterProps) {
  return (
    <footer className="footer-store">
      <p>
        © {year} {text}
      </p>
    </footer>
  )
}
