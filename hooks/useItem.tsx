import { useGlobalState } from "./useGlobalState";

interface Item {
  id: string;
  name: string;
}

export const useItem = () => {
  const [items, setItems] = useGlobalState<Item[]>("item", [
    { id: "0", name: "item 0" },
  ]);

  const addItem = (newItem: Item) => {
    console.log({ newItem });
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, addItem, removeItem };
};
