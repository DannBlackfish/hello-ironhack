import React from 'react'

function Features (props){
    return (
        <div className={`column${props.colNum}`}>
          <img className="images" src={props.image}/>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
    )
}


export default Features