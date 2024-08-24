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
                    title="Multithreaded Chat Server"
                    body = 
                    "A multithreaded client-server based chat application, built using C++ with the Windows Sockets API."
                    date="Aug 2024 - Present"
                    github_link="https://github.com/wryzxec/Chat_Server"
                />
            </div>

            <div className='projects-body'>
                <Container 
                    title="Numpy Neural Network"
                    body = 
                    "A neural network which classifies handwritten digits, without the use of any ML frameworks."
                    date="Jun 2024 - Aug 2024"
                    readmore_link="/numpy-neural-network"
                    github_link="https://github.com/wryzxec/MNIST_NeuralNet"
                />
            </div>
            
            <div className='projects-body'>
                <Container
                    title="Island Detection with DFS & BFS Algorithms"
                    language="java"
                    body = 
                    "Using Depth-First Search (BFS) and Breadth-First Search (BFS) to detect islands in a 2D grid. Visualised with the help of JavaFX."
                    date="Dec 2023 - Jan 2024"
                    github_link="https://github.com/wryzxec/Graph_Based_Island_Detection"
                />
            </div>
        </div>
    );
}

export default Projects;