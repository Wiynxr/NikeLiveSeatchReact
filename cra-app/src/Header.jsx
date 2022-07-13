import React from "react";
import { SiNike } from 'react-icons/si'
import { GiBasket } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="header">
        <SiNike style={{fontSize: '30px', cursor:'pointer'}}/>
      <div className="header-content">
        <p>NIKE</p>
        <p>SNEAKERS</p>
        <p>MAN</p>
        <p>WOMEN</p>
        <p>KIDS</p>
      </div>
      <GiBasket style={{fontSize: '28px', cursor: 'pointer'}}/>
    </div>
  );
};

export default Header;
