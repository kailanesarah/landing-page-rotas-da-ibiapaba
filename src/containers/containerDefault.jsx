const Container = ({ children, className = "" }) => {
	return (
		<div
			className={`mx-auto w-full px-4 sm:max-w-full md:max-w-[1000px] lg:px-10 flex justify-center items-center ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
