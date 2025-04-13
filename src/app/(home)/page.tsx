import { Radio } from "lucide-react";
import Image from "next/image";

import devStage from "@/assets/logo.svg";
import { SubscriptionForm } from "@/components/subscription-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-[92vh] flex flex-col justify-center mt-40 md:mt-2 gap-16 px-5">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={devStage} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue-500">CodeCraft</span> Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <Card className="border-zinc-700 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center justify-between font-heading text-xl">
              Sobre o evento
              <div className="flex flex-row items-center gap-2 text-base">
                <Radio />
                AO VIVO
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              O CodeCraft Summit 2025 é um evento que visa promover a
              diversidade e incentivar a criatividade de desenvolvedores em todo
              o Brasil. O evento aborda temas como arquitetura de sistemas,
              desenvolvimento de software, evolução de tecnologias emergentes,
              com palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </CardContent>
        </Card>

        <SubscriptionForm />
      </div>
    </div>
  );
}
