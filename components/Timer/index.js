import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";
import Timer from "./presenter";
function mapStateToProps(state) {
  const { isPlaying, elapseTime, timeDuration } = state;
  return {
    isPlaying,
    elapseTime,
    timeDuration
  };
}
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
