// reducers/index.js

import { combineReducers } from 'redux';
import routes from './routes';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { reducer as formReducer } from 'redux-form';
// ... other reducers

export default combineReducers({
  routes,
  form: formReducer,
  items,
  itemsHasErrored,
  itemsIsLoading,
  // ... other reducers
});
