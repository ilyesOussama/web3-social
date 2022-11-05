const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
    >
      {children}
    </button>
  );
};

export default Button;
