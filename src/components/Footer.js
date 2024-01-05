import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import linkedinIcon from '../assets/img/nav-icon1.svg'
import githubIcon from '../assets/img/github-mark-white.png'
import navIcon3 from '../assets/img/nav-icon3.svg'



export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">

                    <Col sm={6} className="mt-5">
                    </Col>

                    <Col sm={6} className="text-center text-sm-end mt-5">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/chris-w-csc" target="_blank"><img src={linkedinIcon} /></a>
                            <a href="https://github.com/ChrisWangCA" target="_blank"><img src={githubIcon} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2024</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}