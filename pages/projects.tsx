import ProjectCard from '../components/ProjectCard'
import { projects as projectsData } from '../data/data'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { useState } from 'react'
import { Category } from '../type'
import { motion } from 'framer-motion'
import { fadeInUP, routeAnimation, stagger } from '../animation'
import Head from 'next/head'

const Projects = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null)
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    } else {
      const newArray = projectsData.filter((project) =>
        project.category.includes(category)
      )
      setProjects(newArray)
      setActive(category)
    }
  }

  return (
    <motion.div
      className='px-5 py-2'
      style={{ height: '65vh' }}
      variants={routeAnimation}
      animate='animate'
      initial='initial'
      exit='exit'
    >
      <Head>
        <title>Flaviu Hossu | Projects | Web Dev</title>
      </Head>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className='relative grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        animate='animate'
        initial='initial'
      >
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div
            className='col-span-12 bg-gray-200 rounded-full sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
            variants={fadeInUP}
            animate='animate'
            initial='initial'
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
