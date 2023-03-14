import "./App.scss";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useCallback, useState } from "react";
import Widget from "./components/Widget/Widget";

const wsUrl = "ws://localhost:8025/live";
const token = "3DeTfKiLaq&I$6NcDdX73s%q";
const keyId = "3c7e75f1-23de-44ef-bf33-f91b475ede35";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [volumePreasureData, setVolumePreasureData] = useState({});

    const { sendJsonMessage, readyState } = useWebSocket(wsUrl, {
        onOpen: () => {
            sendJsonMessage({ type: "AUTH", token: token });
        },
        onMessage: (message) => {
            const response = JSON.parse(message.data);

            if (response.type === "AUTH_SUCCESS") {
                setIsAuthorized(true);
            }
            if (response.keyId === keyId) {
                setVolumePreasureData(dataMapper(response.data));
            }
        },
        shouldReconnect: (closeEvent) => true,
        onClose: () => {
            setIsAuthorized(false);
            setVolumePreasureData({});
        },
    });

    const connectionStatus = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState];

    const subscribeToDataFlow = useCallback(() => {
        const subscribeMessage = {
            type: "SUBSCRIBE",
            keyId: keyId,
            isSubscribe: true,
        };
        sendJsonMessage(subscribeMessage);
    }, [sendJsonMessage]);

    const unsubscribeFromDataFlow = useCallback(() => {
        const unsubscribeMessage = {
            type: "UNSUBSCRIBE",
            keyId: keyId,
            isSubscribe: false,
        };
        sendJsonMessage(unsubscribeMessage);
    }, [sendJsonMessage]);

    const isObjEmpty = (objName) => Object.keys(objName).length !== 0;

    const dataMapper = (data) => {
        const formated = {
            max: Math.round(data.max),
            sellers: Math.round(data.sell),
            sellEstimate: Math.round(data.sellEstimate * 100),
            buyers: Math.round(data.buy),
            buyEstimate: Math.round(data.buyEstimate * 100),
        };
        return formated;
    };

    return (
        <div className="App">
            <span>The WebSocket is currently {connectionStatus}</span>
            {isObjEmpty(volumePreasureData) && (
                <Widget widgetData={volumePreasureData} />
            )}
            <div className="buttons">
                <button onClick={subscribeToDataFlow} disabled={!isAuthorized}>
                    Subscribe
                </button>
                <button
                    onClick={unsubscribeFromDataFlow}
                    disabled={!isAuthorized}
                >
                    unsubscribe
                </button>
            </div>
        </div>
    );
}

export default App;
