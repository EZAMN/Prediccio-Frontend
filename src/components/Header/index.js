import React from 'react';
import literals from '../../config/literals'; //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions

const Header = () => {
    return(
        <header className="row">
          <div className="col-12">
            <h2 className="mb-3">{literals.header}</h2>
          </div>
        </header>
    );
}

export default Header;