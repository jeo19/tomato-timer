import { connect } from "react-redux";
import Timer from "./presenter";
function mapStateToProps(state) {
  const { isPlaying, elapseTime, timeDuration } = state;
  return {
    isPlaying,
    elapseTime,
    timeDuration
  };
}
export default connect(mapStateToProps)(Timer);
