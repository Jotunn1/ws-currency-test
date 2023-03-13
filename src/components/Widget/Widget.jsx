import BuyersRow from "../BuyersRow";
import SellersRow from "../SellersRow";
import WidgetButtons from "../WidgetButtons";
import "./widget.scss";

const Widget = ({ widgetData }) => {
    const threshold = 70;
    const fixedSellEstimate = (widgetData.sellEstimate * 100).toFixed();
    const fixedBuyEstimate = (widgetData.buyEstimate * 100).toFixed();

    return (
        <div className="widget">
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
            <WidgetButtons />
        </div>
    );
};

export default Widget;
