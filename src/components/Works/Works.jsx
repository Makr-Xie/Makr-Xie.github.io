import React from 'react'
import './index.css'
import workData from '../../Contents/workData';
import WorkBlock from '../ContentBlock/WorkBlock/WorkBlock';

function Works( {handleOnclick} ) {
    return (
        <div className="work-item">
        {workData.map((item, index) => (
            <WorkBlock
                key={index}
                handleOnclick={handleOnclick}
                item={item}
            ></WorkBlock>
        ))}
    </div>
    )
}

export default Works
