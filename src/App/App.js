import React from 'react';
import TableComponent from '../TableComponent/TableComponent';
import { AppContainer} from './App.styled';


const App = () => {
  return (
      <AppContainer>
          <h1>CRUD Operations</h1>
          <TableComponent />
      </AppContainer>
  );
};

export default App;
