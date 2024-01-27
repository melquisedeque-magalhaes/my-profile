interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
      {title}
    </div>
  )
}
