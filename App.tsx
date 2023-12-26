import {View, Text} from 'react-native';
import React, { Children } from 'react';
import {ContextProvider} from './components/context/myContext';
import Navigation from './components/navigation/navigation';
const App: React.FC= () => {
  return (
    <ContextProvider >
      <Navigation />
    </ContextProvider>
  );
};

export default App;
