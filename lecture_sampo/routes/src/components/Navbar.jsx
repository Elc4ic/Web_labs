import { NavLink } from 'react-router'

export default function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active' : ''}
                end
            >
                Главная
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                О себе
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                Проекты
            </NavLink>
        </nav>
    )
}