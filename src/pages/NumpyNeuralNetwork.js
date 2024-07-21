import React from 'react';
import Menu from '../components/menubar/MenuBar';
import Table from '../components/styles/table/table';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import './NumpyNeuralNetwork.css';

export default function NumpyNeuralNetwork() {
    return (
        <div className='numpy-neural-network'>
            <Menu />
            <div className='header'>
                <div className='title'>Numpy Neural Network</div>
                <div className='desc'>Building a Neural Network in Python, without using any external ML frameworks.</div>
                <div style={{display: 'flex'}}>
                    <div className='github-icon'>
                        <a href="https://github.com/wryzxec/MNIST_NeuralNet" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='social-icon'/>
                        </a>
                    </div>
                    <Link className='github-link' to={"https://github.com/wryzxec/MNIST_NeuralNet"}>View Code on GitHub</Link>
                </div>
            </div>
            <div className='body'>
                <div className='subtitle'>
                    The Goal.
                </div>
                <div className='text'>
                    The aim of this project was to build a neural network from scratch, which when given an image of a handwriten digit, could accurately classify it. The main purpose of
                    building it from scratch was to also better my own understanding of the stuff that happens 'under the hood' with popular ML frameworks like TensorFlow and PyTorch.
                </div>
                <div className='subtitle'>
                    The MNIST Dataset.
                </div>
                    <div className='text'>
                        The MNIST dataset is a dataset of 70,000 28x28 grayscale images of handwritten digits.
                        Each image contains only one digit from 0-9. For the purpose of training a neural network, we separate these images into two sets: the training set and the test set.
                        We allocate 60,000 images for training and 10,000 images for testing.
                    </div>
                    <img className='image' src = "/MNIST_examples.png" alt="MNIST Examples"></img>
                    <div className = 'text'>
                        Many of the digits in the dataset are poorly drawn. For example they are not always clear [example 2] and sometimes written at angles [example 7].
                    </div>
                <div className='subtitle'>
                    Overview of the Neural Network.
                </div>
                    <div className='text'>
                        The type of Neural Network implemented in this project is a feedforward neural network.
                        This means that the data flows in one direction, from the input layer to the output layer.
                        In brief terms, the network is made up of layers of neurons, each of which is connected to the neurons in the next layer.
                        Each neuron has a weight and a bias, which are used to calculate the output of the neuron. The weights and biases are adjusted during training and is 
                        what allows the network to learn.
                    </div>
                
                    <div className='text'>
                        Here is the process, split into distinct steps:
                        <ol>
                            <li><p className='bold-enhance'>Initialisation</p>: Give the neurons in the network starting weights and biases.</li>
                            <li><p className='bold-enhance'>Forward Propagation</p>: Pass the input data through the network layers and obtain predictions.</li>
                            <li><p className='bold-enhance'>Compute Loss</p>: Pass the predictions through a loss function to measure the error of the network.</li>
                            <li><p className='bold-enhance'>Back Propagation</p>: Using partial derivatives, compute the gradient of the loss function with respect to each weight and bias in the network.</li>
                            <li><p className='bold-enhance'>Update Parameters</p>: Update the weights and biases in the direction that reduces the loss, using the Gradient Descent algorithm.</li>
                            <li><p className='bold-enhance'>Repeat</p>: Carry out steps 2-5 until the network converges sufficiently.</li>
                        </ol>
                    </div>

                    <div className='text'>
                        To better understand the overal structure of the network, here is a diagram of the network architecture. It is important to note 
                        that the real network used in this project has 784 input neurons, each representing a single pixel of an image,
                        and a variable number of layers. This diagram is a simplified version.
                        Each of the 10 neurons in the output layer represents the probability that the input image is the digit corresponding to that neuron (0-9).
                    </div>
                    <img className='image' src="/neural_network_architecture.png" alt="Neural Network Architecture" />
                <div className='subtitle'>
                    Key Parts of the Network.
                </div>
                    <div className='subsubtitle'>Activation Functions.</div>
                    <div className='text'>
                        Activation functions introduce non-linearity into the network, which allows the network to learn complex patterns in the data. Without these 
                        functions, the network would simply be a linear regression model.

                        For the purpose of this network, we are using two activation functions: the ReLU function and the Softmax function which are defined as follows:

                        <BlockMath math={String.raw`
                        \text{ReLU}(z_i) =
                        \begin{cases}
                        0 & \text{if } z_i \le 0 \\
                        z_i & \text{if } z_i > 0
                        \end{cases}
                        `} />

                        <BlockMath math={String.raw`
                        \text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{n} e^{z_j}}
                        `} />

                        The ReLU function is used in the hidden layers of the network, while the Softmax function is used in the output layer. The Softmax 
                        function is used to convert the output of the network into probabilities.
                    </div>

                    <div className='subsubtitle'>
                        Loss Function.
                    </div>
                    <div className='text'>
                        For this Network we are using the Categorical Cross-Entropy Loss function. This function is used to measure the error of the network.
                        It is defined as follows: 

                        <BlockMath math={String.raw`
                        L(y, \hat{y}) = -\sum_{i=1}^{n} y_i \log(\hat{y}_i)
                        `} />

                        Here <InlineMath math={String.raw`y`} /> is the true label of the input data and <InlineMath math={String.raw`\hat{y}`} /> is the predicted label.
                        n is the number of classes in the dataset, in this case 10.
                    </div>

                    <div className='subsubtitle'>
                        Gradient Descent.
                    </div>
                    <div className='text'>
                        Gradient Descent is an optimisation algorithm used to minimise the loss function of the network.
                        It works by updating the weights and biases of the network, opposite to the direction of
                        the gradient of the loss function, with respect to the weights and biases.
                    </div>
                    <div className='text'>
                        This is an iterative process and can be defined by an update rule as follows:
                        <BlockMath math={String.raw`
                        \begin{align*}
                            W_{\text{new}} &= W_{\text{old}} - \alpha \frac{\partial L}{\partial W}\\
                            b_{\text{new}} &= b_{\text{old}} - \alpha \frac{\partial L}{\partial b}
                        \end{align*}
                        `} />
                    </div>
                    <div className='text'>
                        Here <InlineMath math={String.raw`W`} /> and <InlineMath math={String.raw`b`} /> are the weights and biases of the network,
                        <InlineMath math={String.raw`L`} /> is the loss function, and <InlineMath math={String.raw`\alpha`} /> is the learning rate. The learning rate is a hyperparameter
                        (a parameter that is set before training begins)
                        which determines how much the weights and biases are updated with each iteration.
                    </div>

                    <div className='subsubtitle'>
                        Backpropagation.
                    </div>
                    <div className='text'>
                        Back Propagation is how the network learns. It is the process of calculating the gradient of the loss function with respect to each weight and bias in the network.
                        There are many equations involved an they are dependent on the loss and activation functions used in the network.
                        One thing to notice is that each equation is dependent on a previous one, which is an application of the chain rule in calculus.
                    </div>
                    <div className='text'>
                        For the Softmax layer, the equations for the gradients are as follows:

                        <BlockMath math={String.raw`
                        \begin{align*}
                        \frac{\partial L}{\partial z_k} &= A_k - y_k\\
                        \\
                        \frac{\partial L}{\partial W_k} &= \frac{1}{m} \cdot A_{\text{k-1}}^T \cdot \frac{\partial L}{\partial z_k}\\
                        \\
                        \frac{\partial L}{\partial b_k} &= \frac{1}{m} \cdot \sum_{k=1}^{m} \frac{\partial L}{\partial z_k}
                        \end{align*}
                        `} />

                        Here <InlineMath math={String.raw`A_k`} /> is the output of the Softmax layer, <InlineMath math={String.raw`y_k`} /> is the true label of the input data,
                        <InlineMath math={String.raw`W_k, b_k`} /> are the weights and biases of the Softmax layer, and <InlineMath math={String.raw`m`} /> is the number of samples in the dataset.
                    </div>
                    <div className='text'>
                        For the ReLU layer, the equations for the gradients are as follows:

                        <BlockMath math={String.raw`
                        \begin{align*}
                            \frac{\partial L}{\partial z_k} &= W_{\text{k+1}}\cdot\frac{\partial L}{\partial Z_{\text{k+1}}} \cdot \text{ReLU}'(z_k)\\
                            \\
                            \frac{\partial L}{\partial W} &= \frac{1}{m} \cdot A_{\text{k-1}}^T \cdot \frac{\partial L}{\partial z_k}\\
                            \\
                            \frac{\partial L}{\partial b} &= \frac{1}{m} \cdot \sum_{k=1}^{m} \frac{\partial L}{\partial z_k}
                        \end{align*}
                        `} />

                        Here <InlineMath math={String.raw`Z_k`} /> is the input to the ReLU activation function.
                    </div>



                <div className='subtitle'>
                    Optimising the Network.
                </div>
                    <div className='subsubtitle'>
                        He Initialisation
                    </div>
                    <div className='text'>
                        It is important to correctly initialise weights in a neural network.
                        If weights are too small or too large, the network will not learn effectively.

                        He Initialisation reduces the variance of weights between layers, preventing gradients from exploding or vanishing. It is defined as follows:

                        <BlockMath math={String.raw`
                            W \sim N(0, \sqrt{\frac{2}{n_{in}}})
                        `} />

                        This denotes a normal distribution with a mean of 0 and a standard deviation of

                        <InlineMath math={String.raw`
                        \sqrt{\frac{2}{n_{in}}}
                        `} />

                        <span style={{ marginLeft: '5px', marginRight: '5px' }}>where</span>{' '}

                        <InlineMath math={String.raw` 
                        n_{in}
                        `} />

                        <span style={{ marginLeft: '5px'}}>is the number of neurons in the previous layer.</span>{' '}
                        
                        <br />
                        <br />
                        
                        <div>
                        Note that whilst biases are often initialised to 0, weights cannot. This can be explained by looking at the equation for the output of a neuron:
                        <BlockMath math={String.raw`
                        z = W \cdot X + b
                        `} />

                        We can see that if the weights are initialised to 0, then <InlineMath math={String.raw` 
                        W \cdot X = 0.
                        `} />
                        <span style={{ marginLeft: '5px'}}>This means that the neuron output does not depend on the input X and so all neurons will output the same value.
                            This will result in the network failing.</span>{' '}

                        </div>
                    </div>


                    <div className='subsubtitle'>
                        Mini-Batch Gradient Descent
                    </div>
                        <div className='text'>
                        Mini-batch gradient descent is a variation of the gradient descent algorithm that splits the training dataset into small batches. These
                        batches are randomly sampled from the training set.
                        When data is processed in these small batches it means that the loss calculation as well as weight and bias updates are carried out with each mini-batch.
                        This is unlike batch gradient descent where the training set is processed as a whole unit.
                        </div>
                        <div className='text'>
                        This frequent updating can help the model find better generalisation since it prevents the model from being stuck in local minima or saddle points for too long.
                        </div>

                    <div className='subsubtitle'>
                        Gradient Descent with Momentum
                    </div>
                        <div className='text'>
                        Gradient Descent with Momentum builds on the Gradient Descent algorithm. 
                        It calculates an exponentially weighted average of the gradients which is used to update the weights and biases. 
                        This allows for the network to converge much faster to the optimal solution as it dampens oscillations in the gradient.
                        </div>
                        <div className='text'>
                        
                        The update rule for Gradient Descent with Momentum is as follows:

                        <BlockMath math={String.raw`
                        \begin{align*}
                        V_{\delta w} &:= \beta \cdot V_{\delta w} + (1-\beta)\cdot \delta w\\
                        V_{\delta b} &:= \beta \cdot V_{\delta b} + (1-\beta)\cdot \delta b
                        \end{align*}
                        `} />

                        <BlockMath math={String.raw`
                        \begin{align*}
                        w &:= w-\alpha V_{\delta w}\\
                        b &:= b-\alpha V_{\delta b}
                        \end{align*}
                        `} />

                        Here <InlineMath math={String.raw`\beta`} /> is the momentum term, which is a hyperparameter that determines how much the previous gradients affect the current update.
                        </div>
                <div className='subtitle'>
                    Results.
                </div>
                <div className='subsubtitle'>
                    Network Overall Performance
                </div>
                <div className='text'>
                    Here are some of the results from training the network with a variety of different settings. Larger networks with more neurons and layers tend to perform better, but 
                    also take longer to train. It's also important to note that just increasing the time of training does not always lead to better results. Train the network
                    for too long and the network will begin to overfit the training data and not generalise well to new data.
                    After a lot of tweaking and testing, the network managed to achieve an accuracy of 98.42% on the test set!
                </div>
                <Table />
                <div className='subsubtitle'>
                    Visualising the Effects of Gradient Descent with Momentum
                </div>
                <div className='text'>
                    Comparing two identical networks, one with momentum and one without, its obvious that the network with momentum converges much faster and smoothly to the optimal solution.
                </div>
                <img className='image' src="/effects_of_momentum.png" alt="Momentum Comparison"></img>
            </div>
        </div>
    )
}