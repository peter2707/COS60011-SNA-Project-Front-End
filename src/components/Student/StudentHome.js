import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import axios from "axios";

const StudentHome = () => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/peter2707/json-api-for-testing/questions").then((data) => {
            console.log(data);
            setQuestion(data?.data);
        });
    }, []);

    return (
        <Container>
            Questions:
            {question.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.id}</p>
                        <p>{item?.qtype}</p>
                        <p>{item?.question}</p>
                    </div>
                );
            })}
        </Container>
    );
};

export default StudentHome;
