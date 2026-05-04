import { useParams } from 'react-router'

export default function ProjectDetail() {
    const { id } = useParams()
    return (
        <div>
            <h1>Проект #{id}</h1>
            <p>описание проекта </p>
        </div>
    )
}