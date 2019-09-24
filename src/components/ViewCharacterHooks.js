import React from 'react'
import {useState, useEffect} from "react"
const ViewCharacterHooks = () => {

    const [count, setCount] = useState(0);

    useEffect( ()=> {
        document.title = `You clicked ${count} times`;
    }

    );
    return (
        <div>
      <p> you clicked {count} times</p>
      {console.log("hello effects")}
      <button onClick= {() => setCount(count + 1)}>
          Click me
          </button>      
        </div>
    );
}

export default ViewCharacterHooks
