// StacksBlock.jsx
import React from 'react';
import PytorchIcon  from '../../assets/icons/pytorch.svg?react';
import CppIcon  from '../../assets/icons/c++.svg?react';
import PythonIcon  from '../../assets/icons/python.svg?react';
import SqlIcon  from '../../assets/icons/sql.svg?react';
import MysqlIcon  from '../../assets/icons/mysql.svg?react';
import ReactjsIcon  from '../../assets/icons/reactjs.svg?react';
import FlaskIcon  from '../../assets/icons/flask.svg?react';
import JavaIcon  from '../../assets/icons/java.svg?react';
import DockerIcon  from '../../assets/icons/docker.svg?react';
import JSIcon  from '../../assets/icons/javascript.svg?react';
import K8sIcon  from '../../assets/icons/kubernetes.svg?react';
import AwsIcon  from '../../assets/icons/aws.svg?react';
import GcpIcon  from '../../assets/icons/gcp.svg?react';
import Haskell from '../../assets/icons/haskell.svg?react';
import './index.css';

const stacks = [
    { name: 'Python', icon: <PythonIcon /> }, 
    { name: 'C/C++', icon: <CppIcon /> }, 
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'Haskell', icon: <Haskell /> },
    { name: 'JavaScript', icon: <JSIcon /> },
    { name: 'SQL', icon: <SqlIcon /> },
    
    { name: 'PyTorch', icon: <PytorchIcon /> },
    { name: 'React', icon: <ReactjsIcon /> },
    { name: 'Flask', icon: <FlaskIcon /> },

    { name: 'MySQL', icon: <MysqlIcon /> },
    { name: 'GCP', icon: <GcpIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'K8S', icon: <K8sIcon /> },
    { name: 'AWS', icon: <AwsIcon /> },
];

const StacksBlock = () => {
    return (
        <div className="stack-container">
            {stacks.map((stack, index) => (
                <div key={index} className="stack-item">
                    <span className="stack-icon">{stack.icon}</span>
                    {stack.name}
                </div>
            ))}
        </div>
    );
};

export default StacksBlock;
