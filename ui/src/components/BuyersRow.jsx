import { memo } from "react";

const BuyersRow = ({ maxValue, buyers, buyEstimate, threshold }) => {
    return (
        <>
            <div className="row-title">
                <p>Buyers </p>
                <p>{maxValue}</p>
            </div>
            <div className="progress-bar buyers-progress">  
                <p>{buyers}</p>
                <div
                    className="active"
                    style={{
                        transform: `translateX(${buyEstimate}%)`,
                    }}
                ></div>
                <span
                    className="threshold"
                    style={{ left: `${threshold}%` }}
                ></span>
            </div>
        </>
    );
};

export default memo(BuyersRow);
