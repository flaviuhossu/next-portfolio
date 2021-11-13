import { FunctionComponent } from 'react'
import { ISkill } from '../type'
import { motion } from 'framer-motion'

const Bar: FunctionComponent<{
  data: ISkill
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <div className='flex my-2 text-white bg-gray-200 rounded-full dark:bg-dark-300'>
      <motion.div
        className='flex items-center px-4 py-1 font-semibold rounded-full bg-gradient-to-r from-sun-to-crayola dark:text-sun dark:bg-gradient-to-r dark:from-sun-to-crayola'
        style={{ width: bar_width }}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className='mx-1 my-auto mr-3 min-w-min' />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
