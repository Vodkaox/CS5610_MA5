import React from 'react';

const SquareContext = React.createContext({
  squares: [],
  colorChanger: () => {},
});

export default SquareContext;
