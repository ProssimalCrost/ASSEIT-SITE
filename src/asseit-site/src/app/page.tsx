"use client";
import { use } from "react";
import Carousel from "./components/carousel";
import styled from "styled-components";

const Button = styled("button")`
  background-color: #061957ff;
  color: white;
  font-weight: 500;
  padding: 10px 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #00a2ffff;
  }
`;


export default function HomePage() {
  return (
    <main>  
      <Carousel/>

        <div className="flex flex-col gap-8 bg-gray-800 bg-opacity-60 p-2 rounded-lg mx-2 md:mx-20 lg:mx-40">
          <div className="justify-center items-center flex flex-col">
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-6">
                Associação das Empresas Industriais de Timóteo
            </h1>

          </div>
          <div className="justify-center items-center flex flex-col">
           <h1 className="text-2xl text-white text-lg mb-8 drop-shadow-md text-center">
              Unindo forças para o desenvolvimento industrial e comunitário de
              Timóteo.
           </h1>
  
           <Button>
             <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">Conheça a ASSEIT</button>
           </Button>
          </div>
        
        </div>
    </main>
    
  );
}
