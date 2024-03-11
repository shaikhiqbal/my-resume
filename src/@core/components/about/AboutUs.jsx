import profile from "@profile";

import { Calendar, Map } from "react-feather";

const AboutUs = () => {
  const { learningSkill, aboutMe, jobs } = profile;

  const icons = {
    joinedDate: <Calendar size={14} />,
    location: <Map size={14} />,
  };

  return (
    <div className="px-5">
      <h1 className="text-xl font-extrabold mb-4">{aboutMe.title}</h1>
      <div>
        {aboutMe?.list.map((data, key) => (
          <p key={key}>{data}</p>
        ))}
      </div>

      {jobs.map((job, key) => (
        <div key={key} className="mt-16 mb-3">
          <h1 className="text-xl font-extrabold mb-4">{job.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold border-b flex">
              <span>{job.company}</span>{" "}
              <span>
                <img src={job.icon} alt="icon" className="w-[20px]"/>
              </span>
            </p>

            <div className="flex">
              <div className="flex items-center gap-2 p-3 font-semibold ">
                <span>{icons["joinedDate"]}</span>
                <span>{job.joinedDate}</span>
              </div>

              <div className="flex items-center gap-2 p-3 font-semibold ">
                <span>{icons["location"]}</span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <p>{job.subTitle}</p>
          <ul>
            {job.list.map((data, key) => (
              <li className="mb-2" key={key}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h1 className="text-xl font-extrabold mt-16">Current Learning</h1>
      <ul className="list-none flex justify-evenly flex-wrap">
        {learningSkill.map((test, i) => (
          <li key={i} className="py-3 rounded-full w-36 h-36">
            <div className="flex flex-col items-center justify-center shadow-xl p-4 w-36 h-36">
              <div className="w-14 h-14">
                <img src={test.icon} alt="icon" className="object-cover" />
              </div>

              <p className="text-sm font-medium mt-2 text-muted">{test.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;

/*



*/
