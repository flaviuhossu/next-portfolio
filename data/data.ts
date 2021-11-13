import { RiComputerLine, RiTeamFill } from 'react-icons/ri'
import { FaLightbulb, FaRegLightbulb, FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import { MdDeveloperMode } from 'react-icons/md'

import { IProject, IService, ISkill } from '../type'
export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build nice looking and scalable SPAs using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Responsive Designs',
    about:
      'I am always trying to deliver applications suitable <b>for all screen sizes</b> ',
  },
  {
    Icon: AiOutlineApi,
    title: 'Version control',
    about:
      'I keep my code organized and backed-up using <b>github.com</b> and <b>git</b> workflow ',
  },

  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX',
    about:
      'User interfaces design using <b>Figma</b>  and  UX-aware decision making',
  },
  {
    Icon: RiTeamFill,
    title: 'Team oriented mindset',
    about:
      'Working with other people comes natural to me. I like to adopt an assertive personality if conflicts arise',
  },
  {
    Icon: FaRegLightbulb,
    title: 'Curiosity',
    about:
      'I am generally curious about all subjects that I discover, be it technical, aesthetic, or artistic. ',
  },
]
export const languages: ISkill[] = [
  {
    name: 'HTML',
    level: '55',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS',
    level: '48',
    Icon: BsCircleFill,
  },
  {
    name: 'JavaScript',
    level: '63',
    Icon: BsCircleFill,
  },

  {
    name: 'ReactJS',
    level: '58',
    Icon: BsCircleFill,
  },
]

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'VSCode',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '60',
  },
]
export const projects: IProject[] = [
  {
    id: 1,
    name: 'YouTube Clone w/ YT-API ',
    image_path: '/images/youtube.png',
    deployed_url: 'https://you-tube-project-clone.web.app/',
    github_url: 'https://github.com/flaviuhossu/YT-Clone',
    category: ['react'],
    description:
      'Full (almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "YouTube-Clone". User can like a video, comment on a video & Much More ',
    key_techs: [
      'React',
      'Redux',
      'Firebase Auth',
      'YouTube API',
      'SCSS',
      'Bootstrap',
    ],
  },
  {
    id: 2,
    name: 'eleXsis company website',
    image_path: '/images/elexis.png',
    deployed_url: 'https://flaviuhossu.github.io/EDC-Website/index.html',
    github_url: 'https://github.com/flaviuhossu/EDC-Website',
    category: ['javascript'],
    description:
      'HTML,CSS and vanilla JS responsive website with a touch of SASS. This project was very fun to create and helped me solidify the "basics" of frontend development',
    key_techs: ['HTML', 'CSS', 'SCSS', 'Javascript'],
  },
  {
    id: 3,
    name: 'Developer Portfolio',
    image_path: '/images/portfolio.png',
    deployed_url: 'https://flaviuhossu.github.io/EDC-Website/index.html',
    github_url: 'https://github.com/flaviuhossu/EDC-Website',
    category: ['react'],
    description: 'You are looking at it',
    key_techs: ['NextJS', 'Framer Motion', 'Typescript', 'Tailwind'],
  },
]
