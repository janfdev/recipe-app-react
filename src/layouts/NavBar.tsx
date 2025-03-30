import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between px-5 py-4">
        <div className="flex justify-start items-center gap-3">
          <img src="/logo.svg" alt="" />
          <h1 className="text-xl text-blue-500 font-bold">Recipe App</h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
