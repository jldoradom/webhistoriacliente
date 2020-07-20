import React from 'react';
import styled  from 'styled-components';

const Imagevertical = styled.img`
    height: 677px;
    background-size: cover;
    width: 100%;
    background-position: center;

    @media (max-width: 767px){
        height: 350px;
        background-position: center;
    }


`


const Ol = styled.ul`
    
    counter-reset: li;
    list-style-type: none;
    margin-top: 16px;  
    



    @media (max-width: 991px){
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 2.5rem;
    }
`


const Hli = styled.span`
    font-size:1rem;
    font-weight: 700;
    margin-bottom: 8px;
    @media (min-width: 767px){
        font-size:1.13rem;
    }


`

const Pli = styled.p`
   
`

const Infobanner = () => {
    return ( 
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-lg-6">
                <Imagevertical  className="imagenUltimosBlog" />
                </div>
                <div className="col-12 col-lg-6">
                <Ol className="ol">
                    <li><Hli>Elige un tema que te interese</Hli>
                    <Pli>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</Pli></li>
                    <li><Hli>Documentate sobre ese tema</Hli>
                    <Pli>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</Pli></li>
                    <li><Hli>Rededacta tu blog o noticia</Hli>
                    <Pli>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</Pli></li>
                    <li><Hli>Súbela y podrás compartirla</Hli>
                    <Pli>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</Pli></li>
                    <li><Hli>Obten votos y comentarios</Hli>
                    <Pli>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</Pli></li>
                </Ol>
                </div>
            </div>
        </div>
        </>                
     );
}
 
export default Infobanner;