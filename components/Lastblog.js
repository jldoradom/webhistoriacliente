import React from 'react';
import styled  from 'styled-components';
import Banner from '../components/Banner';
import BannerComentarios from '../components/BannerComentarios';






const H2 = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1rem;
    @media (max-width: 767px){
        font-size: 1.6rem;
    }
`

const Image = styled.img`
    height: 250px;
    background-size: cover;
    width: 100%;
    max-width: 544px;
`



const Card = styled.div`
    
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media (min-width: 1199px) {
        width: 16rem;
    }
    @media (max-width: 992px) {
        margin-bottom: 1.5rem!important;
        margin-top: 1.5rem!important;
    }
      
`
const Fecha = styled.p`
    font-weight: 700;
    color: #1FB139 !important;
    text-align: center;
    margin-bottom: 5px;
`

const H5 = styled.h5`
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;
`
const Parrafo = styled.p`
    text-align: center;
    margin-bottom: 5px;
    line-height: 1.4;
`

const Cardlegend = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: .9rem;
    text-align: center;
    color: #ffffff;
    background-color: #1FB139;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    
`


const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    color: white;
`

const Valor = styled.div`
    font-weight: 600;
`

const Tipo = styled.div`
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
`

const Enlace = styled.a`
    color: #1FB139 !important;
    font-size: 14px;
`

const Titulomas = styled.p`
    text-align: center;
    color: #ffffff;
    background-color: #1FB139;
    padding: 10px;
    font-weight: 600;
`

const Lastblog = () => {
    return ( 
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <H2>Ultimos Blogs</H2>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">   
                        <Card className="card">
                            <Image  className="card-img-top blog" />
                            <div className="card-body">
                                <Fecha>hace 4 días</Fecha>
                                <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                            </div>
                            <Cardlegend>
                                <Legend>
                                    <Valor>41</Valor>
                                    <Tipo>likes</Tipo>
                                </Legend>
                                <Legend>
                                    <Valor>1512</Valor>
                                    <Tipo>visitas</Tipo>
                                </Legend><Legend>
                                    <Valor>124</Valor>
                                    <Tipo>Comentarios</Tipo>
                                </Legend>
                            </Cardlegend>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card className="card">
                            <Image  className="card-img-top blog" />
                            <div className="card-body">
                                <Fecha>hace 4 días</Fecha>
                                <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                            </div>
                            <Cardlegend>
                                <Legend>
                                    <Valor>41</Valor>
                                    <Tipo>likes</Tipo>
                                </Legend>
                                <Legend>
                                    <Valor>1512</Valor>
                                    <Tipo>visitas</Tipo>
                                </Legend><Legend>
                                    <Valor>124</Valor>
                                    <Tipo>Comentarios</Tipo>
                                </Legend>
                            </Cardlegend>
                        </Card>    
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card className="card">
                            <Image  className="card-img-top blog" />
                            <div className="card-body">
                                <Fecha>hace 4 días</Fecha>
                                <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                            </div>
                            <Cardlegend>
                                <Legend>
                                    <Valor>41</Valor>
                                    <Tipo>likes</Tipo>
                                </Legend>
                                <Legend>
                                    <Valor>1512</Valor>
                                    <Tipo>visitas</Tipo>
                                </Legend><Legend>
                                    <Valor>124</Valor>
                                    <Tipo>Comentarios</Tipo>
                                </Legend>
                            </Cardlegend>
                        </Card>    
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card className="card">
                            <Image  className="card-img-top blog" />
                            <div className="card-body">
                                <Fecha>hace 4 días</Fecha>
                                <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                            </div>
                            <Cardlegend>
                                <Legend>
                                    <Valor>41</Valor>
                                    <Tipo>likes</Tipo>
                                </Legend>
                                <Legend>
                                    <Valor>1512</Valor>
                                    <Tipo>visitas</Tipo>
                                </Legend><Legend>
                                    <Valor>124</Valor>
                                    <Tipo>Comentarios</Tipo>
                                </Legend>
                            </Cardlegend>
                        </Card>    
                    </div>
                </div>
            </div>
            <Banner />
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <H2>Ultimas Noticias</H2>
                    </div>
                        <div className="col-12 col-md-6 col-lg-3">   
                            <Card className="card">
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                </div>
            </div>
            <BannerComentarios />
            <div className="container my-5 py-5">
                <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">   
                            <Card className="card">
                                <Titulomas>Blog más votada</Titulomas>
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Titulomas>Noticia más votada</Titulomas>
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Titulomas>Blog más comentado</Titulomas>
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Card className="card">
                                <Titulomas>Noticia más comentada</Titulomas>
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <Enlace href="#">...Seguir leyendo</Enlace></Parrafo>
                                </div>
                                <Cardlegend>
                                    <Legend>
                                        <Valor>41</Valor>
                                        <Tipo>likes</Tipo>
                                    </Legend>
                                    <Legend>
                                        <Valor>1512</Valor>
                                        <Tipo>visitas</Tipo>
                                    </Legend><Legend>
                                        <Valor>124</Valor>
                                        <Tipo>Comentarios</Tipo>
                                    </Legend>
                                </Cardlegend>
                            </Card>    
                        </div>
                </div>
            </div>
         </>         

                        
      
     );
}
 
export default Lastblog;