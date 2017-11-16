import { connect } from 'react-redux'
import Doctors from 'src/components/EmptyComponent/Empty'

const mapStateToProps = (state) => {

    return {
        foo: 'bar',
    }
}

export default connect(mapStateToProps)(Doctors);