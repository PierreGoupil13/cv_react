import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList"
import './ProjectPage.css'
function ProjectPage() {
    return (
        <div className="ProjectPage">
            <Navbar />
            <ProjectList />
        </div>
    )
};

export default ProjectPage;