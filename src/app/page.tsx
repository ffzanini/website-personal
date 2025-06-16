"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { useTranslation } from "@/context";
import { Ascii, RichTextViewer, Wrapper } from "@/components";
import { coffeAscii } from "@/constants/ascii";
import { getBrowserLanguage } from "@/lib/utils";

export default function PricipalPage() {
  const { translations, setLocation } = useTranslation();

  const initialLanguage = getBrowserLanguage();

  useEffect(() => {
    if (initialLanguage === "pt") {
      setLocation("pt");
    } else {
      setLocation("en");
    }
  }, [initialLanguage, setLocation]);

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Image
          src="/images/me-desenho.jpeg"
          alt="Profile photo"
          width={180}
          height={180}
          className="rounded-full border border-gray-900 dark:border-gray-50"
        />
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <h2>{translations.home.name}</h2>
          <h3>{translations.home.roles}</h3>
          <div className="flex flex-col items-center justify-center 2xl:text-center gap-6 pt-6">
            <RichTextViewer content={translations.home.description} />
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row justify-center 2xl:justify-center gap-4 2xl:gap-12 p-6 items-center">
        <Link
          href="/about"
          className="w-full 2xl:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
        >
          <p className="text-white dark:text-black px-2 py-2 2xl:px-8 2xl:py-4">
            {translations.home.textButtonAbout}
          </p>
        </Link>
        <Link className="underline font-bold" href="/resume">
          {translations.home.textButtonResume}
        </Link>
      </div>
      <div className="hidden 2xl:flex">
        <Ascii className="absolute top-0 opacity-20 max-w-full max-h-full">
          {coffeAscii}
        </Ascii>
      </div>
    </Wrapper>
  );
}
