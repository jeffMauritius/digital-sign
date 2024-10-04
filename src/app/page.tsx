import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <Image
              src={"/logo-icon.png"}
              alt={""}
              width={100}
              height={100}
              className="pb-5"
            />
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              DSign
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              minima voluptatem architecto error ut, asperiores similique
              repellat. Nesciunt maiores, vitae, in, provident architecto nobis
              voluptatibus corrupti rem sunt ducimus dolores!
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/documents">
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
        </div>
      </main>
    </div>
  )
}
