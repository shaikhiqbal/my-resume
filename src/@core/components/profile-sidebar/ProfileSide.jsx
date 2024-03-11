// ** Profile Details **
import profileConfig from "@profile";
import Button from "@Button";

// ** Icons Third Party **
import { Mail, MapPin, Phone } from "react-feather";

import { Linkedin, Git } from "@Icon";

import {Download} from "react-feather"

const icons = {
  email: <Mail size={14} />,
  phone: <Phone size={14} />,
  location: <MapPin size={14} />,
};

const ProfileSide = () => {
  const { myProfile } = profileConfig;

  return (
    <div className="flex flex-col gap-10 px-15">
      <div className="flex justify-center">
        <img
          src={myProfile.profileImage}
          className="rounded-full object-cover w-60 h-60"
          alt="profile.png"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-black ">{myProfile.fullName}</p>
        <p className="mt-2 text-base font-semibold">Front-end Developer</p>
      </div>

      <div>
        <ul>
          <li className="flex items-center gap-2 p-3 font-semibold  border-b border-gray-700">
            <span>{icons["email"]}</span>
            <span>{myProfile.email}</span>
          </li>
          <li className="flex items-center gap-2 p-3 font-semibold  border-b border-gray-700">
            <span>{icons["phone"]}</span>
            <span>{myProfile.phone}</span>
          </li>
          <li className="flex items-center gap-2 p-3 font-semibold  border-b border-gray-700 ">
            <span>{icons["location"]}</span>
            <span>{myProfile.location}</span>
          </li>
        </ul>
      </div>
      <div className="m-2">
        <Button label="Download Resume" icon={<Download/> } variant="icon" />
      </div>
      <div className="m-2 flex justify-evenly cursor-pointer">
        <div className="w-20 h-20 p-3 bg-dark shadow-md rounded-md cursor-pointer">
          <img
            src={Linkedin}
            alt="Icon.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-20 p-3 bg-dark shadow-md rounded-md cursor-pointer">
          <img
            src={Git}
            alt="Icon.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSide;
