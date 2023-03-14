To start project:

First of all you need to split terminals (first for server, second for ui directory).

Then in first terminal window you need to install all dependencies :

1.cd ui
2.npm install
3.npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

In second terminal window you need to start server:

3.cd server
4.java -jar TestTaskSocket.jar 8025

Then when WebSocket status is updated to "Open" you can press "Subscribe" button to start getting information from server.
Thereafter "Unsubscribe" button click will stop the data flow from server.
