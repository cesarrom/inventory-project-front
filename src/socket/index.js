import io from "socket.io-client";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import Store, { Constants, RootAction } from "../store/Store";
const SUBSCRIBER = Constants.SOCKET_OPS.SUBSCRIBER;
const SENDER = Constants.SOCKET_OPS.SENDER;
const BASE = Constants.SOCKET_OPS.BASE;
const ws = new SockJS("http://localhost:9091/stockable-websocket");
const stompClient = Stomp.over(ws);
stompClient.connect({}, function(frame) {
  var url = stompClient.ws._transport.url;
  url = url.replace(
    "ws://localhost:8080/spring-security-mvc-socket/secured/room/",
    ""
  );
  url = url.replace("/websocket", "");
  url = url.replace(/^[0-9]+\//, "");
  Store.dispatch(RootAction.setSessionId(url)) // url;
    stompClient.subscribe(`${BASE}`);
});
export default SocketClient;
