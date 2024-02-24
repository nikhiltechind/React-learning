import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
        return (
            <div>
            <h1> count : {this.props.name}</h1>
            <h1> count2: </h1>
            <h2> </h2>
            </div>
        )
    }

}

export default UserClass;