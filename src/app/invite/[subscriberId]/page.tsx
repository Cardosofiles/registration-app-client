import { IconLink } from "@tabler/icons-react";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import Image from "next/image";

import { CardImageRoot } from "@/components/card-image-root";
import { CardRankingRoot } from "@/components/card-ranking-root";
import { Input } from "@/components/ui/input";

import devStage from "@/assets/logo.svg";
import medalCooper from "@/assets/medal-cooper.svg";
import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";
import { CopyButton } from "@/components/copy-button";

interface InvitePageProps {
  params: Promise<{
    subscriberId: string;
  }>;
}

export default async function Invite(props: InvitePageProps) {
  const { subscriberId } = await props.params;
  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

  return (
    <div className="h-[92vh] flex flex-col items-center justify-between md:flex-row gap-16 px-5 md:px-40">
      <div className="flex flex-col pt-3 gap-10 w-full max-w-[550px]">
        <Image src={devStage} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2 flex flex-col">
          <h1 className="text-4xl font-semibold font-heading to-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 ">
            Para entrar no evento, acesse o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-blue-500 text-xl font-heading font-semibold leading-none">
              Indique e ganhe!
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Convide mais pessoas e concorra a prêmios! Compartilhe o link e
              acompanhe as inscrições:
            </p>
          </div>

          <div className="group flex flex-row items-center gap-2 border rounded-lg focus-within:border-gray-100">
            <span className="text-gray-400 group-focus-within:text-gray-100 ml-1">
              <IconLink />
            </span>

            <Input
              className="border-none ring-0 focus-visible:ring-0 focus:ring-0 outline-none focus:outline-none flex-1"
              type="text"
              placeholder={inviteLink}
              readOnly
            />

            <CopyButton inviteLink={inviteLink} />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <CardRankingRoot
              icon={<MousePointerClick size={20} className="text-purple-800" />}
              content="902"
              link="Acessos ao link"
            />

            <CardRankingRoot
              icon={<BadgeCheck size={20} className="text-purple-800" />}
              content="875"
              link="Inscrições feitas"
            />

            <CardRankingRoot
              icon={<Medal size={18} className="text-purple-800" />}
              content="3º"
              link="Posição no ranking"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>

        <div className="flex flex-col gap-3">
          <CardImageRoot
            content="1º | João Batista"
            paragraphy="1030"
            imageSrc={medalGold}
            imageAlt="medal-gold"
            imageHeight={70}
            imageWidth={50}
          />

          <CardImageRoot
            content="1º | João Batista"
            paragraphy="1030"
            imageSrc={medalSilver}
            imageAlt="medal-silver"
            imageHeight={70}
            imageWidth={50}
          />

          <CardImageRoot
            content="1º | João Batista"
            paragraphy="1030"
            imageSrc={medalCooper}
            imageAlt="medal-cooper"
            imageHeight={70}
            imageWidth={50}
          />
        </div>
      </div>
    </div>
  );
}
