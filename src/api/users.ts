export interface UserList {
  name: string;
  email: string;
  id: number;
}

export const fetchUser = async (): Promise<UserList[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  return res.json()
}

export const addUser = async (payload: UserList): Promise<UserList> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}