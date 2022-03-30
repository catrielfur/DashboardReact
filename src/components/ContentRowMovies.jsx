import React from 'react';
import PropTypes from 'prop-types'
function ContentRowMovies(props) {
    return (
                <div className="col-md-4 mb-4">
                    <div className= {`card ${props.color_de_borde} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={props.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           

)
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.string.isRequired,
    icono: PropTypes.string.isRequired,
    color_de_borde: PropTypes.string.isRequired,
}

ContentRowMovies.defaultTypes = {
    titulo: "titulo",
    cifra: "0",
    icono: "fa-solid fa-hexagon-exclamation",
    color_de_borde: "border-left-primary"
}
export default ContentRowMovies;