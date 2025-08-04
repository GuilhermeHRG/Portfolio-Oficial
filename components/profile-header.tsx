"use client";

import Image from "next/image";
import background from "../public/images/bg.gif";
import { Card } from "./ui/card";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

interface ProfileHeaderProps {
  onMenuClick?: () => void;
}

export default function ProfileHeader({ onMenuClick }: ProfileHeaderProps) {
  return (
    <header className="w-full relative bg-[#f0f2f5]">
      {/* Top Header - Similar ao Facebook */}
      {/* <Header onMenuClick={onMenuClick} /> */}

      {/* Cover Photo - Like Facebook */}
      <div className="relative xl:h-[30vh] max-sm:h-[25vh] w-full bg-blue-600 overflow-hidden">
        <Image
          src={background}
          alt="Cover photo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/30 to-blue-900/50"></div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 relative z-999">
        {/* Profile Info Row */}
        <div className="flex flex-col md:flex-row max-sm:flex-row gap-6 -mt-16 md:-mt-18 relative z-10">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
              <Image
                src="https://github.com/GuilhermeHRG.png"
                alt="Profile picture"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
               
          </div>

          {/* Profile Actions - Like Facebook */}
          <div className="flex-1 flex flex-col md:flex-row max-sm:mt-20 max-sm:text-sm md:items-end max-sm:items-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-3xl font-bold text-gray-900">Guilherme Guelere</h1>
              <p className="text-gray-600">Desenvolvedor Front-end Jr</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">

               
              </div>
            </div>


          </div>
        </div>


      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Intro Card */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-white p-4 rounded-lg shadow-sm ">
              <h2 className="text-lg font-bold text-gray-900 mb-3 max-sm:text-center">Introdução</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Desenvolvedor Front-end</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Bacharel em Sistemas de Informação - IFPR</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Paraná, Brasil</span>
                </div>
              </div>
            </Card>
          </div>
          {/* Right Column - About */}
          <div className="lg:col-span-2 max-sm:text-center">
            <Card className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center max-sm:justify-center">
                <h2 className="text-lg font-bold text-gray-900 ">Sobre</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Desenvolvo interfaces modernas e responsivas utilizando React, TypeScript e outras tecnologias, sempre com foco em performance e na melhor experiência para o usuário. Apaixonado por criar soluções elegantes e eficientes.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
}


