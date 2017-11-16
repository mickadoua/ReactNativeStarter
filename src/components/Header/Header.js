import { connect } from 'react-redux'
import HeaderComponent from "./HeaderComponent";

const mapStateToProps = (state) => {

    return {
        foo: "",
    }
}


export default connect(mapStateToProps)(HeaderComponent);