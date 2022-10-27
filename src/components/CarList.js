import data from '../data/data.json';
import CarItem from './CarItem';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const CarList = ({ search }) => {
  return (
    <Container>
      {data
        .filter(
          ({ regnr, lagerplats }) =>
            regnr.includes(search) || lagerplats.includes(search)
        )
        .map((car, idx) => (
          <CarItem key={idx} car={car} idx={idx} />
        ))}
    </Container>
  );
};

export default CarList;

const Container = styled(motion.div)`
  padding: 0 2rem;
`;
