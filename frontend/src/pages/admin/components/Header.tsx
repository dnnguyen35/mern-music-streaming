import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="rounded-lg">
          <div className="flex gap-2 items-center text-4xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
            nhacCuaTao
          </div>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Music Manager</h1>
          <p className="text-zinc-400 mt-1">Manage your music catalog</p>
        </div>
      </div>
      <UserButton />
    </div>
  );
};
export default Header;
