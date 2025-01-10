import React from 'react';
import Divider from '@mui/material/Divider';
import './index.css';

const PopupInfo = ({ info }) => {
    if (!info) return null;

    return (
        <div className="popup-info-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-info-head">
                <div
                    className="popup-info-img"
                    style={{
                        backgroundImage: `url(${info.image})`,
                    }}
                ></div>
                <div className="popup-info-title">
                    <h1>{info.title}</h1>
                    <p>{info.subtitle}</p>
                </div>
                <div className="popup-info-time">{info.time}</div>
            </div>
            <div
                className="popup-info-body"
                dangerouslySetInnerHTML={{ __html: info.content }}
            ></div>
        </div>
    );
};

export default PopupInfo;

