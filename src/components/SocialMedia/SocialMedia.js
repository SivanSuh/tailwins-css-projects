import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        style={{ width: "30px", height: "30px", marginBottom: "20px" }}
        src="https://ferhancihaner.com/assets/img/instagram.svg"
        alt="instagram"
      />

      <img
        style={{ width: "30px", height: "30px", marginBottom: "20px" }}
        src="https://ferhancihaner.com/assets/img/facebook.svg"
        alt="facebook"
      />

      <img
        style={{ width: "30px", height: "30px", marginBottom: "20px" }}
        src="https://ferhancihaner.com/assets/img/twitter.svg"
        alt="twitter"
      />

      <img
        style={{ width: "30px", height: "30px", marginBottom: "20px" }}
        src="https://ferhancihaner.com/assets/img/youtube.svg"
        alt="youtube"
      />
    </div>
  );
};

export default SocialMedia;
