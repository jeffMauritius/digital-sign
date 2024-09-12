import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center justify-end">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground">
          Digital-sign@2024{" "}
        </p>
      </div>
    </div>
  );
}
