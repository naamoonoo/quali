"use client";

import { useItem } from "@/hooks/useItem";
import { useParams, useRouter } from "next/navigation";

export default function Item() {
  const { removeItem } = useItem();
  const router = useRouter();
  const params = useParams();
  const itemId = params?.id as string;

  return (
    <div>
      <button onClick={removeCurrentItem}>remove item</button>
    </div>
  );

  function removeCurrentItem() {
    removeItem(itemId);
    router.push("/");
  }
}
