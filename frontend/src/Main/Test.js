import { connect } from "react-redux";
import { getGlobalConnection } from "../Core/Global/global.selectors";

function Test(props) {
    return <h1>Hello!</h1>;
}

const mapStateToProps = (state) => {
    return { connection: getGlobalConnection(state) }
}

export default connect(mapStateToProps)(Test);