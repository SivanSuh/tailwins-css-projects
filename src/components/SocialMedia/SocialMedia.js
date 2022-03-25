import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex md:flex-col  flex-row justify-center items-center ">
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://ferhancihaner.com/assets/img/instagram.svg"
        alt="instagram"
        className="cursor-pointer m-2"
      />

      <img
        style={{ width: "30px", height: "30px" }}
        src="https://ferhancihaner.com/assets/img/facebook.svg"
        alt="facebook"
        className="cursor-pointer m-2"
      />

      <img
        style={{ width: "30px", height: "30px" }}
        src="https://ferhancihaner.com/assets/img/twitter.svg"
        alt="twitter"
        className="cursor-pointer m-2"
      />

      <img
        style={{ width: "30px", height: "30px" }}
        src="https://ferhancihaner.com/assets/img/youtube.svg"
        alt="youtube"
        className="cursor-pointer m-2"
      />
    </div>
  );
};

export default SocialMedia;
