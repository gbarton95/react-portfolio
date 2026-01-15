import { NavLink } from 'react-router-dom'

const linkClass =
  'text-sm font-medium text-gray-700 hover:text-black transition-colors'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <span className="font-bold text-lg">GabCV</span>

        <div className="flex gap-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
