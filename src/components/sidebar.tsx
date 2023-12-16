import logo from "./../assets/adminQuizGrad.svg";
import graduate from "./../assets/adminGraduate.svg";
import MenuItem from "./menuItem";
import { PieChart } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { AppWindow } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[200px] bg-dblue text-white min-h-screen">
      <div className="mx-6">
        <div className="p-6 pl-2 mr-0">
          <div>
            <img src={logo} alt="logo" className="w-28 mt-6 ml-2 relative" />
            <img
              src={graduate}
              alt="logo"
              className="w-6 top-10 left-8 absolute"
            />
          </div>
          {/* <img src={logo} alt={logo} /> */}
        </div>
        <hr className="mb-2" />
        <MenuItem icon={<PieChart />} path="/admin" label="Dashboard" />
        <MenuItem
          icon={<LayoutGrid />}
          path="/admin/questions"
          label="Questions"
        />
        <MenuItem icon={<AppWindow />} path="/admin/quizes" label="Quizzes" />
      </div>
    </div>
  );
};

export default Sidebar;
