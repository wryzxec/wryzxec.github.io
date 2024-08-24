import React from 'react';
import Container from '../styles/container/Container';
import './Projects.css';

const projectData = [
    {
        title: "Multithreaded Chat Server",
        language: "C++",
        body: "A multithreaded client-server based chat application, built using C++ the Windows Sockets API.",
        date: "Aug 2024 - Present",
        github_link: "https://github.com/wryzxec/Chat_Server",
    },
    {
        title: "Numpy Neural Network",
        language: "Python",
        body: "A neural network which classifies handwritten digits, without the use of any ML frameworks.",
        date: "Jun 2024 - Aug 2024",
        readmore_link: "/numpy-neural-network",
        github_link: "https://github.com/wryzxec/MNIST_NeuralNet",
    },
    {
        title: "Island Detection with DFS & BFS Algorithms",
        language: "Java",
        body: "Using Depth-First Search (DFS) and Breadth-First Search (BFS) to detect islands in a 2D grid. Visualised with the help of JavaFX.",
        date: "Dec 2023 - Jan 2024",
        github_link: "https://github.com/wryzxec/Graph_Based_Island_Detection",
    }
];

const Projects = () => {
    return (
        <div className='projects'>
            <div className='timeline-connector'></div>
            <div className='projects-header'>Projects</div>
            <div className='projects-body'>
                {projectData.map((project, index) => (
                    <Container
                        key={index}
                        title={
                            <>
                                {project.title}
                                {project.language && (
                                    <span className='project-language'>
                                        • {project.language}
                                    </span>
                                )}
                            </>
                        }
                        body={project.body}
                        date={project.date}
                        readmore_link={project.readmore_link}
                        github_link={project.github_link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
