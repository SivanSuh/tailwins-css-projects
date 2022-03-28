import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
const Home = () => {
  return (
    <>
      <div className=" mx-auto lg:flex  block border-2 rounded-lg mb-3 home w-10/12">
        <div className="lg:w-5/12 w-full">
          <img
            className="rounded-l-lg h-full  w-full"
            src="https://ferhancihaner.com/uploads/pages/5ff204d6daada5fe407b8d158ahome-min.png"
            alt="home"
          />
        </div>
        <div className="flex justify-center items-center lg:w-7/12 w-full ">
          <div className="flex flex-col justify-center w-10/12 my-4">
            <div className="font-bold w-full lg:text-5xl text-2xl">
              <h2>
                Merhaba
                <br />
                Dünyama Hoş Geldin,
              </h2>
            </div>
            <br />
            <div className="mb-3">
              <h3>Herkese Selam</h3>
              <h3>
                <strong>Ben Ferhan Cihaner,</strong>
              </h3>
            </div>
            <div>
              <h3>
                Sporu çok seviyorum ve bir Triathletim! İnsanların da daha
                sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden
                gelen her şeyi yapmaya hazırım.
              </h3>
              <br />
              <h3>
                Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu!
                Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir
                yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda
                sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım
                istediklerini karşılarım!
              </h3>
              <br />
              <h3>Benimle gel ve motive ol!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="md:absolute md:top-64 md:left-4 relative   bottom-0">
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
