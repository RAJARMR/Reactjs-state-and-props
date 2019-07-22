import React from 'react';
import Users from './props';
class User extends React.Component
{
    constructor(props){
        super(props)
        this.state ={
                    name:"MOHAN",
                    age:"22"
                }
    }
    render() {
        return(
                <div>
                        <Users nameee={this.state.name} />
                        <Users age={this.state.age}/>
                    </div>
        );

    }
}

export default User;