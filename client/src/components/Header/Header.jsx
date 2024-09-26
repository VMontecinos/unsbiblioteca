import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed top-0 left-0 w-full bg-[#303030] p-4 z-50">
      <div className="flex gap-4 items-center">
        <Sidebar />
        <h1 className="mx-6 text-white">UNS Biblioteca</h1>
      </div>
      <div className="flex-grow mx-6">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
