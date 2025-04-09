const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 lg:px-8 py-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
