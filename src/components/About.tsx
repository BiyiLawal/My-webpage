import { BeakerIcon, LightBulbIcon, ServerIcon } from '@heroicons/react/24/outline'

export default function About() {
  const skills = [
    { name: 'Backend Development', icon: ServerIcon },
    { name: 'Problem Solving', icon: LightBulbIcon },
    { name: 'Scalable Systems', icon: BeakerIcon },
  ]

  return (
    <section id="about" className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="bg-white p-8 rounded-lg shadow-neo transform hover:scale-105 transition-all duration-300">
        <p className="text-lg mb-8">
          I'm a passionate backend developer with expertise in building scalable and efficient server-side applications. 
          With a strong foundation in algorithms, data structures, and database design, I strive to create robust 
          solutions that power modern web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}