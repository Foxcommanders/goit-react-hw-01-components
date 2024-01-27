import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
