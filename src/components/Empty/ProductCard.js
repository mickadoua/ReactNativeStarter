import { connect } from 'react-redux'
import Doctors from 'src/components/ProductCard/ProductCardComponent'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {

    return {
        foo: "",
    }
}

export default connect(mapStateToProps)(Doctors);