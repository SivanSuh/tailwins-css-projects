import React, { useState } from "react";
import Footer from "../Footer/Footer";

const YolculugaBasla = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [instagram, setInstagram] = useState("");
  const [step, setStep] = useState("");
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
          <h2 className="font-bold text-2xl	">
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
      {/* Step 2 */}
      {step === 2 && (
        <div>
          <form>
            <h2>Adım 2</h2>
            <h3>Bize biraz kendinden bahsedermisin ?</h3>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              name="about"
              className="w-full"
              rows="10"
            />

            {/* Submit Button */}
            <button
              onClick={(e) => {
                SubmitClick(e);
                setStep(step + 1);
              }}
            >
              Gönder
            </button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Tamamlandı</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default YolculugaBasla;
