import ProfileSidebar from "@ProfileSidebar";
import SkillSidebar from "@SkillSidebar";

import AboutUs from "../components/about/AboutUs";

const Horizontal = () => {
  return (
    <div className="  flex">
      <div className="w-3/4 pt-28 ps-28 min-h-full flex">
        <div className="w-1/4 ">
          <ProfileSidebar />
        </div>
        <div className="w-3/4 px-16 max-h-[100vh] overflow-y-auto" >
          <AboutUs />
        </div>
      </div>
      <div className="w-1/4 max-h-[100vh] overflow-y-auto pt-28" style={{ boxShadow: `-20px 0 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset` }}>
  <div className="mx-16">
    <SkillSidebar />
  </div>
</div>

    </div>
  );
};

export default Horizontal;
