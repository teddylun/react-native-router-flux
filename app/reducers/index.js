// reducers/index.js

import { combineReducers } from 'redux';
import routes from './routes';
import { items, itemsHasErrored, itemsIsLoading } from './items';
// ... other reducers

export default combineReducers({
  routes,
  items,
  itemsHasErrored,
  itemsIsLoading,
  // ... other reducers
});
