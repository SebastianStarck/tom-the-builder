import { DDdragonAssetCollection } from "./types";

export class RequestService {
  public static async get<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("REQUEST_FAILED");
    }

    return response.json().then((data) => data);
  }

  public static getDDragonAssetCollection<T>(
    collection: DDdragonAssetCollection
  ): Promise<T[]> {
    const url = `http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/${collection}.json`;

    return RequestService.get<T[]>(url);
  }
}
