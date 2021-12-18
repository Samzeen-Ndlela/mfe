//Main start-up code

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount function to start the app

const mount =(el) => {
        ReactDOM.render( <App /> , el );
}; 

//if we are in tge developement mode and in isolation,
//call mount function immediately

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot)
    {
        mount(devRoot);
    }
}

//We are running throuhg container
//and we should export the mount function

export { mount };
