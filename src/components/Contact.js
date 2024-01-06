import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formInitialDetails = {
        name: '',
        email:'',
        message:''
    }

    const[formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText,setButtonText] = useState('Send');
    const[status, setStatus] = useState({});

    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        
        try {
            // 发送邮件
            const result = await emailjs.send('service_s0pqahk', 'template_b0al3pe', formDetails, 'QI7MlK3u_kQ_4DKh_');
            console.log(result.text);
            setStatus({ success: true, message: 'Message sent successfully' });
            setFormDetails(formInitialDetails);
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus({ success: false, message: "Failed to send message. Please try again later." });
        }
        // try{
        //     let response = await fetch("https://chris-wang-ca-github-npxaz1po1-chriswangcas-projects.vercel.app/api/sendMail",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "Application/json;charset=utf-8",
        //         },
        //         body: JSON.stringify(formDetails),
        //     });

        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }

        //     let result = await response.json();
        //     setFormDetails(formInitialDetails);

        //     if(result.code === 200) {
        //         setStatus({success: true, message: 'Message sent successfully'});
        //     }else{
        //         setStatus({success: false, message: "Something went wrong, please try again later"})
        //     }
        // }catch(error) {
        //     console.error("There was an error!", error);
        //     setStatus({success: false, message: "Failed to send message. Please try again later."});
        // }
        setButtonText("Send");
    };
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me"/>
                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={12} className="px-1">
                                    <input type="text" value={formDetails.name} placeholder="Name" onChange={(e)=> onFormUpdate('name',e.target.value)} />
                                </Col>
                                <Col md={12}></Col>
                                <Col md={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email',e.target.value)} />
                                </Col>
                                <Col md={12}></Col>
                                <Col md={12} className="px-1">
                                    <textarea rows="3" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message',e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p style={{ fontSize: '24px'}} className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}