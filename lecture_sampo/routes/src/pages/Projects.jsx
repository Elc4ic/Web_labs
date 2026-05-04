import { Link } from 'react-router'

const projects = [
    { id: 1, title: 'Интернет-магазин' },
    { id: 2, title: 'Погодный сервис'},
    { id: 3, title: 'Трекер задач' },
]
export default function Projects() {
    return (
        <div>
            <h1>Проекты</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}