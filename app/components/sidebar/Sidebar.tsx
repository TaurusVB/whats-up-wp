import { ReactNode } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

interface ISidebarProps {
  children: ReactNode;
}

const Sidebar = async ({ children }: ISidebarProps) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className=" lg:px-20 h-full ">{children}</main>
    </div>
  );
};

export default Sidebar;
