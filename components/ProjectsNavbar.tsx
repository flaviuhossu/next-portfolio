import { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem: FunctionComponent<{
  value: Category | 'all'
  handleFilterCategory: Function
  active: string
}> = ({ value, handleFilterCategory, active }) => {
  let className = 'font-semibold capitalize cursor-pointer hover:text-crayola'
  if (active === value) {
    className += ' text-sun'
  }
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className='flex px-3 py-3 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all' {...props} />
      <NavItem value='react' {...props} />
      <NavItem value='javascript' {...props} />
    </div>
  )
}

export default ProjectsNavbar
