import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  // TODO: Maintain aspect ratio
  return (
    <Image
      src="/images/profile_picture.svg"
      alt="profile-picture"
      className="w-[264px] h-[264px]"
      width={1000}
      height={1000}
    />
  );
};

export default ProfileImage;
