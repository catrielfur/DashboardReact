import React from 'react';


import ContentRowMovies from './ContentRowMovies';
import LastMoviesInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import TableContainer from './TableContainer';


function ContentRowTop2() {
    return (
				<div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <div className="row">
                  <ContentRowMovies
                    titulo= "Movies in Data Base"
                    color_de_borde= "border-left-primary"
                    cifra= "21"
                    icono= "fas fa-film fa-2x text-gray-300"
                  />

                  <ContentRowMovies
                    titulo= "Total awards"
                    color_de_borde= "border-left-success"
                    cifra= "79"
                    icono= "fas fa-award fa-2x text-gray-300"
                  />

                  <ContentRowMovies
                    titulo= "Actors quantity"
                    color_de_borde= "border-left-warning"
                    cifra= "49"
                    icono= "fas fa-user fa-2x text-gray-300"
                  />
                </div>

                  <div className="row">
                  <LastMoviesInDb />
                  <GenresInDb />
                  <TableContainer />
                </div>
            </div>
            );
    }
    export default ContentRowTop2;