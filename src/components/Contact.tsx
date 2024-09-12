import { EnvelopeIcon, BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  const contactMethods = [
    { name: 'Email', value: 'biyilawal90@gmail.com', icon: EnvelopeIcon, link: 'mailto:biyilawal90@gmail.com' },
    { name: 'LinkedIn', value: 'Biyi Lawal', icon: BriefcaseIcon, link: 'https://www.linkedin.com/in/yourprofile' },
    { name: 'GitHub', value: 'github.com/BiyiLawal', icon: CodeBracketIcon, link: 'https://github.com/BiyiLawal' },
  ]

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="bg-white p-8 rounded-lg shadow-neo transform hover:scale-105 transition-all duration-300">
        <p className="text-lg mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <ul className="space-y-4">
          {contactMethods.map((method) => (
            <li key={method.name} className="flex items-center">
              <method.icon className="h-6 w-6 text-primary mr-3" />
              <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors duration-200">
                {method.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}