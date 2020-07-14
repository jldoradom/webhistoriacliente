import React from 'react';
import styled  from 'styled-components';
import Burger from './Burger';
import Link from 'next/link';
// import img from '../src/home4k.jpg';
// var image = require('../img/home4k.jpg');





const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  color: white;
  
  width: 100%;
  height: 800px;

  background: linear-gradient(to right, #38ef7d, #11998e), url("../img/home-wide.jpg");
  
  .logo {
    padding: 15px;
    width: 80px;
    height: 80px;
    z-index: 9;
    padding-left: 3rem;
    cursor: pointer;
  }
`

const Mascara = styled.div`
    background-size: cover;
    width: 100%;
    height: 800px;
    opacity: 0.6;
    position: absolute;
    background-position-x: center;
    background-position-y: bottom;


`

const Navbar = () => {
  return (
    <Nav>
      
        <div className="logo">
          <Link href="/" passHref><p>Logo</p></Link>
        </div>
        <Mascara className="mascara" />
        
       
      <Burger />
      
    </Nav>
  )
}

export default Navbar