import { useState } from "react";
import BuyersRow from "../BuyersRow";
import OpenWidgetBtn from "../OpenWidgetBtn";
import SellersRow from "../SellersRow";
import WidgetButtons from "../WidgetButtons";
import "./widget.scss";

const Widget = ({ widgetData }) => {
    const [isWidgetMuted, setIsWidgetMuted] = useState(false);
    const [isWidgetOpen, setIsWidgetOpen] = useState(true);
    const threshold = 70;

    return (
        <div className={`widget ${isWidgetOpen ? "open" : "closed"}`}>
            <h6>Currency name</h6>
            <SellersRow
                maxValue={widgetData.max}
                sellers={widgetData.sellers}
                sellEstimate={widgetData.sellEstimate}
                threshold={threshold}
            />
            <BuyersRow
                maxValue={widgetData.max}
                buyers={widgetData.buyers}
                buyEstimate={widgetData.buyEstimate}
                threshold={threshold}
            />
            <WidgetButtons
                isWidgetOpen={isWidgetOpen}
                setIsWidgetOpen={setIsWidgetOpen}
                isWidgetMuted={isWidgetMuted}
                setIsWidgetMuted={setIsWidgetMuted}
            />
            <OpenWidgetBtn
                isWidgetOpen={isWidgetOpen}
                setIsWidgetOpen={setIsWidgetOpen}
            />
        </div>
    );
};

export default Widget;
