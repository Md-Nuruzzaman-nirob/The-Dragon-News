import PropTypes from "prop-types";

const PrivetRouter = ({ children }) => {
  return children;
};

PrivetRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRouter;
