import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import AppStore from "../store";
import * as EV from 'evergreen-ui'
console.log("Socket Location!");

const SUBSCRIBER = AppStore.Constants.SOCKET_OPS.SUBSCRIBER;
const SENDER = AppStore.Constants.SOCKET_OPS.SENDER;
const ws = new SockJS("http://localhost:9091/stockable-websocket");
const stompClient = Stomp.over(ws);
stompClient.debug = f => f;
const joinToCamelCase = (strs = [], joinChar = "") => {
  if (!strs || !strs.length) return "";
  return strs
    .map(str => {
      return (
        String(str[0]).toUpperCase() +
        String(str)
          .substr(1)
          .toLowerCase()
      );
    })
    .join(joinChar);
};
class StompClient {
  constructor(modelName = "") {
    this.modelName = modelName;
    if (stompClient.connected) this.init();
  }
  getResponse(rawRes = {}) {
    const body = rawRes.body;
    if (body) {
      const json = JSON.parse(body);
      return json.response ? json.response : json;
    }
    return body;
  }
  successUpdate() {
    EV.toaster.notify('Se actualizó la entrada satisfactoriamente');
  }
  successCreate() {
    EV.toaster.notify('Se creó la entrada satisfactoriamente');
  }
  error() {
    EV.toaster.danger('Ha ocurrido un error')
  }
  init() {
    const locatedBase =
      SUBSCRIBER.QUEUE.BASE + SUBSCRIBER.QUEUE[this.modelName].BASE;
    const generalBase =
      SUBSCRIBER.TOPIC.BASE + SUBSCRIBER.TOPIC[this.modelName].BASE;
    const actionClassName =
      joinToCamelCase(this.modelName.split("_")) + "Action";
    const actionClass = AppStore.Actions[actionClassName];
    const listMethodName = Object.getOwnPropertyNames(actionClass).filter(
      method => method.indexOf("list") === 0
    );
    const createMethodName = Object.getOwnPropertyNames(actionClass).filter(
      method => method.indexOf("create") === 0
    );
    const updateMethodName = Object.getOwnPropertyNames(actionClass).filter(
      method => method.indexOf("update") === 0
    );
    const selectMethodName = Object.getOwnPropertyNames(actionClass).filter(
      method => method.indexOf("select") === 0
    );
    stompClient.subscribe(
      locatedBase + SUBSCRIBER.QUEUE[this.modelName].LIST,
      payload => {
        if (!listMethodName || !actionClass || !actionClass[listMethodName]){
          return;
        }
        const action = actionClass[listMethodName](this.getResponse(payload));
        if (!action || !action.type) {
          return;
        }
        AppStore.Store.dispatch(
          action
        );
      }
    );
    stompClient.subscribe(
      generalBase + SUBSCRIBER.TOPIC[this.modelName].CREATE,
      payload => {
        if (!createMethodName || !actionClass || !actionClass[createMethodName]){
          return;
        }
        const action = actionClass[createMethodName](this.getResponse(payload));
        if (!action || !action.type) {
          return;
        }
        this.successCreate()
        AppStore.Store.dispatch(
          action
        );
      }
    );
    stompClient.subscribe(
      generalBase + SUBSCRIBER.TOPIC[this.modelName].UPDATE,
      payload => {
        if (!updateMethodName || !actionClass || !actionClass[updateMethodName]){
          return;
        }
        const action = actionClass[updateMethodName](this.getResponse(payload));
        if (!action || !action.type) {
          return;
        }
        this.successUpdate()
        AppStore.Store.dispatch(
          action
        );
      }
    );
    stompClient.subscribe(
      locatedBase + SUBSCRIBER.QUEUE[this.modelName].SELECT,
      payload => {
        if (!selectMethodName || !actionClass || !actionClass[selectMethodName]){
          return;
        }
        const action = actionClass[selectMethodName](this.getResponse(payload));
        if (!action || !action.type) {
          return;
        }
        AppStore.Store.dispatch(
          action
        );
      }
    );
  }
  create = params => {
    stompClient.send(
      SENDER.BASE + SENDER[this.modelName].BASE + SENDER[this.modelName].CREATE,
      {},
      JSON.stringify(params)
    );
  };
  update = (id, params) => {
    stompClient.send(
      SENDER.BASE +
        SENDER[this.modelName].BASE +
        SENDER[this.modelName].UPDATE +
        "/" +
        id,
      {},
      JSON.stringify(params)
    );
  };
  list = (query = {}) => {
    stompClient.send(
      SENDER.BASE + SENDER[this.modelName].BASE + SENDER[this.modelName].LIST,
      {},
      JSON.stringify(query)
    );
  };
  select = id => {
    stompClient.send(
      SENDER.BASE +
        SENDER[this.modelName].BASE +
        SENDER[this.modelName].SELECT +
        "/" +
        id,
      {}
    );
  };
}
const clients = {
  CATEGORY: new StompClient(AppStore.Constants.MODEL_NAMES.CATEGORY),
  CUSTOMER: new StompClient(AppStore.Constants.MODEL_NAMES.CUSTOMER),
  MOVEMENT: new StompClient(AppStore.Constants.MODEL_NAMES.MOVEMENT),
  MOVEMENT_DETAIL: new StompClient(
    AppStore.Constants.MODEL_NAMES.MOVEMENT_DETAIL
  ),
  MOVEMENT_TYPE: new StompClient(AppStore.Constants.MODEL_NAMES.MOVEMENT_TYPE),
  PRODUCT: new StompClient(AppStore.Constants.MODEL_NAMES.PRODUCT),
  PRODUCT_REPOSITORY: new StompClient(
    AppStore.Constants.MODEL_NAMES.PRODUCT_REPOSITORY
  ),
  REPOSITORY: new StompClient(AppStore.Constants.MODEL_NAMES.REPOSITORY),
  SUPPLIER: new StompClient(AppStore.Constants.MODEL_NAMES.SUPPLIER)
};
stompClient.connect({}, function(frame) {
  var url = ws._transport.url.split("/");
  url = url[url.length - 2];
  AppStore.Store.dispatch(AppStore.Actions.RootAction.setSessionId(url)); // url;
  Object.values(clients).map(value => {
    value.init();
    value.list();
  });
  /*deepForEachObjectValue(SUBSCRIBER, (value = "", path = []) => {
    if (!path || !path.length) {
      return;
    }
    if (path.length !== POSITIONS.CURRENT_OPERATION + 1) {
      return;
    }
    if (path[POSITIONS.CURRENT_OPERATION] === "BASE") {
      return;
    }

    const topicBase = _.get(
      SUBSCRIBER,
      replaceAt(path, POSITIONS.CURRENT_ENTITY, "BASE").slice(
        POSITIONS.CURRENT_TOPIC,
        POSITIONS.CURRENT_OPERATION
      ),
      ""
    );
    const operationsBase = _.get(
      SUBSCRIBER,
      replaceAt(path, POSITIONS.CURRENT_OPERATION, "BASE"),
      ""
    );
    const currentEntity = path[POSITIONS.CURRENT_ENTITY]
      .toString()
      .toLowerCase()
      .split("_");
    const currentOperation = path[POSITIONS.CURRENT_OPERATION]
      .toString()
      .toLowerCase();
    const actionClass =
      AppStore.Actions[joinToCamelCase(currentEntity) + "Action"];
    const actionMethodName = Object.getOwnPropertyNames(actionClass).filter(
      method => method.indexOf(currentOperation.toLowerCase()) === 0
    );
    const actionMethod = actionClass[actionMethodName];
    ((actionMethod, subscribePath) => {
      stompClient.subscribe(subscribePath, payload =>
        AppStore.Store.dispatch(actionMethod(payload))
      );
    })(actionMethod, topicBase + operationsBase + value);
  });
  stompClient.send(
    SENDER.BASE + SENDER.CATEGORY.BASE + SENDER.CATEGORY.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.CUSTOMER.BASE + SENDER.CUSTOMER.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.MOVEMENT.BASE + SENDER.MOVEMENT.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.MOVEMENT_DETAIL.BASE + SENDER.MOVEMENT_DETAIL.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.MOVEMENT_TYPE.BASE + SENDER.MOVEMENT_TYPE.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.PRODUCT.BASE + SENDER.PRODUCT.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE +
      SENDER.PRODUCT_REPOSITORY.BASE +
      SENDER.PRODUCT_REPOSITORY.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.REPOSITORY.BASE + SENDER.REPOSITORY.LIST,
    {},
    JSON.stringify({})
  );
  stompClient.send(
    SENDER.BASE + SENDER.SUPPLIER.BASE + SENDER.SUPPLIER.LIST,
    {},
    JSON.stringify({})
  );*/
});

const StompClientFactory = modelName => {
  //if (!clients[modelName]) clients[modelName] = new StompClient(modelName);
  return clients[modelName];
};

export default StompClientFactory;
