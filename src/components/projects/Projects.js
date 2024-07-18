import React from 'react';
import Container from '../styles/container/Container';

import './Projects.css';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='timeline-connector'> </div>
            <div className='projects-header'>
                Projects
            </div>
            <div className='projects-body'>
                <Container 
                    title="Numpy Neural Network"
                    language="python"
                    body = 
                    "Building a neural network to classify handwritten digits, without the use of any ML frameworks."
                    date="Jun 2024 - Present"
                    readmore_link="/numpy-neural-network"
                    github_link="https://github.com/wryzxec/MNIST_NeuralNet"
                />
            </div>
            
            <div className='projects-body'>
                <Container
                    title="Visualising Island Detection with DFS & BFS Algorithms"
                    language="java"
                    body = 
                    "Using Depth-First Search (BFS) and Breadth-First Search (BFS) to detect islands in a 2D array. Visualised with the help of JavaFX."
                    date="Dec 2023 - Jan 2024"
                    github_link="https://github.com/wryzxec/Graph_Based_Island_Detection"
                />
            </div>
        </div>
    );
}

export default Projects;