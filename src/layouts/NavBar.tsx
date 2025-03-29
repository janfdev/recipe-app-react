import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="" />
        <h1 className="text-xl text-blue-500 font-bold">Recipe App</h1>
      </div>
      <ul className="flex items-center gap-3">
        <Button variant={"link"} className="text-3xl">
          Home
        </Button>
        <Button variant={"link"}>About</Button>
        <Button variant={"link"}>Contact</Button>
      </ul>
    </nav>
  );
};

export default NavBar;
