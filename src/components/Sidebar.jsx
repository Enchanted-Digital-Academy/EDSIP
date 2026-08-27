import { NavLink } from 'react-router-dom'
import { Home, Calendar, BookOpen, Briefcase, Bell } from 'lucide-react'

function Sidebar() {
  const links = [
    { name: 'Dashboard Home', path: '/dashboard', icon: Home },
    { name: 'Events', path: '/dashboard/events', icon: Calendar },
    { name: 'Learning Resources', path: '/dashboard/resources', icon: BookOpen },
    { name: 'Internship Opportunities', path: '/dashboard/opportunities', icon: Briefcase },
    { name: 'Announcements', path: '/dashboard/announcements', icon: Bell },
  ]

  return (
    <aside className="w-64 bg-brand-black text-white flex flex-col p-4 shadow-md">
      <h2 className="font-display text-brand-orange text-xl font-bold mb-8">EDSIP</h2>
      <nav className="font-body flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded transition-colors duration-150 ${
                  isActive ? 'bg-brand-orange text-white font-semibold' : 'text-white hover:bg-brand-black-soft'
                }`
              }
            >
              <Icon size={18} />
              {link.name}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar