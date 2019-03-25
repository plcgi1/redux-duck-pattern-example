import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { currentCount } = state.home;
  return { currentCount }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const onIncrementClick = () => dispatch(homeOperations.incrementCount(1));
  const onDecrementClick = () => dispatch(homeOperations.decrementCount(1));
  
  return {
    onIncrementClick,
    onDecrementClick
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
