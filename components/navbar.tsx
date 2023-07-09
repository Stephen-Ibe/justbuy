import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>Store Switcher</div>
        <div>Routes</div>
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
