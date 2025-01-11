import datalynn from '../assets/datalynn.png';
import uiuc from '../assets/UIUC.png';
import iflytek from '../assets/iflytek.png';

const workData = [
    {
        title: 'DataLynn',
        subtitle: 'Software Development Engineer Intern',
        image: datalynn,
        role: "Software Development Engineer Intern",
        time: "05/2024 - 08/2024",
        content: `<p>
        At DataLynn, I engineered AI-driven solutions, including a Generative AI Interview Agent and a Customer Support Chatbot, utilizing Retrieval-Augmented Generation (RAG) to enhance LLM performance, streamline workflows, and serve thousands of users with scalable systems.
        </p>
        <br />
        <ul>
            <li>Developed and launched a Generative AI agent for interview preparation, simulating fully interactive experiences—including question generation, follow-ups, and scoring — adaptable to multiple industries and job types. Achieved 500+ interviews with a 78% positive feedback ratio.</li>
            <li>Designed and implemented a RAG architecture, enhancing adaptability and relevance by integrating data ingestion into Milvus vector DB and deploying on Zilliz Cloud.</li>
            <li>Developed and deployed a customer support chatbot on the company website, assisting with inquiries, knowledge searches, and order processing, leveraging Rasa for text generation. Served over 2,000+ inquiries.</li>
        </ul>
        `
    },
    {
        title: 'University of Illinois, Urbana-Champaign',
        subtitle: 'Course Assistant',
        image: uiuc,
        role: "Course Assistant",
        time: "08/2023 - 12/2023",
        content: `
            <p>I worked as a Course Assistant (CA) for CS 124, an introductory programming course designed for both CS and non-CS students, 
            aiming to help others set sail on their journey into programming.</p>
            <br />
            <p>CS 124 is a fantastic course for beginners, and it was also my first CS course at UIUC. 
            It includes numerous editable and runnable code examples, along with over 3,000 interactive explanations from more than 300 instructors (including me!).</p> 
            <br />
            <p>Check out a public version of the course here: <a href="https://www.learncs.online/">https://www.learncs.online/</a></p>
        `,
        
    },
    {
        title: 'iFLYTEK',
        subtitle: 'Software Engineer Intern',
        image: iflytek,
        role: "Software Engineer Intern",
        time: "07/2021 - 08/2021",
        content: `
        <p>At iFLYTEK, I worked on a traffic analysis system with real-time visualizations and an interactive dashboard, 
        contributed to creating reusable React components, 
        and helped develop RESTful web services with optimized MySQL databases for efficient data processing.</p>
        <br />
        <ul>
            <li>Developed and launched a traffic analysis system with an interactive dashboard that supports real-time visualization of the traffic data.</li>
            <li>Designed and implemented a set of 3 RESTful web services with ~15 endpoints for end-to-end logic, including data ingestion, ETL processes, and dashboard support.</li>
            <li>Modeled and optimized MySQL databases, enhancing performance through query analysis and indexing.</li>
        </ul>
    `,
    }
];

export default workData;