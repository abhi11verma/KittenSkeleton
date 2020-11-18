import {staticAction} from 'src/action/actionWrappers';
import {actions} from 'src/reducer/counterReducer';

const increment = () => dispatch => {
  dispatch(staticAction(actions.INCREMENT));
};

const decrement = () => dispatch => {
  dispatch(staticAction(actions.DECREMENT));
};


export {
  increment,
  decrement,
};
