import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const YolculugaBasla = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [instagram, setInstagram] = useState("");
  const [step, setStep] = useState(1);
  const [about, setAbout] = useState("");

  const SubmitClick = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setInstagram("");
    setTel("");
    setStep(step + 1);
  };

  return (
    <div>
      <div className="bg-black  p-5 text-center ">
        <h2 style={{ color: "white" }} className="text-5xl">
          Yolculuga Başla
        </h2>
      </div>
      {step == 1 && (
        <form className="mx-auto mt-5 w-10/12 md:w-7/12 lg:w-6/12 md:text-2xl text-base">
          <h2 className="my-5 font-bold text-4xl">Adım 1</h2>
          <div className=" mb-5">
            <h2 className="font-bold text-2xl	">Kişisel Bilgiler</h2>
            <div className="md:flex flex-wrap my-5 justify-between">
              <input
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-black p-2 lg:w-60 xl:w-80 w-full mb-3"
              />
              <input
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black p-2 lg:w-60 xl:w-80  w-full mb-3"
              />
            </div>
            <div className="md:flex flex-wrap justify-between ">
              <input
                type="tel"
                placeholder="telefon numarası"
                className="border border-black p-2 lg:w-60 xl:w-80 w-full mb-3"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <input
                type="text"
                placeholder="instagram kullanıcı adı"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="border border-black p-2 lg:w-60 xl:w-80 w-full mb-3"
              />
            </div>
          </div>
          <div className="my-5">
            <h2 className="font-bold text-2xl	">Hangi Ülkede Yaşıyorsunuz</h2>
            <div className="flex mt-5">
              <select className="w-full border border-black p-2">
                <option></option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl	">
              Daha Once Herbalife Kullandınız mı ?
            </h2>
            <div className="flex mt-5 items-center ">
              <input name="secenek" id="1" type="radio" />
              <label htmlFor="1" className="ml-2 mr-7">
                Evet
              </label>
              <input name="secenek" id="2" type="radio" />
              <label htmlFor="2" className="ml-2 mr-7">
                Hayır
              </label>
            </div>
          </div>
          <div className="mt-5 mb-5 items-center">
            <h2 className="font-bold text-2xl	">
              Daha Once Herbalife üyesi oldun mu ?
            </h2>
            <div className="flex mt-5  ">
              <input type="radio" name="sec" id="evet" />
              <label htmlFor="evet" className="ml-2 mr-7">
                Evet
              </label>
              <input type="radio" name="sec" id="2" />
              <label htmlFor="2" className="ml-2 mr-7">
                Hayır
              </label>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl	">İdeal vücut ölçün nedir?</h2>
            <div className="mt-3">
              <input
                type="text"
                placeholder="ideal olcun"
                className="w-full p-2 border border-black"
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              className="w-full bg-black text-white p-2 text-bold hover:bg-sky-600"
              onClick={SubmitClick}
            >
              Gonder
            </button>
          </div>
        </form>
      )}
      {/* Step 2 */}
      {step == 2 && (
        <div>
          <form className="mx-auto mt-5 w-10/12 md:w-7/12 lg:w-6/12 md:text-2xl text-base">
            <h2 className="my-5 font-bold text-4xl">Adım 2</h2>
            <h3>Bize biraz kendinden bahsedermisin ?</h3>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              name="about"
              placeholder="enter about you"
              className="w-full border-2 my-1 p-1"
              rows="10"
            />

            {/* Submit Button */}
            <button
              className="w-full bg-black text-white p-2 text-bold hover:bg-sky-600"
              onClick={SubmitClick}
            >
              Gonder
            </button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="flex flex-col justify-center items-center mt-3">
          <h2 className="my-5 font-bold text-4xl">Tamamlandı</h2>
          <Link
            to="/"
            className="bg-black text-white text-xl hover:bg-yellow-400 hover:text-black text-bold rounded p-2 "
          >
            Back to Home
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default YolculugaBasla;
