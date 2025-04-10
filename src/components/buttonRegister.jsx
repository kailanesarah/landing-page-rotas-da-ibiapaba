const ButtonRegister = ({ text }) => {
	return (
		<button
			type="submit"
			className="p-2 w-full bg-[var(--brand-green-dark)] text-white font-semibold rounded-md 
                transition-transform duration-300 hover:scale-105 cursor-pointer"
		>
			{text}
		</button>
	);
};

export default ButtonRegister;
