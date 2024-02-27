import React from 'react';
import TableComponent from '../TableComponent/TableComponent';
import { AppContainer} from './App.styled';
import { CRUDDescription } from '../CRUDDescription/CRUDDescription.jsx'

const App = () => {
  return (
      <AppContainer>
          <h1>CRUD Operations</h1>
          <CRUDDescription />
          <TableComponent />
      </AppContainer>
  );
};

export default App;
