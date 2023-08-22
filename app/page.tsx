"use client";

import { useItem } from "@/hooks/useItem";
import Link from "next/link";

export default function Home() {
  const { items, addItem } = useItem();

  return (
    <div>
      <h1>quali</h1>
      <div>
        {items.map((item) => (
          <Link href={`/item/${item.id}`} key={item.id}>
            {item.id}-{item.name}
          </Link>
        ))}
      </div>
      <button onClick={addNewItem}>add item</button>
    </div>
  );

  function addNewItem() {
    console.log("hello");
    addItem({ id: items.length.toString(), name: "new item" });
  }
}
