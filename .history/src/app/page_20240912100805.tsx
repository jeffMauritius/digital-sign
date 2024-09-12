import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <Image src={"/logo.png"} alt={"logo"} width={200} height={50} />
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://google.com">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Digital signature
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              minima voluptatem architecto error ut, asperiores similique
              repellat. Nesciunt maiores, vitae, in, provident architecto nobis
              voluptatibus corrupti rem sunt ducimus dolores!
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Get started for free
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="http://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </Link>
              </Button>
            </div>
          </section>
          <div className="w-full flex justify-center relative">
            <Image
              src="/digital.png"
              width={400}
              height={400}
              alt="demo"
              priority
              className="rounded-xl shadow-sm dark:hidden"
            />
            <Image
              src="/digital.png"
              width={400}
              height={400}
              alt="demo-dark"
              priority
              className="rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
