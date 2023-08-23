"use client";

import { useItem } from "@/hooks/useItem";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("");
  const [isInProgress, setIsInProgress] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-main-background">
      <Logo isDark size={100} className="mb-10" />
      <p
        style={{
          color: "var(--text-primary, #212121)",
          textAlign: "center",
          fontFamily: "Lato",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "36px;",
        }}
      >
        {`Hey, it's Quail. How can I assist you with your project today?`}
      </p>
      <Input
        className="w-3/5 h-32 mt-4 mb-6"
        value={value}
        onChange={setValue}
        placeholder="E.g., I can help create a modern homepage design or a draft for a mobile app interface..."
      />
      <Button
        label="Let's go"
        onClick={handleButtonClick}
        icon={<ArrowRight />}
      />
    </div>
  );

  async function handleButtonClick() {
    try {
      setIsInProgress(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/edit/untitled");
    } catch (error) {}
    addItem({ id: items.length.toString(), name: "new item" });
  }
}
