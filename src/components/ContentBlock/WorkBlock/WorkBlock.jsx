import './index.css'

const WorkBlock = ({ handleOnclick, item }) => {
    return (
        <div
            className="contentblock"
            onClick={() => handleOnclick(item)}
        >
            {/* <div className="content-img" style={{ backgroundImage: "url('/src/assets/cat.png')" }}></div> */}
            {item.image ? (
                <div
                    className="content-img"
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
            ) : null}

            <p> {item.title}

                {item.role ? (
                    <span className='contentblock-role'> &nbsp; | &nbsp; {item.role}</span>
                ) : null}

            </p>
        </div>
        
    )
}

export default WorkBlock