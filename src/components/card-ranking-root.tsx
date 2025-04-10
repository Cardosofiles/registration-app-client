import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface CardRootLayot {
  icon?: React.ReactNode;
  content?: string;
  link?: string;
}

export function CardRankingRoot({ icon, content, link }: CardRootLayot) {
  return (
    <Card className="relative gap-1 py-2">
      <CardHeader className="absolute top-1.5 left-0.5">{icon}</CardHeader>
      <div className="flex flex-col items-center justify-center">
        <CardContent className="font-heading">{content}</CardContent>
        <CardFooter className="text-xs">{link}</CardFooter>
      </div>
    </Card>
  );
}
