import ProfileSidebar from "@ProfileSidebar";
import 'react-perfect-scrollbar/dist/css/styles.css';

import AboutUs from "../components/about/AboutUs";
import 'react-perfect-scrollbar/dist/css/styles.css';

const Horizontal = () => {
  return (
    <div className="flex flex-wrap h-screen lg:ps-20  lg:pt-20">
      {/* First div: 3/12 on lg, 4/12 on md */}
      <div className="w-full md:w-4/12 lg:w-3/12 relative overflow-auto">
        <div className="md:absolute top-0 z-10 md:h-full py-7 flex justify-center" >
          <ProfileSidebar />
        </div>
      </div>
      <div className="w-full md:w-8/12 lg:w-9/12 bg-green md:relative md:overflow-auto rounded-lg">
        <div className="md:absolute top-0 z-10 md:h-full md:py-7">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default Horizontal;



