"use client";

import { useItem } from "@/hooks/useItem";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ArrowRight } from "@/components/icons/ArrowRight";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-main-background">
      <Logo isDark size={100} className="mb-10" />
      <p
        style={{
          color: "var(--text-primary, #212121)",
          textAlign: "center",
          /* header/large */
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
        onClick={() => alert("hello")}
        icon={<ArrowRight />}
      />
    </div>
  );

  function addNewItem() {
    console.log("hello");
    addItem({ id: items.length.toString(), name: "new item" });
  }
}
