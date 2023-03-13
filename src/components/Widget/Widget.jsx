import { useState } from "react";
import BuyersRow from "../BuyersRow";
import SellersRow from "../SellersRow";
import WidgetButtons from "../WidgetButtons";
import "./widget.scss";

const Widget = ({ widgetData }) => {
    const [isWidgetMuted, setIsWidgetMuted] = useState(false);
    const [isWidgetOpen, setIsWidgetOpen] = useState(true);
    const threshold = 70;
    const fixedSellEstimate = (widgetData.sellEstimate * 100).toFixed();
    const fixedBuyEstimate = (widgetData.buyEstimate * 100).toFixed();

    return (
        <div className={`widget ${isWidgetOpen ? "open" : "closed"}`}>
            <h6>Currency name</h6>
            <SellersRow
                maxValue={widgetData.max.toFixed()}
                sellers={widgetData.sell.toFixed()}
                sellEstimate={fixedSellEstimate}
                threshold={threshold}
            />
            <BuyersRow
                maxValue={widgetData.max.toFixed()}
                buyers={widgetData.buy.toFixed()}
                buyEstimate={fixedBuyEstimate}
                threshold={threshold}
            />
            <WidgetButtons
                isWidgetOpen={isWidgetOpen}
                setIsWidgetOpen={setIsWidgetOpen}
                isWidgetMuted={isWidgetMuted}
                setIsWidgetMuted={setIsWidgetMuted}
            />
            <button
                className={`open-btn ${isWidgetOpen ? "hide" : "show"}`}
                onClick={() => setIsWidgetOpen(true)}
            ></button>
        </div>
    );
};

export default Widget;
