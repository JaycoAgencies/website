import React from 'react';

interface IGlobalContext {}

const GlobalContext = React.createContext<IGlobalContext>({});

export default GlobalContext;
