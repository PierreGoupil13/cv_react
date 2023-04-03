import Project from "./Project";
import './ProjectList.css'

function ProjectList() {
    const projects = [
        {
            "titre": "Premier Projet",
            "description": "Voici un project"
        },
        {
            "titre": "Deuxieme Projet",
            "description": "Voici un project"
        },
        {
            "titre": "Deuxieme Projet",
            "description": "Voici un project"
        },
        {
            "titre": "Deuxieme Projet",
            "description": "Voici un project"
        },
        {
            "titre": "Deuxieme Projet",
            "description": "Voici un project"
        },

    ]
    return (
        <div className="projectList">
            <Project project={projects[0]} />
            <Project project={projects[1]} />
            <Project project={projects[2]} />
            <Project project={projects[0]} />
            <Project project={projects[0]} />
            <Project project={projects[0]} />
        </div>
    )
}

export default ProjectList;