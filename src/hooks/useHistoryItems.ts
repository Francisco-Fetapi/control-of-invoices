import { HistoryContext, HistoryProviderProps } from "context/HistoryProvider";
import { useContext } from "react";

export default function useHistoryItems() {
  const resources = useContext(HistoryContext) as HistoryProviderProps;

  return resources;
}
