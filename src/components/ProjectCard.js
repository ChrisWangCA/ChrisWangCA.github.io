import { Col } from "react-bootstrap"
export const ProjectCard = ({title, description, imgUrl, github}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span> <br></br>
                    <a href={github} target="_blank" style={{fontSize: 25}}>Github</a>
                </div>
            </div>
        </Col>
    )
}