import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import styled  from 'styled-components';
import Banner from '../components/Banner';
import Lastblog from '../components/Lastblog';





const Index = ({children}) => (
    <Fragment>
        <Layout /> 
        {children}
        <Banner />
        <Lastblog />
        
    </Fragment>
   
  )
  
  export default Index