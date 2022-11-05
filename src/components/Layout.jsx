import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <main className="px-6 md:px-0 min-h-screen min-w-screen  py-4 md:py-10 bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
