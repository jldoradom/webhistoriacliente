import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import styled  from 'styled-components';

const Layout = ({children}) => (
    <>
        <Head>
            <title>Web Historia</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        </Head>
        <Navbar />
           
        {children}
        
    </>
   
  )
  
  export default Layout