import React, { Component } from 'react'

 class Shop extends Component {
    
    

    
    render() {

        const name =['Prathamesh','Nilesh'];
        const nameList =  name.map(name=><li>{`my name is ${name}`}</li>)
        
        return (
           
            <div>
                {
                   <ul>{nameList}</ul>
                }
            </div>

            
        )
    }
}

export default Shop
