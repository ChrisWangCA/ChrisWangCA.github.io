import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
                <h2>Skills</h2>
                <p>Java, Python, C#, JavaScript, HTML, CSS, Typescript<br /> 
                React, Node.js, Express.js, Spring, Bootstrap<br />
                MySQL, MongoDB, Oracle, SQL Server <br />
                Git, Linux, Docker, Agile, RESTful APIs, Kubernetes, Azure
                 </p>
                {/* responsive={responsive}: 这个属性用于定义 Carousel 在不同屏幕尺寸下的响应式行为。responsive 是一个对象，它通常包含不同的断点（如小屏、中屏、大屏）以及在每个断点下 Carousel 应如何表现。例如，它可以定义在不同屏幕宽度下要显示多少个项目，每个项目的大小等。{responsive} 是一个 JavaScript 表达式，它引用了名为 responsive 的变量或常量，这个变量应在组件的上下文中定义。 */}
                {/* infinite={true}: 这个属性设置 Carousel 是否应该无限循环。当设置为 true 时，用户在滚动到 Carousel 的最后一个项目之后，将无缝跳转回第一个项目，从而实现一个无限循环的效果。这对于创建一个连续、不断循环的滑块显示是非常有用的。 */}
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>Java</h5>
                    </div>

                    <div className="item">
                        <img src={meter2} alt="Image" />
                        <h5>Python</h5>
                    </div>

                    <div className="item">
                        <img src={meter3} alt="Image" />
                        <h5>MERN Stack</h5>
                    </div>

                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
