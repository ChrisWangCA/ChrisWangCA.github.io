import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { ArrowRightCircle, Facebook } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from "react";
import "animate.css"
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack developer", "DevOps Engineer", "Software Developer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval (ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(preDelta => preDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }


  return (
    <section className="banner" id="home">
      <Container>
        {/* xs={12}: 在超小屏幕（如手机）上，这个列将占据整行（12列的全部空间）。
             md={6}: 在中等屏幕（如平板电脑）上，列将占据半行（12列中的6列）。
             xl={7}: 在更大的屏幕（如大屏幕电脑）上，列将占据稍多于半行的空间（12列中的7列） */}
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
              <div className={isVisible ? "animate__animated animate__fadeIn":""}>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>{`Hi I'm Chris, a `}<span className="wrap">{text}</span></h1>
              
              <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
              </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
             <img src={headerImg} alt="Headder Image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
