import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {




    render() {
    // const user = this.props.users.find(user => user.id === this.props.userId)

        if (!this.props.user) {
            return null
        }
        
        return <div>
            {this.props.user.name}
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}
  
export default connect(mapStateToProps)(UserHeader);