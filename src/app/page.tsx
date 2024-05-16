import Image from "next/image";
import PQBLogo from "@/assets/images/pqb-logo.png";
import PQBBanner from "@/assets/images/anuncioPatinhasqBrilham.png";
import CatGif from "@/assets/images/lovely-cat.gif";
import CatHeart from "@/assets/images/cat-heart.gif";
import CatPlaying from "@/assets/images/cat-playing.gif";
import Lula from "@/assets/images/billy.jpg";
import Janja from "@/assets/images/janja.jpg";
import BrunaPic from "@/assets/images/bruna.png";
import { Galada } from "next/font/google";

// Icons
import DogFoodIcon from "@/assets/images/icons/dog-food-icon.webp";
import DotsIcon from "@/assets/images/icons/dots-icon.webp";
import InstaIcon from "@/assets/images/icons/insta-icon.webp";
import PawIcon from "@/assets/images/icons/paw-icon.webp";
import PixIcon from "@/assets/images/icons/pix-icon.webp";
import RemedyIcon from "@/assets/images/icons/remedy-icon.webp";
import SoapIcon from "@/assets/images/icons/soap-icon.webp";
import TowelIcon from "@/assets/images/icons/towel-icon.webp";

import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

const fontGalada = Galada({ weight: "400", subsets: ["latin"] });

const pets = [
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
];

const adoptedPets = [
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
];

const team = [
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
  {
    name: "Brunaah",
    role: "Artista",
    image: BrunaPic,
  },
];

export default function Home() {
  return (
    <>
      {/* <Image
        src={PQPBg}
        alt=""
        style={{
          objectFit: "cover",
          zIndex: -10,
          userSelect: "none",
          top: 0,
          opacity: 0.03,
          filter: "blur(5px)",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      /> */}
      <header className="fixed top-0 w-full z-20">
        <nav className="bg-black shadow-md max-md:py-4">
          <Image
            src={PQBLogo}
            alt="Logo"
            width={65}
            className="mx-auto bg-white rounded-full md:hidden"
          />
          <ul className="flex justify-center items-center text-white font-light max-md:hidden">
            <li className="bg-white rounded-full mx-7">
              <Image src={PQBLogo} alt="Logo" width={50} />
            </li>
            {/* <li className="text-xl py-7"><Link href="#">Página</Link></li> */}
            <li className="text-md py-7 border-b-2 border-black hover:border-white">
              <Link href="#sobre" className="p-7 hover:bg-neutral-800">
                Sobre
              </Link>
            </li>
            <li className="text-md py-7 border-b-2 border-black hover:border-white">
              <Link href="#pets" className="p-7 hover:bg-neutral-800">
                Pets
              </Link>
            </li>
            <li className="text-md py-7 border-b-2 border-black hover:border-white">
              <Link href="#como-ajudar" className="p-7 hover:bg-neutral-800">
                Como ajudar
              </Link>
            </li>
            <li className="text-md py-7 border-b-2 border-black hover:border-white">
              <Link href="#adocoes" className="p-7 hover:bg-neutral-800">
                Adoções
              </Link>
            </li>
            <li className="text-md py-7 border-b-2 border-black hover:border-white">
              <Link href="#equipe" className="p-7 hover:bg-neutral-800">
                Equipe
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-6 min-h-screen py-32 px-8 max-sm:overflow-x-hidden">
        <h1
          className={`${fontGalada.className} text-4xl text-center text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
          ONG - Patinhas que brilham
        </h1>
        <Image
          src={PQBBanner}
          alt="Banner da ONG Patinhas Que Brilham"
          className="rounded-xl"
        />
        <div id="sobre"></div>
        <section className="relative max-w-[50rem] mt-20 border border-primary border-opacity-60 rounded-xl p-10 z-10">
          <h2
            className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary`}
            id="sobre">
            Sobre
          </h2>
          <p className="leading-10 mt-4">
            Com muito amor e dedicação, a ONG Patinhas que Brilham se empenha em
            resgatar e transformar a vida do maior número possível de animais em
            situação de vulnerabilidade. Nosso trabalho envolve resgate,
            tratamento, cuidados, castração e preparação para adoção
            responsável, tudo feito por uma equipe apaixonada pela causa animal.
            O resultado? Milhares de vidas preciosas que ganharam uma segunda
            chance e agora desfrutam de lares amorosos, cheios de carinho, panos
            fofos e barriguinhas sempre cheias.
          </p>
          <Image
            src={CatGif}
            alt=""
            width={140}
            className="absolute -top-[3rem] -right-[2rem] -z-10"
          />
        </section>
        <div id="pets"></div>
        <section className="mt-20">
          <h2
            className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
            Animais disponíveis para adoção
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {pets.map((e, i) => (
              <div
                key={i}
                className="
              text-center
              mt-12
              shadow-lg
              border-2
              !bg-[url(../assets/images/card-bg.png)]
              border-primary
              py-6
              px-10
              rounded-lg
              hover:-translate-y-2
              hover:brightness-110
              duration-300
              ">
                <Image
                  src={e.image}
                  alt="Pet image"
                  width={180}
                  className="rounded-full border-4"
                />
                <h3 className="text-xl mt-2 font-bold">{e.name}</h3>
                <p className="text-lg mt-2">{e.age}</p>
                <p className="text-lg mt-2">{e.cast}</p>
                <button className="bg-yellow mt-2 py-1 text-lg font-bold text-black rounded-full w-full">
                  Adotar
                </button>
              </div>
            ))}
          </div>
        </section>
        <div id="como-ajudar"></div>
        <section className="relative max-w-[70rem] mt-20 border border-primary border-opacity-60 rounded-xl p-10">
          <Image
            src={CatHeart}
            alt=""
            width={140}
            className="absolute -top-[3rem] -right-[3rem]"
          />
          <h2
            className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary`}
            id="sobre">
            Como ajudar?
          </h2>
          <ol className="flex justify-center flex-wrap gap-24 max-sm:gap-8">
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={DogFoodIcon}
                alt="Logo ração"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Adote um pet</p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={InstaIcon}
                alt="Logo pix"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">
                Compartilhe nossas <br />
                redes sociais
              </p>
            </li>
          </ol>
          <h2 className={`${fontGalada.className} text-3xl mt-10 text-primary`}>
            Nós aceitamos doações de:
          </h2>
          <ol className="flex justify-center flex-wrap gap-24 max-sm:gap-8">
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={PixIcon}
                alt="Logo pix"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Pix</p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={DogFoodIcon}
                alt="Logo ração"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Ração</p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={RemedyIcon}
                alt="Logo pix"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Medicamentos</p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={SoapIcon}
                alt="Logo ração"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">
                Produtos de <br />
                Higiene
              </p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={TowelIcon}
                alt="Logo pix"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Cobertas</p>
            </li>
            <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
              <Image
                src={DotsIcon}
                alt="Logo ração"
                width={80}
                height={80}
                className="mx-auto drop-shadow-lg"
              />
              <p className="text-center mt-2">Outros</p>
            </li>
          </ol>
        </section>
        <div id="adocoes"></div>
        <section className="mt-20">
          <h2
            className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
            Animais já adotados
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {adoptedPets.map((e, i) => (
              <div
                key={i}
                className="
                text-center
                mt-12
                shadow-lg
                border-2
                !bg-[url(../assets/images/card-bg.png)]
                border-primary
                py-6
                px-10
                rounded-lg
                hover:-translate-y-2
                hover:brightness-110
                duration-300
              ">
                <Image
                  src={e.image}
                  alt="Pet image"
                  width={180}
                  className="rounded-full border-4"
                />
                <h3 className="text-xl font-bold">{e.name}</h3>
                <p className="text-lg">{e.age}</p>
                <p className="text-lg">{e.cast}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-28 w-full">
          <h2
            className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
            Vídeo
          </h2>
          <div className="relative w-full max-lg:pb-[56.25%] overflow-hidden mt-10">
            <iframe
              src="https://www.youtube.com/embed/0tOXxuLcaog"
              className="absolute top-0 left-0 w-full h-full lg:static lg:w-[1000px] lg:h-[500px] mx-auto"></iframe>
          </div>
        </section>
        <div id="equipe"></div>
        <section className="relative max-w-[70rem] mt-32 border border-primary border-opacity-60 rounded-xl p-10 z-10">
          <Image
            src={CatPlaying}
            alt=""
            width={180}
            className="absolute -top-[5rem] -right-[3rem] -z-10"
          />
          <h2
            className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary`}
            id="sobre">
            Nossa equipe
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {team.map((e, i) => (
              <div
                key={i}
                className="
                flex
                flex-col
                items-center
                mt-12
                gap-5
                shadow-xl
                bg-yellow
                pt-6
                pb-12
                px-10
                rounded-lg
                hover:-translate-y-2
                hover:brightness-105
                duration-200
              ">
                <Image
                  src={e.image}
                  alt="Pet image"
                  width={180}
                  className="border-[6px] border-white shadow-lg h-[15rem]"
                />
                <h3 className="text-xl font-bold">{e.name}</h3>
                <p className="text-lg">{e.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="flex justify-center items-center gap-8 border-t-4 border-primary bg-orange-50 py-16">
        <div className="flex flex-col gap-8">
          <span>
            <FaInstagram className="inline mr-2" />
            ongpatinhasquebrilham
          </span>
          <span>
            <FaFacebook className="inline mr-2" />
            Ong Patinhas que Brilham
          </span>
          <span>
            <FaRegEnvelope className="inline mr-2" />
            ongpatinhasquebrilham@gmail.com
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <span>
            <FaPhoneAlt className="inline mr-2" />
            (013) 99656 6970
          </span>
          <span>
            <FaMapPin className="inline mr-2" />
            R. Carvalho de Mendonça, <br /> 670 - Marapé, Santos - SP, 11070-103
          </span>
        </div>
        <Image
          src={PQBLogo}
          alt="Logo"
          width={200}
          className="bg-white rounded-full"
        />
      </footer>
    </>
  );
}
