import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 9;
  padding-right: 3rem;
  height: 50px;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:rgb(31, 177, 57);;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link href="/blog" passHref><a>Blog</a></Link></li>
      <li><Link href="/trabajos" passHref><a>Trabajos</a></Link></li>
      <li><Link href="/cursos" passHref><a>Cursos</a></Link></li>
      <li><Link href="/contacto" passHref><a>Contacto</a></Link></li>
      <li><Link href="/login" passHref><a>Login</a></Link></li>
    </Ul>
  )
}

export default RightNav