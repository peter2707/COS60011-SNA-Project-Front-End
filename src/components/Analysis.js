import React, { useEffect, useRef, useState } from "react";
import { DataSet } from "vis-data";
import { Network } from "vis-network";
import { Container, Button, Card, Modal } from "react-bootstrap";

import axios from "axios";
import "./Analysis.css";

const Analysis = () => {
    const containerRef = useRef(null);
    const networkRef = useRef(null);
    const [studentData, setStudentData] = useState(null);
    const [chartExplanation, setChartExplanation] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const zoomIn = () => {
        if (networkRef.current) {
            const scale = networkRef.current.getScale() * 1.1;
            networkRef.current.moveTo({ scale });
        }
    };

    const zoomOut = () => {
        if (networkRef.current) {
            const scale = networkRef.current.getScale() * 0.9;
            networkRef.current.moveTo({ scale });
        }
    };

    const resetGraph = () => {
        if (networkRef.current) {
            networkRef.current.moveTo({ scale: 1, position: { x: 0, y: 0 } });
        }
    };

    const generateExplanation = () => {
        if (studentData) {
            const studentsCount = studentData.students.length;
            const relationshipsCount = studentData.relationships.length;
            const groups = new Set();
            const relationshipTypes = new Set();

            studentData.students.forEach((student) => {
                groups.add(student.group);
            });

            studentData.relationships.forEach((relationship) => {
                relationshipTypes.add(relationship.type);
            });

            const groupsCount = groups.size;
            const relationshipTypesCount = relationshipTypes.size;

            const explanation = `The chart represents ${studentsCount} students and ${relationshipsCount} relationships. It provides a visual representation of the connections between the students and their groups.\n\nKey points:\n- The chart contains ${groupsCount} distinct groups.\n- The relationships are categorized into ${relationshipTypesCount} types: ${Array.from(
                relationshipTypes
            ).join(", ")}.`;

            setChartExplanation(explanation);
            setShowExplanation(true);
        }
    };

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(
                    "https://my-json-server.typicode.com/peter2707/json-api-for-testing/student-relationship "
                );
                const data = response.data;
                setStudentData(data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudentData();
    }, []);

    useEffect(() => {
        if (studentData) {
            const students = studentData.students;
            const relationships = studentData.relationships;

            // Create a DataSet for nodes and edges
            const nodes = new DataSet(
                students.map((student) => ({
                    id: student.studentId,
                    label: student.name,
                    group: student.group,
                }))
            );
            const edges = new DataSet(
                relationships.map((relationship) => ({
                    from: relationship.from,
                    to: relationship.to,
                    label: relationship.type,
                }))
            );

            // Define options for the network diagram
            const options = {
                interaction: {
                    hover: true,
                    hoverConnectedEdges: true,
                },
                nodes: {
                    shape: "dot",
                    size: 20,
                    font: {
                        size: 16,
                    },
                },
                edges: {
                    width: 2,
                },
                groups: {
                    A: {
                        color: {
                            border: "blue",
                            background: "lightblue",
                        },
                    },
                    B: {
                        color: {
                            border: "green",
                            background: "lightgreen",
                        },
                    },
                    C: {
                        color: {
                            border: "orange",
                            background: "lightyellow",
                        },
                    },
                    D: {
                        color: {
                            border: "red",
                            background: "pink",
                        },
                    },
                },
                physics: {
                    enabled: true,
                },
            };

            // Create a new network instance
            const network = new Network(
                containerRef.current,
                { nodes, edges },
                options
            );
            networkRef.current = network;

            // Cleanup function to remove the network when the component unmounts
            return () => {
                if (networkRef.current) {
                    networkRef.current.destroy();
                    networkRef.current = null;
                }
            };
        }
    }, [studentData]);

    const handleCloseExplanation = () => {
        setShowExplanation(false);
    };

    return (
        <Container>
            <h3 className="mt-5 mb-5 text-center">Social Network Analysis</h3>
            <div className="diagram-container">
                <div className="diagram" ref={containerRef}></div>
                <div className="text-right">
                    <button className="btn-chart" onClick={generateExplanation}>
                        Explanation
                    </button>
                    <button className="btn-chart" onClick={resetGraph}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                    <button className="btn-chart" onClick={zoomOut}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <button className="btn-chart" onClick={zoomIn}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
                <Modal
                    show={showExplanation}
                    onHide={handleCloseExplanation}
                    className="chart-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Chart Explanation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Body>{chartExplanation}</Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={handleCloseExplanation}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
};

export default Analysis;
