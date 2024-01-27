export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-4 items-center justify-between py-8 mt-10">
      <span className="text-sm text-text-secondary">
        Melqui Developments 2024
      </span>

      <div className="flex gap-4">
        <a
          href="https://github.com/melquisedeque-magalhaes"
          target="_blank"
          className="text-sm text-text-secondary"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/melqui-sodre/"
          className="text-sm text-text-secondary"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </footer>
  )
}
