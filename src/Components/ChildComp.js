import React from 'react'

function ChildComp({hero}) {
    if(hero === 'Joker'){
         throw new Error('Not a Hero')
    }
    return (
        <div>
            {hero}
        </div>
    )
}

export default ChildComp
