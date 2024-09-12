import Link from 'next/link'
import { CodeBracketIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center transform hover:scale-105 transition-transform duration-200">
          <CodeBracketIcon className="h-8 w-8 mr-2" />
          <span>Biyi</span>
        </Link>
        <ul className="flex space-x-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-primary transition-colors duration-200 transform hover:scale-110 inline-block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}