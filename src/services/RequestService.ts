import { DDdragonAssetCollection } from "../common/types";

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("REQUEST_FAILED");
  }

  return response.json().then((data) => data);
}

export async function getDDragonAssetCollection<T>(
  collection: DDdragonAssetCollection
): Promise<T[]> {
  const url = `http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/${collection}.json`;

  return get<T[]>(url);
}
