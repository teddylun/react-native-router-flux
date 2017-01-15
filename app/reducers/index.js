// reducers/index.js

import { combineReducers } from 'redux-immutablejs';
import routes from './routes';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { reducer as form } from 'redux-form/immutable';
// ... other reducers

export default combineReducers({
  routes,
  form,
  items,
  itemsHasErrored,
  itemsIsLoading,
  // ... other reducers
});
