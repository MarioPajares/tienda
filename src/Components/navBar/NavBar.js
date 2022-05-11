import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { useCounter } from "../../hooks/useCounter";




export const NavBar = ({contador}) => {

  
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Mario'shop</span>
        <div style={{fontSize: '35px'}}>
          <FontAwesomeIcon className='awesome' icon={faCartPlus} />
          {contador}
        </div>

      </div>   
    </nav>
  );
};

{/* <nav className="navbar navbar-dark bg-dark"> */}
