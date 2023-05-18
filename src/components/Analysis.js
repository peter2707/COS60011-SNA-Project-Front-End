import React from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, BarController, BarElement, LineController, LineElement, ScatterController, BubbleController, ArcElement, Title } from 'chart.js';
import { Bar, Line, Scatter, Bubble } from 'react-chartjs-2';
import { Container } from "react-bootstrap";

// Register the required scales, controllers, and elements
Chart.register(CategoryScale, LinearScale, PointElement, BarController, BarElement, LineController, LineElement, ScatterController, BubbleController, ArcElement, Title);

const Analysis = () => {
  // Chart 1 - Bar Chart: Number of Friends per Person
  const barChartData = {
    labels: ['Person A', 'Person B', 'Person C', 'Person D', 'Person E'],
    datasets: [
      {
        label: 'Number of Friends',
        data: [8, 12, 6, 10, 15],
        backgroundColor: '#FF6384',
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  };

  // Chart 2 - Scatter Chart: Interaction Graph
  const scatterChartData = {
    datasets: [
      {
        label: 'Interactions',
        data: [
          { x: 5, y: 10 },
          { x: 7, y: 8 },
          { x: 3, y: 6 },
          { x: 9, y: 12 },
          { x: 4, y: 9 },
        ],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const scatterChartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        beginAtZero: true,
        max: 15,
        title: {
          display: true,
          text: 'Interactions',
        },
      },
    },
  };

  // Chart 3 - Line Chart: Latent Graph
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Latent Variable',
        data: [2, 3, 4, 3, 5],
        fill: false,
        borderColor: '#FFCE56',
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 6,
      },
    },
  };

  // Chart 4 - Bubble Chart: Following Graph
  const bubbleChartData = {
    datasets: [
      {
        label: 'Following',
        data: [
          { x: 5, y: 12, r: 8 },
          { x: 7, y: 8, r: 6 },
          { x: 3, y: 10, r: 4 },
          { x: 9, y: 6, r: 10 },
          { x: 4, y: 9, r: 5 },
        ],
        backgroundColor: '#4BC0C0',
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        beginAtZero: true,
        max: 15,
        title: {
          display: true,
          text: 'Following',
        },
      },
    },
  };

  return (
    <Container>
      <div>
        <h2>Number of Friends per Person</h2>
        <Bar data={barChartData} options={barChartOptions} />
      </div>

      <div>
        <h2>Interaction Graph</h2>
        <Scatter data={scatterChartData} options={scatterChartOptions} />
      </div>

      <div>
        <h2>Latent Graph</h2>
        <Line data={lineChartData} options={lineChartOptions} />
      </div>

      <div>
        <h2>Following Graph</h2>
        <Bubble data={bubbleChartData} options={bubbleChartOptions} />
      </div>
    </Container>
  );
};

export default Analysis;
