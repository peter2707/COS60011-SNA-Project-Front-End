import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { Button, Card, Container } from "react-bootstrap";

const StudentDashboard = () => {
    return (
        <div className="text-center">
            <h3 className="mt-5 mb-5">Student Dashboard</h3>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome, Student!</Card.Title>
                        <Card.Text>
                            <small>
                                You are logged in as a student. Here are some
                                options for you:
                            </small>
                        </Card.Text>
                        <div className="mb-5 mt-5">
                            <WavyLink to="/survey" color="#092644">
                                <Button variant="primary" className="wide-button">
                                    Take Survey
                                </Button>
                            </WavyLink>
                        </div>
                        <div className="mb-5">
                            <WavyLink to="/analysis" color="#092644">
                                <Button variant="secondary" className="wide-button">
                                    View Analysis
                                </Button>
                            </WavyLink>
                        </div>
                        <div className="mb-3">
                            <Button variant="secondary" className="wide-button" disabled>
                                Previous Surveys
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default StudentDashboard;
