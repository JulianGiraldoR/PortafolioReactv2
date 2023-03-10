import React from "react";

const Others = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Otras Skills</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxl-nodejs' ></i>

                    <div>
                        <h3 className="skills__name">Github</h3>
                        <span className="skills__level">Intermedio</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Metodo Scrum</h3>
                        <span className="skills__level">Basico</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Metodo Kanban</h3>
                        <span className="skills__level">Basico</span>
                    </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Others;