import React from 'react';
import Spin from 'antd/es/spin';
import './spinner.css';

//Component to show the loading state in the application
const Spinner = (props) => {
    return (
        <div className="modalSpinner">
            <div className="spinner">
                <Spin {...props} />
            </div>
        </div>
    );
}

export default Spinner