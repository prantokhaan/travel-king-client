import React from 'react';
import notFoundImg from '../../images/404 Error Page not Found with people connecting a plug-pana.svg';

const NotFound = () => {
    return (
      <div>
        <div className="text-center">
          <img src={notFoundImg} alt="" height="600px" width="600px" />
        </div>
      </div>
    );
};

export default NotFound;