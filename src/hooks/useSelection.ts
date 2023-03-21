import { useState } from "react";

interface UseSelectionProps {
  items?: { id: string }[];
}

export default function useSelection({ items }: UseSelectionProps) {
  const [idSelecteds, setIdSelecteds] = useState<string[]>([]);
  const allIds = items?.map((item) => item.id) || [];
  const allItemsIsSelected = allIds.length === idSelecteds.length;
  const someItemsIsSelected = idSelecteds.length > 0 && !allItemsIsSelected;
  const toggleRow = (id: string) =>
    setIdSelecteds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setIdSelecteds((current) => {
      if (allItemsIsSelected) {
        return [];
      }
      return allIds;
    });

  return {
    allIds,
    idSelecteds,
    someItemsIsSelected,
    toggleRow,
    toggleAll,
    allItemsIsSelected,
  };
}
