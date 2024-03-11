import profile from "@profile";

const SkillSidebar = () => {
  const { skill } = profile;


  return (
    <div>
      <h1 className="text-xl font-extrabold mb-4">Skill</h1>
      <div>
        <ul className="list-none">
          {skill.map((test, i) => (
            <li key={i} className="border-b border-gray-700 py-3">
              <p className="text-sm font-medium mb-2 text-muted">{test.name}</p>
              <div className="flex">
                <div className="w-3/12 ">
                  <div className="w-14 h-14">
                    <img src={test.icon} alt="icon" className="object-cover" />
                  </div>
                </div>
                <div className="w-9/12  flex items-center">
                  <div className="w-full bg-zDark rounded-full relative">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${test.rate * 10}%`, height: "10px",background:test.color }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSidebar;
