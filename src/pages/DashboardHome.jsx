import WelcomeSection from '../components/WelcomeSection'
import { Calendar, BookOpen, Briefcase } from 'lucide-react'

function DashboardHome() {
  const previews = [
    { title: 'Upcoming Events', text: 'No events yet — check back soon.', icon: Calendar },
    { title: 'Learning Resources', text: 'New resources are on the way.', icon: BookOpen },
    { title: 'Internship Opportunities', text: 'Opportunities will appear here.', icon: Briefcase },
  ]

  return (
    <div>
      <WelcomeSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previews.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
            >
              <Icon className="text-brand-orange mb-3" size={22} />
              <h3 className="font-display text-brand-black font-semibold mb-1">{item.title}</h3>
              <p className="font-body text-gray-500 text-sm">{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardHome