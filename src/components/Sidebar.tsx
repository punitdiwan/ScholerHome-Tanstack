import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  GraduationCap,
  School,
  Phone,
  CalendarDays,
  MapPin,
  Image,
  Crown,
  Building2,
  Activity,
  Trophy,
  BarChart3,
  ClipboardCheck,
  X,
} from 'lucide-react'

export default function Sidebar({ isOpen, onClose }: {
  isOpen: boolean,
  onClose: () => void;
}) {

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    academics: false,
    students: false,
    parents: false,
    staff: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      section: null
    },
    {
      name: 'About',
      href: '#',
      icon: BookOpen,
      section: 'about',
      children: [
        { name: 'Core Values', href: '/about', icon: School },
        { name: 'Director', href: '/director', icon: Crown },
        { name: 'Principal', href: '/principal', icon: GraduationCap },
        { name: 'Management', href: '/management', icon: Building2 }
      ]
    },
    {
      name: 'Academics',
      href: "#",
      icon: School,
      section: 'academic',
      children: [
        { name: 'Co-Curricular Activities', href: '/co-curricular-activities', icon: Activity },
        { name: 'Beyond Academics', href: '/beyondAcademic', icon: Trophy },
      ]
    },
    {
      name: 'Facilities',
      href: "/facilities",
      icon: Building2,
      section: null
    }, {
      name: 'Gallery',
      href: "/gallery",
      icon: Image,
      section: null
    },
    {
      name: 'Results',
      href: "/results",
      icon: BarChart3,
      section: null,
    },
    {
      name: 'Admissions',
      href: '/admission',
      icon: ClipboardCheck,
      section: null
    },
    {
      name: 'Holidays',
      href: '/holidays',
      icon: CalendarDays,
      section: null
    },
    {
      name: 'Contact Us',
      href: '/contactUs',
      icon: Phone,
      section: null
    },
    {
      name: 'Google Street View',
      href: '/googleStreetView',
      icon: MapPin,
      section: null
    },

  ]

  const SidebarItem = ({ item }: { item: typeof navigationItems[0] }) => {
    const hasChildren = item.section && item.children

    if (hasChildren) {
      return (
        <div className="mb-2">
          <button
            onClick={() => toggleSection(item.section!)}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-600/20 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-school-primary" />
              <span className=" font-medium group-hover:text-blue-600">
                {item.name}
              </span>
            </div>
            {expandedSections[item.section!] ? (
              <ChevronDown className="w-4 h-4 text-school-primary group-hover:text-blue-100 transition-transform duration-200" />
            ) : (
              <ChevronRight className="w-4 h-4 text-school-primary group-hover:text-blue-100 transition-transform duration-200" />
            )}
          </button>

          {expandedSections[item.section!] && (
            <div className="ml-4 mt-1 space-y-1">
              {item.children!.map((child, index) => (
                <Link
                  key={index}
                  to={child.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600/10 transition-all duration-200 group"
                  activeProps={{
                    className: 'bg-blue-600/30 border-l-2 border-blue-300'
                  }}
                >
                  <child.icon className="w-4 h-4 text-blue-400" />
                  <span className=" text-sm group-hover:text-blue-600">
                    {child.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        to={item.href}
        onClick={onClose}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600/20 transition-all duration-200 group mb-2"
        activeProps={{
          className: 'bg-blue-600/30 border-l-2 border-blue-300'
        }}
      >
        <item.icon className="w-5 h-5 text-school-primary group-hover:text-blue-500 transition-colors" />
        <span className=" font-medium group-hover:text-blue-600">
          {item.name}
        </span>
      </Link>
    )
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onClose}
        className="fixed top-4 left-4 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 md:hidden"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white text-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* <GraduationCap className="w-6 h-6 text-primary" /> */}
              <Link to="/" className="block">
                <img
                  src="Scholar_logo.png"
                  alt="scholar logo"
                  className=" w-20 sm:w-22 md:w-24 lg:w-25  h-auto object-contain self-start"
                />
              </Link>
            </div>
            <div>
              <h2 className="text-xl text-school-primary  font-bold ">Scholar Homes </h2>
              <p className="text-secondary text-sm">Navigation Menu</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-school-primary hover:bg-school-primary/80 text-white hover:text-white/80 cursor-pointer rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {navigationItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </nav>

        {/* Sidebar Footer */}
        {/* <div className="p-4 border-t border-blue-500/20">
          <div className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 " />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Welcome User</p>
              <p className="text-blue-200 text-xs">user@excellence.edu</p>
            </div>
          </div>
        </div> */}
      </aside>
    </>
  )
}