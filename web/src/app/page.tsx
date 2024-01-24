'use client'

import Image from "next/image"
import incomeImg from "../assets/income.svg"
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const textShadow = {
    color: '#ffffff',
    textShadow:
      '0 0 2px #60a5fa, 0 0 2px #60a5fa, 0 0 4px #60a5fa, 0 0 12px #60a5fa',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className="max-w-screen-xl m-auto px-8 py-10">
      <div className="bg-gray-500 py-8 px-6 rounded-lg min-w-64 relative">
        <header className="flex items-center justify-between gap-8 text-justify">
            <p className="text-3xl leading-10 ">Projeto de Gestão Financeira Full-Stack. Front-End desenvolvido em Nextjs 14 App Router, React, Typescript, Tailwindcss e Axios. Back-End desenvolvido em Nodejs e Prisma. Metodo de autenticação pelo GitHub OAuth. </p>
            <Image className="absolute right-4 bottom-4" src={incomeImg} alt="Entradas" width={32} height={32} />
        </header>
        <strong 
          className="block mt-4 text-4xl font-medium leading-loose"
          
        ><span onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...textShadow,
          transition: 'text-shadow 0.5s ease-in-out',
          textShadow: isHovered ? textShadow.textShadow : 'none',
        }}>Fique a vontade para testar!</span></strong>
      </div>
    </div>
  )
}
