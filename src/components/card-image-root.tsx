import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CardRootLayot {
  content?: string;
  paragraphy?: ReactNode;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export function CardImageRoot({
  content,
  paragraphy,
  imageSrc,
  imageAlt = "Card image",
  imageWidth = 100,
  imageHeight = 100,
}: CardRootLayot) {
  return (
    <Card className="relative flex flex-row items-center py-8 justify-between">
      <div className="flex flex-col gap-2">
        <CardContent className="font-heading text-sm text-gray-600 leading-none dark:text-gray-200">
          {content}
        </CardContent>

        <CardFooter className="font-heading text-2xl font-semibold text-gray-950 dark:text-gray-200 leading-none">
          {paragraphy}
        </CardFooter>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="rounded-md object-cover absolute top-0 right-8"
          />
        )}
      </div>
    </Card>
  );
}
