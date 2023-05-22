import React, { useEffect, useState } from "react";
import {
    Container,
    Card,
    Form,
    Button,
    ProgressBar,
    Row,
    Col,
} from "react-bootstrap";
import axios from "axios";
import "./Survey.css";

const Survey = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [friendDetails, setFriendDetails] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://my-json-server.typicode.com/peter2707/json-api-for-testing/questions"
            )
            .then((response) => {
                console.log(response.data);
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

    const handleFriendDetailsChange = (index, field, value) => {
        setFriendDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            updatedDetails[index][field] = value;
            return updatedDetails;
        });
    };

    const handleAddFriend = () => {
        setFriendDetails((prevDetails) => [
            ...prevDetails,
            { name: "", grade: "", knows: [] },
        ]);
    };

    const handleRemoveFriend = (index) => {
        setFriendDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            updatedDetails.splice(index, 1);
            return updatedDetails;
        });
    };

    const handleFriendOfFriendsChange = (
        friendIndex,
        friendToCheck,
        checked
    ) => {
        setFriendDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            const friend = updatedDetails[friendIndex];
            if (checked) {
                friend.knows.push(friendToCheck);
            } else {
                friend.knows = friend.knows.filter(
                    (name) => name !== friendToCheck
                );
            }
            return updatedDetails;
        });
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
            case "friend_details":
                return (
                    <Form.Group controlId={id}>
                        <Form.Label>{question}</Form.Label>
                        {friendDetails.map((friend, index) => (
                            <div
                                key={index}
                                className="friend-details-row mb-3"
                            >
                                <Row>
                                    <Col sm={1}>
                                        <div className="friend-details-number mt-2">
                                            {index + 1}.
                                        </div>
                                    </Col>
                                    <Col sm={9}>
                                        <div className="friend-details-input">
                                            <Form.Control
                                                type="text"
                                                placeholder="Friend's name"
                                                value={friend.name}
                                                onChange={(e) =>
                                                    handleFriendDetailsChange(
                                                        index,
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </Col>
                                    <Col sm={1}>
                                        {index === friendDetails.length - 1 && (
                                            <Button
                                                variant="outline-danger"
                                                onClick={() =>
                                                    handleRemoveFriend(index)
                                                }
                                                className="friend-details-remove-btn"
                                            >
                                                -
                                            </Button>
                                        )}
                                    </Col>
                                    <Col sm={1}>
                                        {index === friendDetails.length - 1 && (
                                            <Button
                                                variant="outline-success"
                                                onClick={handleAddFriend}
                                                className="friend-details-add-btn"
                                            >
                                                +
                                            </Button>
                                        )}
                                    </Col>
                                </Row>
                            </div>
                        ))}

                        {friendDetails.length === 0 && (
                            <Button
                                variant="outline-success"
                                onClick={handleAddFriend}
                                className="friend-details-add-btn"
                            >
                                +
                            </Button>
                        )}
                    </Form.Group>
                );

            case "friend_of_friends":
                return (
                    <Form.Group controlId={id}>
                        <Form.Label>{question}</Form.Label>
                        {friendDetails.map((friend, index) => (
                            <div key={index}>
                                <Form.Label className="friend-of-friends-label">
                                    {friend.name} knows:
                                </Form.Label>
                                {friendDetails.map(
                                    (friendToCheck, friendIndex) => (
                                        <Form.Check
                                            key={friendIndex}
                                            type="checkbox"
                                            id={`friend-of-friends-checkbox-${index}-${friendIndex}`}
                                            label={friendToCheck.name}
                                            checked={friend.knows.includes(
                                                friendToCheck.name
                                            )}
                                            onChange={(e) => {
                                                const { checked } = e.target;
                                                handleFriendOfFriendsChange(
                                                    index,
                                                    friendToCheck.name,
                                                    checked
                                                );
                                            }}
                                        />
                                    )
                                )}
                            </div>
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
        console.log("Friend details:", friendDetails);
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
                    <Card.Title>Survey #1</Card.Title>
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

export default Survey;
