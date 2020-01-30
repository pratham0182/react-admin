import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    static getDerivedStateFromError(error){
    return {
        hasError:true
    }
    }
    

    render() {

       if(this.state.hasError){
           alert('error');
           return <h1>Somethig went wrong</h1>
       }else{
           return this.props.children
       }
    }
}
export default ErrorBoundary