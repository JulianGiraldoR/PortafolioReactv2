import React,{useState} from "react";
import "./services.css";

const Services = () => {
    const [toggleState,setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Mis Servicios</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="ul uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                        Product <br />Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(1)}>
                        Ver mas<i className="uil uil-arrow-right services__button-icon"></i> </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product <br />Designer</h3>
                            <p className="services__modal-description">Mas de 2 años de experiencia en el diseño de paginas y landing</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mejorar la experiencia de los usuarios.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de paginas web.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crear elementos de interaccion.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseñar Mockups de la apariencia y funcionalidad de la pagina web.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="ul uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Ui/Ux <br/> Designer
                            </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(2)}>
                        Ver mas<i className="uil uil-arrow-right services__button-icon"></i> </span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">Mas de 2 años de experiencia en la creacion de diseños llamativos e innovadores</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de interfaces de usuario
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mejorar el diseño de paginas web.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crear nuevos elementos para mejorar la interaccion con el usuario.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño de paginas web a partir de mockups o interpretaciones echas en figma.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="ul uil-edit services__icon"></i>
                        <h3 className="services__title">
                        Visual <br/> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(3)}>
                        Ver mas<i className="uil uil-arrow-right services__button-icon"></i> </span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Mas de 2 años creando nueva experiencias en la interaccion de paginas web.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mejorar aspectos visuales de las paginas para hacerla mas llamativa.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de paginas web llamativas.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crear diseños llamativos a partir de parametros establecidos.
                                    </p>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;