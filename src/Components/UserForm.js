import React, { Component } from 'react'

export default class UserForm extends Component {
    
    constructor(props){
          super(props)

          this.state = {
              username:''
          }

          this.handleChangeInput = this.handleChangeInput.bind(this)
    }
    wrapperStyle = () => {
        return {minHeight:'1244.06px'}
    }
    
    handleChangeInput(event){
        this.setState({
            username : event.target.value
        });
    }
    render() {
        console.log(this.state.username);
        return (
            <div class="content-wrapper" style={this.wrapperStyle()} >
                <form>
                    <lable>Name:</lable>
                    <input type="text" value={this.state.username} onChange={this.handleChangeInput}></input>
                </form>
            </div>
        )
    }
}
