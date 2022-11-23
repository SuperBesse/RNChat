import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '@/Redux/Reducers/index';
import createSagaMiddleware from 'redux-saga';
import { addMessage, receivedMessage } from '@/Redux/Sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(addMessage);
sagaMiddleware.run(receivedMessage);
