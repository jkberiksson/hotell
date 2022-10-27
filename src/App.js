import { useState } from 'react';
import CarList from './components/CarList';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/Global';

function App() {
  const [search, setSearch] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Navbar search={search} setSearch={setSearch} />
      <CarList search={search} />
    </>
  );
}

export default App;
