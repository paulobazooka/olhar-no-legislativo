import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Buscador } from "@/components/buscador";

export default async function Home() {

  return (
    <main className="h-screen w-full">
      <Card className="w-[400px] mx-auto mt-20">
        <CardHeader>
          <CardTitle className="flex mx-auto">
            <Image src="logo.svg" alt="Logo" width={130} height={130} />
          </CardTitle>
          <CardDescription className="flex mx-auto font-bold text-sky-600">Olhar no Legislativo</CardDescription>
        </CardHeader>
        <CardContent>
          <Buscador></Buscador>
        </CardContent>
        <CardFooter className="flex mx-auto">
        </CardFooter>
      </Card>
    </main>
  );
}
