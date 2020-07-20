import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';



const Layout = ({children}) => (
    <>
        <Head>
            <title>Web Historia</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet"></link>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <Navbar />
           
        {children}
        
    </>
   
  )
  
  export default Layout