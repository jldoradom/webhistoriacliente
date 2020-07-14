import React from 'react';
import styled  from 'styled-components';

const Imagen = styled.div`
    background-size: cover;
    width: 250px;
    height: 250px;
    background-position: center;
    margin: auto;
`


const H2 = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1rem;
`

const Banner = () => {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <H2 className="text-center">Crear</H2>
                    <Imagen className="creaImagen img-responsive" />
                </div>
                <div className="col-12 col-lg-4">
                    <H2 className="text-center">Comparte</H2> 
                    <Imagen className="comparteImagen" />
                    
                </div>
                <div className="col-12 col-lg-4">
                    <H2 className="text-center">Comenta</H2> 
                    <Imagen className="comentaImagen" />
                    
                </div>
            </div>
        </div>
     );
}
 
export default Banner;


