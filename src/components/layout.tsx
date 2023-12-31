import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Breadcrumbs from "./breadcrumbs";
import { Outlet } from "react-router-dom";
import { TitleProvider, useTitleContext } from "@shadcn/context/titleContext";
import { FilterAndPaginationProvider } from "@shadcn/context/filterAndPaginationContext";
import { QuizModalProvider } from "@shadcn/context/quizModalContext";

const Layout = () => {
  const { mainTitle, title } = useTitleContext();

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <Breadcrumbs />
        <div className="flex-1 overflow-y-auto p-4 pt-2 bg-gray-200">
          <div className="bg-gray-200">
            <h1 className="text-lg font-semibold">{mainTitle || ""}</h1>
            <h3 className="text-sm">{title || ""}</h3>
            <div className="bg-white min-h-[calc(100vh-200px)] rounded-md mt-4">
              <TitleProvider>
                <FilterAndPaginationProvider>
                  <QuizModalProvider>
                    <Outlet />
                  </QuizModalProvider>
                </FilterAndPaginationProvider>
              </TitleProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
