import { Container, Row, Col } from "react-bootstrap";
import { Nav, Tab  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen";
import adSystem from "../assets/img/ad_system.png"
import foodOrderingSystem from "../assets/img/foodOrderingSystem.png"
import yelpcamp from "../assets/img/yelpcamp.png"
import tetris from "../assets/img/tetris.png"
import movieDatabase from "../assets/img/movieDatabase.png"
import leetcode from "../assets/img/leetcode.png"
import buzzbid from "../assets/img/buzzbid.png"
import "animate.css"


export const Projects = () => {
    const projects = [
        {
          title: "YelpCamp",
          description: "MERN Stack",
          imgUrl: yelpcamp,
          github: 'https://github.com/ChrisWangCA/yelpcamp'
        },
        {
          title: "BuzzBid",
          description: "C# & ASP.NET",
          imgUrl: buzzbid,
          github:'https://github.com/ChrisWangCA/BuzzBid'
        },
        {
          title: "Advertising Search System",
          description: "Java & SpringCloud & Kafka",
          imgUrl: adSystem,
          github: 'https://github.com/ChrisWangCA/SpringCloud-Advertising-Delivery_Search-System'
        },
        {
          title: "Tetris",
          description: "Tetris Game",
          imgUrl: tetris,
          github:'https://github.com/ChrisWangCA/TetrisGame'
        },
        {
          title: "Leetcode",
          description: "Data Structures & Algorithms",
          imgUrl: leetcode,
          github:'https://github.com/ChrisWangCA/Leetcode'
        },
        {
          title: "Movie Database",
          description: "Movie Search Platform",
          imgUrl: movieDatabase,
          github:'https://github.com/ChrisWangCA/Movie-Database'
        },
      ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible}) =>
              <div className={isVisible ? "animate__animated animate__bounce":""}>
            <h2>Projects</h2>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">

            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project,index) => {
                                return (
                                   <ProjectCard key={index}
                                   {...project}
                                   />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
