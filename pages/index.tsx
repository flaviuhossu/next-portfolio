import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/data'
import { motion } from 'framer-motion'
import { fadeInUP, routeAnimation, stagger } from '../animation'

import Head from 'next/head'

const index = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Flaviu Hossu | Portfolio | Web Dev</title>
      </Head>
      <h5 className='mt-3 font-medium'>
        I tend to adopt a holistic approach in all activities that I undertake
        and try to get the most out of them. Both technical knowledge and
        creative endeavors spark my curiosity. I consider myself an ambitious
        person, commited to lifelong learning and continous personal
        development.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-white'>What I offer</h6>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map((service) => (
            <motion.div
              className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'
              variants={fadeInUP}
              // animate='animate'
              // initial='initial'
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index
