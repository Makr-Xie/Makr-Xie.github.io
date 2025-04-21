import graphRag from '../assets/projectPics/GraphRag.jpg';
import maskCat from '../assets/projectPics/mask-cat.jpg';
import divorceRate from '../assets/projectPics/divorceRate.jpg';

const projectData = [
    {
        title: 'Nano GPT-2',
        time: '4/2025',
        description: 'An implementation of GPT-2 124M model using PyTorch, trained on the FineWeb-Edu dataset.',
    },
    {
        title: 'Taxonomy Enhanced GraphRAG',
        time: '12/2024 - Ongoing',
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
        title: 'Unicournse',
        time: '11/2024 - Ongoing',
        description: 'All-In-One course schedular that combines everything, including RMP, Course GPA, Chat-bot-advisor, etc.'
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