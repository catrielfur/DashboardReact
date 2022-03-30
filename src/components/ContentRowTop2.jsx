import React from 'react';


import ContentRowMovies from './ContentRowMovies';
import LastMoviesInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";


function ContentRowTop2() {
    return (
				<div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                  <ContentRowMovies />
                  <div className="row">
                  <LastMoviesInDb />
                  <GenresInDb />
                </div>
            </div>
            );
    }
    export default ContentRowTop2;