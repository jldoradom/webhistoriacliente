import React from 'react';
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


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
    @media (max-width: 767px){
        font-size: 1.6rem;
    }
`;

const Parrafouser = styled.p`
    font-weight: 600;
    margin-bottom: 6px;
    line-height: 2.5;
`;

const Parrafotexto = styled.p`
    line-height: 1.4;
`;

const Parrafolikes = styled.p`
    margin-bottom: 0;
`;


const BannerComentarios = () => {
    return ( 
        <div className="container mt-5 mb-5">
        <h2 className="text-center mb-5">Los últimos comentarios</h2>
            <div className="row">
                <div className="col-12 col-lg-4">      
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <FontAwesomeIcon className='iconoUser' icon={faUser} />
                                <Parrafouser className="card-title">JoseUsu</Parrafouser>
                            </div>
                            <Parrafotexto className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content ...</Parrafotexto>
                            <div className="d-flex align-middle align-items-center">
                                <FontAwesomeIcon className='iconoHeart' icon={faHeart} />
                                <Parrafolikes>145</Parrafolikes>
                                <a href="#" className="btn btn-primary-verde">Ir Blog</a>
                            </div>
                         </div>
                    </div> 
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <FontAwesomeIcon className='iconoUser' icon={faUser} />
                                <Parrafouser className="card-title">JoseUsu</Parrafouser>
                            </div>
                            <Parrafotexto className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content ...</Parrafotexto>
                            <a href="#" className="btn btn-primary-verde">Ir Blog</a>
                        </div>
                    </div> 
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <FontAwesomeIcon className='iconoUser' icon={faUser} />
                                <Parrafouser className="card-title">JoseUsu</Parrafouser>
                            </div>
                            <Parrafotexto className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content ...</Parrafotexto>
                            <a href="#" className="btn btn-primary-verde">Ir Blog</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default BannerComentarios;
