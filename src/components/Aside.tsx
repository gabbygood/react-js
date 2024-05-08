import { NavLink } from 'react-router-dom'

export default function Aside() {
  return (
    <aside className='App-sidebar'>
      <nav>
        <h4 className='sidebar text-orange-300 bg-gray-800 text-center p-2 rounded mb-5' >
          Sidebar
        </h4>
        <ul>
          <li>
            <NavLink
              to={'http://localhost:5173/dashboard'}
              target='_self'
              className={'link-a'}
              style={{ color: '#81A0D7' }}
            >
              {'DashBoard'}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'http://localhost:5173/admin'}
              target='_self'
              className={'link-a'}
              style={{ color: '#81A0D7' }}
            >
              {'Admin'}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'http://localhost:5173/students'}
              target='_self'
              className={'link-a'}
              style={{ color: '#81A0D7' }}
            >
              {'Students'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
