import { memo } from "react";

const OpenWidgetBtn = ({ isWidgetOpen, setIsWidgetOpen }) => {
    return (
        <button
            className={`open-btn ${isWidgetOpen ? "hide" : "show"}`}
            onClick={() => setIsWidgetOpen(true)}
        ></button>
    );
};

export default memo(OpenWidgetBtn);
