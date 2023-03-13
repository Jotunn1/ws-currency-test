const SellersRow = ({ maxValue, sellers, sellEstimate, threshold }) => {
    return (
        <>
            <div className="row-title">
                <p>Sellers </p>
                <p>{maxValue}</p>
            </div>
            <div className="progress-bar sellers-progress">
                <p>{sellers}</p>
                <div
                    className="active"
                    style={{
                        transform: `translateX(${sellEstimate}%)`,
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

export default SellersRow;
