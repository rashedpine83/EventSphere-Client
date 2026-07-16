import { serverFetch } from "../core/server";

export interface Category {
  _id: string;
  totalEvents: number;
}

interface CategoryResponse {
  success: boolean;
  categories: Category[];
}

export const getCategories = async (): Promise<CategoryResponse> => {
  return await serverFetch("/api/categories");
};
