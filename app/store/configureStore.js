import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

export default function configureStore () {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      thunk,
    )
  )
  const store = createStore(reducers, enhancer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
