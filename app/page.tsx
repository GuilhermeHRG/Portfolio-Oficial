"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, ExternalLink, Github, Linkedin, Mail, Globe } from "lucide-react"
import ProfileHeader from "@/components/profile-header"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { useMobile } from "@/hooks/use-mobile"
import geoparque from '../public/images/geoparque.jpg'
import taskmaster from '../public/images/taskmaster.jpg'
import timework from '../public/images/timework.jpg'
import bot from '../public/images/bot.jpg'
import Footer from "@/components/footer"

export default function Home() {
  const isMobile = useMobile()

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-gray-900">
      <ProfileHeader onMenuClick={() => { }} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Only for desktop */}
          {!isMobile && (
            <div className="w-80 space-y-4">
              {/* Intro Card */}


              {/* Skills */}
              <Card className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-3 text-gray-900">Habilidades</h2>
                <div className="flex flex-wrap gap-2">

                  <SkillBadge name="React" //@ts-ignore 
                    variant="facebook" />
                  <SkillBadge name="TypeScript" //@ts-ignore
                    variant="facebook" />
                  <SkillBadge name="Next.js" //@ts-ignore
                    variant="facebook" />
                  <SkillBadge name="Tailwind CSS" //@ts-ignore 
                    variant="facebook" />
                  <SkillBadge name="Node.js" //@ts-ignore
                    variant="facebook" />
                  <SkillBadge name="Git" //@ts-ignore
                    variant="facebook" />
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-3 text-gray-900">Redes Sociais</h2>
                <div className="space-y-2">
                  <Link href="https://github.com/GuilhermeHRG" target="_blank">
                    <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100">
                      <Github className="h-5 w-5" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/seu-linkedin" target="_blank">
                    <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:seu@email.com">
                    <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100">
                      <Mail className="h-5 w-5" />
                      Email
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">


            {/* Featured Project */}
            <Card className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={geoparque}
                  alt="Site do Geoparque Caiuá"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold">Site do Geoparque Caiuá</h2>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Publicado
                  </Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Site institucional do Geoparque Caiuá para a Prefeitura Municipal de Cruzeiro do Oeste PR.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Características:</h4>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Design responsivo para todos os dispositivos</li>
                    <li>Animações suaves para melhor experiência do usuário</li>
                    <li>Integração com redes sociais</li>
                    <li>Performance otimizada com Vite e React</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                      Vite
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href="https://github.com/GuilhermeHRG/Geoparque-Caiua" target="_blank" className="flex-1">
                    <Button variant="outline" className="w-full bg-white hover:bg-gray-50 text-gray-900">
                      <Github className="h-4 w-4 mr-2 " /> Código
                    </Button>
                  </Link>
                  <Link href="https://www.geoparquecaiua.org" target="_blank" className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Globe className="h-4 w-4 mr-2" /> Visitar
                    </Button>
                  </Link>
                </div>
              </div>


            </Card>

            {/* Projects Tabs */}
            <Card id="projetos" className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900">
                    <Code2 size={20} />
                    Projetos no GitHub
                  </h2>
                  <Link href="https://github.com/GuilhermeHRG?tab=repositories" target="_blank">
                    <Button variant="ghost" className="text-blue-600 p-0 h-auto hover:bg-blue-50">
                      Ver todos <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="bg-gray-100 mb-4">
                    <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      Todos
                    </TabsTrigger>
                    <TabsTrigger value="typescript" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      TypeScript
                    </TabsTrigger>
                    <TabsTrigger value="javascript" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      JavaScript
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Geoparque-Caiua"
                        description="Landing page para o Geoparque Caiuá usando NextJs"
                        //@ts-ignore
                        image={geoparque}
                        tags={["NextJs", "TypeScript", "Landing Page"]}
                        githubUrl="https://github.com/GuilhermeHRG/Geoparque-Caiua"
                        variant="facebook"
                      />
                      <ProjectCard
                        title="Task-Master"
                        description="Sistema Kanban para gerenciar projetos"
                        //@ts-ignore
                        image={taskmaster}
                        tags={["TypeScript", "React", "Kanban"]}
                        githubUrl="https://github.com/GuilhermeHRG/Task-Master"
                        variant="facebook"
                      />
                      <ProjectCard
                        title="TimeWork"
                        description="Extensão para VS Code"
                        //@ts-ignore
                        image={timework}
                        tags={["TypeScript", "VS Code", "Extensão"]}
                        githubUrl="https://github.com/GuilhermeHRG/TimeWork"
                        variant="facebook"
                      />
                      <ProjectCard
                        title="Bot--Reminder"
                        description="Bot para WhatsApp"
                        //@ts-ignore
                        image={bot}
                        tags={["JavaScript", "WhatsApp", "Automação"]}
                        githubUrl="https://github.com/GuilhermeHRG/Bot--Reminder"
                        variant="facebook"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="typescript" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Geoparque-Caiua"
                        description="Landing page para o Geoparque Caiuá usando NextJs"
                        //@ts-ignore
                        image={geoparque}
                        tags={["NextJs", "TypeScript", "Landing Page"]}
                        githubUrl="https://github.com/GuilhermeHRG/Geoparque-Caiua"
                        variant="facebook"
                      />
                      <ProjectCard
                        title="Task-Master"
                        description="Sistema Kanban para gerenciar projetos"
                        //@ts-ignore
                        image={taskmaster}
                        tags={["TypeScript", "React", "Kanban"]}
                        githubUrl="https://github.com/GuilhermeHRG/Task-Master"
                        variant="facebook"
                      />
                      <ProjectCard
                        title="TimeWork"
                        description="Extensão para VS Code"
                        //@ts-ignore
                        image={timework}
                        tags={["TypeScript", "VS Code", "Extensão"]}
                        githubUrl="https://github.com/GuilhermeHRG/TimeWork"
                        variant="facebook"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="javascript" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Bot--Reminder"
                        description="Bot para WhatsApp"
                        //@ts-ignore
                        image={bot}
                        tags={["JavaScript", "WhatsApp", "Automação"]}
                        githubUrl="https://github.com/GuilhermeHRG/Bot--Reminder"
                        variant="facebook"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}