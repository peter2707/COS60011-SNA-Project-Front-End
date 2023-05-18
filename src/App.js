import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
    return (
        <Container>
            <div className="menu-1 mt-3 text-center">
                <h1 className="mb-5">
                    <b>Are you a Student or Staff?</b>
                </h1>
                <Row>
                    <Col>
                        <a
                            href="#student-section"
                            className="btn btn-lg btn-dark"
                        >
                            Student
                        </a>
                        <a
                            href="#staff-section"
                            className="btn btn-lg btn-dark"
                        >
                            Staff
                        </a>
                    </Col>
                </Row>
            </div>
            <div className="menu-2">
                <img
                    src="/voicematters.jpg"
                    alt="Banner"
                    height={600}
                    width={1200}
                />
            </div>
            <h3>
                <b>How feedback can support you?</b>
            </h3>
            <div className="menu-3 mt-5" id="student-section">
                <Row className="mt-3">
                    <Col>
                        <h3 className="mb-3">
                            <b>Student</b>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus vel dui orci. Etiam erat magna,
                            porttitor vel fermentum vitae, pulvinar quis orci.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed quis ultrices neque. Nam venenatis
                            tincidunt orci, vel imperdiet quam. Quisque
                            consectetur dignissim lobortis. Pellentesque
                            facilisis urna vel tellus maximus rutrum. Aliquam at
                            purus ornare, laoreet lacus vitae, convallis quam.
                            Fusce et felis non elit tempus volutpat.
                        </p>
                    </Col>
                    <Col>
                        <img
                            className="banner"
                            src="/image-placeholder.jpg"
                            alt="student banner"
                            width={600}
                            height={400}
                        />
                    </Col>
                </Row>
            </div>
            <div className="menu-4" id="staff-section">
                <Row className="mt-3">
                    <Col>
                        <img
                            className="banner"
                            src="/image-placeholder.jpg"
                            alt="staff banner"
                            width={600}
                            height={400}
                        />
                    </Col>
                    <Col>
                        <h3 className="mb-3">
                            <b>Staff</b>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus vel dui orci. Etiam erat magna,
                            porttitor vel fermentum vitae, pulvinar quis orci.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed quis ultrices neque. Nam venenatis
                            tincidunt orci, vel imperdiet quam. Quisque
                            consectetur dignissim lobortis. Pellentesque
                            facilisis urna vel tellus maximus rutrum. Aliquam at
                            purus ornare, laoreet lacus vitae, convallis quam.
                            Fusce et felis non elit tempus volutpat.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default App;
