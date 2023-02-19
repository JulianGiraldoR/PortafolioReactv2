import React from "react";

const Info =()=> {
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experiencia</h3>
                <span className="about__subtitle">+3 años como independiente</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title"><a href="https://github.com/JulianGiraldoR?tab=repositories " target="_blank">Proyectos</a> </h3>
                <span className="about__subtitle">+20 Proyects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Soporte</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>

    )
}
export default Info;