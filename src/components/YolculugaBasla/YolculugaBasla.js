import React from "react";
import Footer from "../Footer/Footer";

const YolculugaBasla = () => {
  return (
    <div>
      <div className="bg-black  p-5 text-center ">
        <h2 style={{ color: "white", fontSize: "50px" }}>Yolculuga Başla</h2>
      </div>
      <form className="mx-auto mt-5 " style={{ width: "570px" }}>
        <h2 style={{ fontSize: "35px" }} className="my-5 font-bold">
          Adım 1
        </h2>
        <div className=" mb-5">
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            Kişisel Bilgiler
          </h2>
          <div className="flex my-5 justify-between">
            <input
              type="text"
              placeholder="enter name"
              className="border border-black p-2  "
              style={{ width: "268px" }}
            />
            <input
              style={{ width: "268px" }}
              type="email"
              placeholder="enter email"
              className="border border-black p-2 "
            />
          </div>
          <div className="flex justify-between ">
            <input
              type="tel"
              style={{ width: "268px" }}
              placeholder="telefon numarası"
              className="border border-black p-2 "
            />
            <input
              style={{ width: "268px" }}
              type="text"
              placeholder="instagram kullanıcı adı"
              className="border border-black p-2 "
            />
          </div>
        </div>
        <div className="my-5">
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            Hangi Ülkede Yaşıyorsunuz
          </h2>
          <div className="flex mt-5">
            <select className="w-full border border-black p-2">
              <option></option>
            </select>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            Daha Once Herbalife Kullandınız mı ?
          </h2>
          <div className="flex mt-5  ">
            <div>
              <input value={true} name="evet" id="1" type="radio" />
              <label htmlFor="1" className="ml-2 mr-7">
                Evet
              </label>
            </div>
            <div>
              <input name="hayır" id="2" type="radio" />
              <label htmlFor="2" className="ml-2 mr-7">
                Hayır
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            Daha Once Herbalife üyesi oldun mu ?
          </h2>
          <div className="flex mt-5  ">
            <div>
              <input value={true} name="evet" id="1" type="radio" />
              <label htmlFor="1" className="ml-2 mr-7">
                Evet
              </label>
            </div>
            <div>
              <input name="hayır" id="2" type="radio" />
              <label htmlFor="2" className="ml-2 mr-7">
                Hayır
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            İdeal vücut ölçün nedir?
          </h2>
          <div className="mt-3">
            <input
              type="text"
              placeholder="ideal olcun"
              className="w-full p-2 border border-black"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="w-full bg-black text-white p-2 text-bold">
            Gonder
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default YolculugaBasla;
