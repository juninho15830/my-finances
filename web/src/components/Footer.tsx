'use client'

import Link from "next/link";
import { AiFillMessage, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiDocument } from "react-icons/hi2";
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGmail, SiTelegram } from "react-icons/si";

export function Footer () {

    return (
    <footer className=" bg-gray-700 my-0">
    <div className="w-full max-w-screen-xl items-center m-auto text-center">
        <div className="flex flex-wrap w-full justify-between px-8 max-w-screen-xl my-0 mx-auto pb-16 pt-8 gap-8">
            <div className="max-w-md text-justify">
                <p>Projeto desenvolvido para estudo e aprofundamento de conhecimentos em desenvolvido Full-Stack</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
            <Link className="hover:text-blue-500 duration-200" href="../files/CV.pdf" target='blank' ><HiDocument size={32} title="Currículo"/></Link>

                <Link className="hover:text-blue-500 duration-200" href="https://www.linkedin.com/in/jairredigolojunior/" target="_blank"
                >
                    <AiFillLinkedin size={36} title="Linkedin"/>
                </Link>

                <Link className="hover:text-blue-500 duration-200" href="https://www.instagram.com/juninho15830/" target="_blank" >
                    <AiFillInstagram size={36} title="Instagram"/>
                </Link>

                <Link className="hover:text-blue-500 duration-200" href="https://github.com/juninho15830" target="_blank">
                    <AiFillGithub size={36} title="Github"/>
                </Link>

                <Link className="hover:text-blue-500 duration-200" href="https://t.me/Juninho15830" target="_blank">
                    <SiTelegram size={32} title="Telegram"/>
                </Link>

                <Link className="hover:text-blue-500 duration-200" href="https://wa.me/5517996234888" target="_blank">
                    <IoLogoWhatsapp size={36} title="Whatsapp"/>
                </Link>
                
                <Link className="hover:text-blue-500 duration-200" href="mailto:juninho15830@gmail.com" target="_blank" >
                    <SiGmail size={36} title="Gmail"/>
                </Link>
            </div>
        </div>
        <div className="wrapper mb-8 text-xs">
            <span>Copyright &copy; 2024 Todos os Direitos Reservados Jair Redigolo Junior | Desenvolvedor Web - Jair Redigolo Junior</span>
        </div>
    </div>
  </footer>
)
}