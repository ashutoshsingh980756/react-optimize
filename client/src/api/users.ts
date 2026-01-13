export interface UserList {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

interface CreateUserResponse {
  message: string;
  data: UserList;
}

export const fetchUser = async (): Promise<UserList[]> => {
  const res = await fetch('/api/users')

  return res.json()
}

export const addUser = async (payload: UserList): Promise<CreateUserResponse> => {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  const data:CreateUserResponse = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  } else {
    return data;
  }
};