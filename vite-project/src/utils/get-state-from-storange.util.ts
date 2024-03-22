import {ListItem} from "../types.ts";

export const STORAGE_KEY="classList"
export default function getStateFromStorage(): ListItem[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ||'[]')
}
