import './index.css'
import timelineData from '../../Contents/timelineData';
import TimelineBlock from '../ContentBlock/TimelineBlock/TimelineBlock';

const Timeline = ({ handleOnclick }) => {

    return (
        <div className="timeline">
            <div className="timeline-time">
                {timelineData.map((item, index) => (
                    <p key={index}>
                        {item.time}
                        <span className="timeline-dot"></span>
                    </p>
                ))}
            </div>
            <div className="timeline-object">
                {timelineData.map((item, index) => (
                    <TimelineBlock
                        key={index}
                        handleOnclick={handleOnclick}
                        item={item}
                    ></TimelineBlock>
                ))}
            </div>
        </div>
    );
}

export default Timeline