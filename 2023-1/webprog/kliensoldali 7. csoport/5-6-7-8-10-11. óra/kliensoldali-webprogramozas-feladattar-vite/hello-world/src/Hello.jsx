//import React from 'react'
//import PropTypes from "prop-types";

export function Hello({name, count}) {
  console.log(count)
  return <>
          <h1 className="narancs">{name === "" ? "Nincs kit üdvözölni" : `Hello ${name}`}!</h1>
          <p>Na itt vagyok.</p>
         </>
}

// Hello.propTypes = {name: PropTypes.string, count: PropTypes.string};
