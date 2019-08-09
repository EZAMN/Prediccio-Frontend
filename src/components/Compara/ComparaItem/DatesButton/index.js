import React from 'react';
import moment from 'moment';


const DateButton = props => {
    const data = moment(props.data).format('DD/MM/YYYY');

    return (
        <button type="button" 
            className="btn btn-info" 
            onClick={props.onClick} 
            disabled={props.disabled}>
        {data}
        </button>
    );
}

export default DateButton;