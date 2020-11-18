import {connect} from 'react-redux';
import {decrement, increment} from 'src/action/counterAction';
import LandingScreen from 'src/LandingScreen';

const mapStateToProps = ({counter:{counter}}) => (
  {
    counter,
  }
);

export default connect(mapStateToProps, {increment, decrement})(LandingScreen);
