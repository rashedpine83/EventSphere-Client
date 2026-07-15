export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

export interface UsersResponse {
  success: boolean;
  users: User[];
  totalUsers: number;
  totalPages: number;
  page: number;
}
