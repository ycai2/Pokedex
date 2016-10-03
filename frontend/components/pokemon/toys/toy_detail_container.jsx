import { connect } from 'react-redux';
import ToyDetail from './toy_detail';

const mapStateToProps = (state, props) => {
  return ({
    toy: state.currentPokemon.toys[props.params.toyId]
  });
};

const ToyDetailContainer = connect(
  mapStateToProps
)(ToyDetail);

export default ToyDetailContainer;
