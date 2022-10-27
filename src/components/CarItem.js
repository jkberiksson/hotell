import { motion } from 'framer-motion';
import styled from 'styled-components';

const CarItem = ({ car }) => {
  return (
    <Car>
      <div>
        <h3>{car.regnr}</h3>
        <p>{car.lagerplats}</p>
        <span>23/7/2022</span>
      </div>
      <div>
        <button>Info</button>
      </div>
    </Car>
  );
};

export default CarItem;

const Car = styled(motion.div)`
  height: 100px;
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 500;
    }

    span {
      font-size: 1.1rem;
      opacity: 0.8;
    }

    button {
      font-size: 1.6rem;
      font-weight: 500;
      background: none;
      padding: 1rem 2rem;
      border-radius: 1rem;
      color: #0b1d37;
      border: none;
      border: 2px solid #0b1d37;
      outline: none;
      cursor: pointer;
    }
  }
`;
