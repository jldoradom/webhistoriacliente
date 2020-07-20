import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Lastblog from '../components/Lastblog';
import Infobanner from '../components/Infobanner';






const Index = ({children}) => (
    <Fragment>
        <Layout /> 
        {children}
        <Infobanner />
       
        <Lastblog />
        
    </Fragment>
   
  )
  
  export default Index