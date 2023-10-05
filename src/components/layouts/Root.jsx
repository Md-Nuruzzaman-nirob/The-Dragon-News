import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto mx-6 font-Poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
