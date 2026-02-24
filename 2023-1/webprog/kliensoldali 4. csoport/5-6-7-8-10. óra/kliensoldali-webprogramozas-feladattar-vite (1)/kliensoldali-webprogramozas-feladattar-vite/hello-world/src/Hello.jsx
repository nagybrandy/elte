import React from 'react';
//import PropTypes from "prop-types";
import "./index.css";
/* eslint-disable react/prop-types */
 const Hello = ({name, count}) => {
  console.log(count)
  /* if(name === ""){
    return <h1>Nincs kit üdvözölni.</h1>
  } else {
    return <h1>Hello {name}!</h1>
  } */

  return <>
          <h1 className="cim1">{name === "" ? "Nincs kit üdvözölni" : `Hello ${name}`}!</h1>
          {[...new Array(count)].map((e,i) => <p key={i}>Örülünk, hogy itt vagy!</p>)}
         </>
}

//Hello.propTypes = {name: PropTypes.string, count: PropTypes.number}
/* eslint-enable react/prop-types */
export default Hello