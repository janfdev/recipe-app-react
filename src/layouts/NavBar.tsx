import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="" />
          <h1 className="text-xl text-blue-500 font-bold">Recipe App</h1>
        </div>
        <ul className="flex items-center gap-3">
          <Button
            variant={"link"}
            className="text-lg text-blue-500
        "
          >
            Home
          </Button>
          <Button
            variant={"link"}
            className="text-lg text-blue-500
        "
          >
            Popular
          </Button>
          <Button
            variant={"link"}
            className="text-lg text-blue-500
        "
          >
            Categories
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
