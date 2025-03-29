import PropTypes from "prop-types";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto w-full px-4 sm:max-w-full md:max-w-[1000px] lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
