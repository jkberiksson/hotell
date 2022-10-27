import { GiCarWheel } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Navbar({ search, setSearch }) {
  return (
    <Nav>
      <Logo>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
          <GiCarWheel size={26} />
        </motion.div>
        <h1>HotellAppen</h1>
      </Logo>
      <Inputs>
        <input
          type='text'
          placeholder='Sök regnr eller lagerplats'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <BiSearch size={16} />
        </div>
      </Inputs>
    </Nav>
  );
}

export default Navbar;

const Nav = styled(motion.nav)`
  padding: 4rem 2rem;
  background-color: #eee;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;

const Inputs = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #0b1d37;
  border-radius: 0.6rem;
  overflow: hidden;

  input,
  div {
    height: 100%;
  }

  input {
    width: 80%;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    outline: none;
    border: none;
    background: none;
    color: #0b1d37;
    padding: 2rem;

    ::placeholder {
      text-transform: initial;
      font-weight: 300;
    }
  }

  div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled(motion.div)`
  max-width: 700px;
  height: 50px;
  margin: 0 auto;
  border-radius: 0.6rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  background-color: #0b1d37;
  color: #eee;
`;
