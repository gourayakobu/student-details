import React from 'react';

const Events = () => {

    function show(){
        alert("hello")
    }
    return (
        <div>
            <button  onClick={show}>
                change
            </button>
        </div>

    )
}

export default Events;