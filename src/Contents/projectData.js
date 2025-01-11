import graphRag from '../assets/projectPics/GraphRag.jpg';
import maskCat from '../assets/projectPics/mask-cat.jpg';
import divorceRate from '../assets/projectPics/divorceRate.jpg';

const projectData = [
    {
        title: 'Pokemon TCGP Card Animation',
        time: 'Planning, and about to start.',
        description: 'Using ControlNet to generate an animation for each EX card in Pokemon TCGP.'
    },
    {
        title: 'GraphRAG Enhancement',
        time: '08/2024 - Ongoing',
        description: 'A research project enhancing RAG systems by integrating graph-based information retrieval, or namly GraphRAG.',
        img: graphRag
    },
    {
        title: 'Face Mask Detection',
        time: '12/2024 - 01/2025',
        description: 'Face mask detection based on YOLOv11',
        link: 'https://github.com/Makr-Xie/YOLOv11-Face-Mask-Detection',
        linkSubtitle: 'View on Github',
        img: maskCat
    },
    {
        title: 'All-In-One Course Schedular',
        time: '11/2024 - Ongoing',
        description: 'Just like the name, a course schedular that combines everything, including RMP, Course GPA, Chat-bot-advisor, etc.'
    },
    {
        title: 'NullRoom',
        time: '09/2024 - 12/2024',
        description: 'NullRoom is a web app designed to help UIUC students find empty rooms during class intervals, providing a space to rest, study, or chat with friends.',
    },
    {
        title: 'Divorce Rate Predictor',
        time: '08/2023 - 12/2023',
        description: 'A multi-linear regression model that predicts the divorce rate per thousands of people.',
        link: 'https://github.com/Makr-Xie/MLR-DivorcePerdiction',
        linkSubtitle: 'View on Github',
        img: divorceRate
    }
];

export default projectData;