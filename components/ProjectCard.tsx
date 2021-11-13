import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUP, stagger } from '../animation'

const ProjectCard: FunctionComponent<{
  project: IProject
  showDetail: null | number
  setShowDetail: (id: null | number) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <motion.div variants={stagger} animate='animate' initial='initial'>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(id)}
        width='300px'
        height='150px'
        layout='responsive'
      />
      <p className='my-2 text-center'>{name}</p>

      {showDetail === id && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 div md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
          <motion.div variants={stagger}>
            {/* <img src={image_path} alt={name} /> */}
            <motion.div
              variants={fadeInUP}
              className='border-4 border-gray-100'
            >
              <Image
                src={image_path}
                alt={name}
                width='300px'
                height='150px'
                layout='responsive'
              />
            </motion.div>
            <motion.div
              className='flex justify-center my-4 space-x-3 '
              variants={fadeInUP}
            >
              <a
                href={github_url}
                className='flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          {/* END OF LEFT SIDE */}
          <motion.div variants={stagger} animate='animate' initial='initial'>
            <motion.h2
              variants={stagger}
              className='my-3 text-xl font-medium md:text-2xl'
            >
              {name}
            </motion.h2>
            <motion.h3 variants={stagger} className='mb-3 font-medium'>
              {description}
            </motion.h3>
            <motion.div
              variants={stagger}
              className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
            >
              {key_techs.map((tech) => (
                <span
                  className='px-2 py-2 my-1 bg-gray-200 rounded-sm dark:bg-dark-200 dark:text-white'
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:text-white dark:bg-dark-100'
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard
