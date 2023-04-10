import "./Project.css"
import Button from "./Button";
function Project(props) {
    return (
        <div className="project">
            <h2 className="title">
                {props.project.titre}
            </h2>
            <img className="image" src={require("../assets/git.jpeg")}></img>
            <p className="description">
                {props.project.description}
            </p>
            <Button textButton={"En savoir plus"} />
        </div>
    )
};

export default Project;