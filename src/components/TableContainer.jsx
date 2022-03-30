import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import TableRow from './TableRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]

function TableContainer (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <TableRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default TableContainer;




/* function TableContainer(props) {
    return(
    <table>
        <th>Título</th>
        <th>Duración</th>
        <th>Rating</th>
        <th>Género</th>
        <th>Premios</th>
        {pelisAMostrar.map ((fila, i) =>
              <TableRow key={fila.id+i} {...fila}/>
        )}
    </table>
    )

}

export default TableContainer; */