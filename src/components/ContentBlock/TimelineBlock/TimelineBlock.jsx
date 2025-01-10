import './index.css'

const TimelineBlock = ({ handleOnclick, item }) => {
    return (
        <div
            className="contentblock"
            onClick={() => handleOnclick(item)}
        >
            {item.image ? (
                <div
                    className="content-img"
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
            ) : null}

            <p> {item.title}
            </p>
        </div>
        
    )
}

export default TimelineBlock