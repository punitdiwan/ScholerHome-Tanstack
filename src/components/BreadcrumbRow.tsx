import { Home } from "lucide-react"
import { Link } from "@tanstack/react-router"

type BreadcrumbRowProps = {
  current: string
}

export default function BreadcrumbRow({ current }: BreadcrumbRowProps) {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-md text-white">
        
        <Link
          to="/"
          className="cursor-pointer hover:text-amber-300 flex items-center gap-1 hover:text-primary transition"
        >
          <Home size={16} />
        </Link>

        <span >/</span>

        <span className="cursor-pointer hover:text-amber-300">
          {current}
        </span>

      </div>
    </div>
  )
}
