import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    console.log(theme)
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }

  return (
    <>
      <Image
        src='https://avatars.githubusercontent.com/u/72090962?v=4'
        // src='/../public/images/morty.jpg'
        layout='intrinsic'
        alt='user-avatar'
        width={200}
        height={200}
        className='rounded-full max-h-1'
        quality='100'
      />

      <h1 className='my-4 text-3xl font-medium tracking-wider font-staat'>
        <span className='text-crayola'>Flaviu </span>
        Hossu
      </h1>
      <p className='px-2 py-1 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-200'>
        Frontend Developer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 hover:bg-crayola hover:text-white'
        href='/assets/HossuFlaviuDumitruResume.pdf'
        download='Resume - Hossu Flaviu'
      >
        <GiTie className='w-6 h-6' />
        Download Resume
      </a>
      {/* Social Icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-crayola md:w-full '>
        <a
          href='https://www.linkedin.com/in/flaviuhossu/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-sun'
        >
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://github.com/flaviuhossu'
          target='_blank'
          rel='noreferrer'
          className='hover:text-sun'
        >
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* Address */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
        // ↓ To overwrite the css from the _app.tsx
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Cluj-Napoca, Romania</span>
        </div>
        <p className='my-2'>flaviu.hossu@gmail.com</p>
        <p className='my-2'>+40728196249</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-sun focus:outline-none hover:bg-crayola hover:text-white'
        onClick={() => window.open('mailto:flaviu.hossu@gmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-sun focus:outline-none hover:bg-crayola hover:text-white'
      >
        Toggle Theme
      </button>
    </>
  )
}

export default Sidebar
