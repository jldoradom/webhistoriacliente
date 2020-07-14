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

const Image = styled.img`
    height: 200px;
    background-size: cover;
    width: 100%;
`

const Card = styled.div`
    width: 18rem;
    margin: auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: 0.5s ease;
    cursor: pointer;

    
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
const Lastblog = () => {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <H2>Ultimos Blogs</H2>
                </div>
                <div className="col-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">   
                            <Card className="card">
                                <Image  className="card-img-top blog" />
                                <div className="card-body">
                                    <Fecha>hace 4 días</Fecha>
                                    <H5 className="text-center font-weight-700">El reino de Julio Cesar</H5>
                                    <Parrafo className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the  <a href="#">...Seguir leyendo</a></Parrafo>
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
                            <div className="col-6">
                                <Card className="card">
                                    <Image  className="card-img-top blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary-verde">Go somewhere</a>
                                    </div>
                                </Card>    
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-6">
                            <Image  className="card-img-top imagenUltimosBlog" />
                            </div>
                            <div className="col-6">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                 industry. Lorem Ipsum has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer took a galley of type
                                   and scrambled it to make a type specimen book. It has survived
                                   
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Card className="card">
                                    <Image  className="card-img-top blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary-verde">Go somewhere</a>
                                    </div>
                                </Card>   
                            </div>
                            <div className="col-6">
                                <Card className="card">
                                    <Image  className="card-img-top blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary-verde">Go somewhere</a>
                                    </div>
                                </Card> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    sidebar
                    
                </div>
            </div>
        </div>
     );
}
 
export default Lastblog;