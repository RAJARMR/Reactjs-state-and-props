import React from 'react';

class Users extends React.Component
{
    render(){
    return(
        <div>

        <h1>{this.props.nameee}</h1>
        <h2>{this.props.age}</h2>
            </div>
    );
    
}
}
export default Users;
