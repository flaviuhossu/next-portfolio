import Bar from '../components/Bar'
import { languages, tools } from '../data/data'
import { motion } from 'framer-motion'
import { fadeInUP, routeAnimation } from '../animation'

import Head from 'next/head'

const resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      animate='animate'
      initial='initial'
      exit='exit'
    >
      <Head>
        <title>Flaviu Hossu | Resume | Web Dev</title>
      </Head>
      {/* Education and Experience */}

      <div className='grid md:grid-cols-2'>
        <motion.div variants={fadeInUP} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold text-crayola'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Automation Engineering</h5>
            <p className='font-semibold'>Technical University of Cluj-Napoca</p>
            <p className='my-3'>
              Started in 2016 and graduated in 2020. Some of the classes that
              got me interested: Control Engineering, System Theory, Databases,
              Data Structures and Algorithms, OOP Fundamentals, Software
              Engineering
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUP} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold text-crayola'>
            Past Experience
          </h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Automation Engineer</h5>
            <p className='font-semibold'>Centra Plus Prod SRL</p>
            <p className='my-3'>
              Developed a strong work ethic and learned to work in a team.
              Worked with automation software programming languages (Ladder,
              STL, SCL) that solidified my algorithmic thinking Designing
              human-machine interfaces helped me understand the importance of
              good UX delivery
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUP} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold text-crayola '>
            Relevant experience
          </h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Learning Web Development</h5>
            <li className='my-3'>Free Code Camp : Basics of Javascript</li>
            <li className='my-3'>Coding Addict : Basics of HTML and CSS</li>
            <li className='my-3'>
              Coding Addict : DOM manipulation and introduction to React JS
            </li>
            <li className='my-3'>
              Backbench Coder : Intermediate level React JS, Redux, APIs and
              basics of Bootstrap and Tailwind
            </li>
            <li className='my-3'>
              Traversy Media : Asynchronous Javascript and AJAX calls
            </li>
          </div>
        </motion.div>
        <motion.div variants={fadeInUP} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold text-crayola '>My passions</h5>
          <div>
            <li className='my-2 text-xl '>Learning Web Development</li>
            <li className='my-2 text-xl '>Jamming on guitar and piano</li>
            <li className='my-2 text-xl '>Hiking</li>
            <li className='my-2 text-xl '>Meditating</li>
          </div>
        </motion.div>
      </div>
      {/* Language and tools */}
      <div className='grid gap-12 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages and Frameworks</h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools and Softwares</h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume
