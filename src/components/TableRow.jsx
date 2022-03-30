import React from 'react';
import proptTypes from 'prop-types';


function TableRow(props) {
    return(
            <tr>
                <td>{props.Title}</td>
                <td>{props.Length}</td>
                <td>{props.Rating}</td>
                <td>
            {props.Categories.map(
                (Categories, i) => <ul key= {Categories + i}>{Categories}</ul>
            )}
            </td>
        <td>{props.Awards}</td>
    </tr>
    )

}

export default TableRow;