import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, ProgressBar } from "react-bootstrap";
import axios from "axios";
import "./StudentHome.css";

const StudentHome = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        axios
            .get(
                "https://my-json-server.typicode.com/peter2707/json-api-for-testing/questions"
            )
            .then((response) => {
                setQuestions(response.data);
                setUserAnswers({});
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const getCurrentQuestion = () => {
        return questions[currentQuestionIndex];
    };

    const renderQuestion = () => {
        const currentQuestion = getCurrentQuestion();
        if (!currentQuestion) {
            return <p>No questions available.</p>;
        }

        const { id, qtype, question, choices } = currentQuestion;

        switch (qtype) {
            case "text":
                return (
                    <Form.Group controlId={id}>
                        <Form.Label>{question}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your answer"
                            value={userAnswers[id] || ""}
                            onChange={(e) =>
                                handleAnswerChange(id, e.target.value)
                            }
                        />
                    </Form.Group>
                );
            case "radio":
                if (!choices || !Array.isArray(choices)) {
                    return <p>No choices available for this question.</p>;
                }
                return (
                    <Form.Group controlId={id}>
                        <Form.Label>{question}</Form.Label>
                        {choices.map((choice, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                id={`radio-${id}-${index}`}
                                label={choice}
                                checked={userAnswers[id] === choice}
                                onChange={() => handleAnswerChange(id, choice)}
                            />
                        ))}
                    </Form.Group>
                );
            case "multiple_choice":
                if (!choices || !Array.isArray(choices)) {
                    return <p>No choices available for this question.</p>;
                }
                return (
                    <Form.Group controlId={id}>
                        <Form.Label>{question}</Form.Label>
                        {choices.map((choice, index) => (
                            <Form.Check
                                key={index}
                                type="checkbox"
                                id={`checkbox-${id}-${index}`}
                                label={choice}
                                checked={
                                    userAnswers[id]?.includes(choice) || false
                                }
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    handleMultipleChoiceAnswerChange(
                                        id,
                                        choice,
                                        checked
                                    );
                                }}
                            />
                        ))}
                    </Form.Group>
                );
            default:
                return null;
        }
    };

    const handleMultipleChoiceAnswerChange = (questionId, choice, checked) => {
        setUserAnswers((prevAnswers) => {
            const prevAnswer = prevAnswers[questionId] || [];
            let newAnswer;
            if (checked) {
                newAnswer = [...prevAnswer, choice];
            } else {
                newAnswer = prevAnswer.filter((item) => item !== choice);
            }
            return {
                ...prevAnswers,
                [questionId]: newAnswer,
            };
        });
    };

    const renderNavigationButtons = () => {
        const isLastQuestion = currentQuestionIndex === questions.length - 1;
        return (
            <div className="navigation-buttons">
                {currentQuestionIndex > 0 && (
                    <Button
                        variant="outline-secondary"
                        onClick={() =>
                            setCurrentQuestionIndex(
                                (prevIndex) => prevIndex - 1
                            )
                        }
                    >
                        Previous
                    </Button>
                )}
                {!isLastQuestion && (
                    <Button
                        variant="outline-primary"
                        onClick={handleNextQuestion}
                    >
                        Next
                    </Button>
                )}
                {isLastQuestion && (
                    <Button variant="success" onClick={submitAnswers}>
                        Submit
                    </Button>
                )}
            </div>
        );
    };

    const submitAnswers = () => {
        console.log("User answers:", userAnswers);
        // axios
        //     .post("https://my-api.com/submit-answers", userAnswers)
        //     .then((response) => {
        //         console.log("Answers submitted successfully");
        //     })
        //     .catch((error) => {
        //         console.error("Error submitting answers:", error);
        //     });
    };

    const calculateProgress = () => {
        return currentQuestionIndex + 1;
    };

    return (
        <Container>
            <Card className="question-card">
                <Card.Body>
                    <Card.Title>Questionnaire</Card.Title>
                    <ProgressBar
                        now={calculateProgress()}
                        max={questions.length}
                        label={`${calculateProgress()} / ${questions.length}`}
                        className="mb-3"
                    />
                    {renderQuestion()}
                    {renderNavigationButtons()}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StudentHome;
