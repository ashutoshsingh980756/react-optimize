import { useQuery } from "@tanstack/react-query";

import { fetchUser } from "../api/users";
import type {UserList} from "../api/users"
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
    retry: false,
  });
  
  if(isLoading) return <Spinner/>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  return (
    <>
      
      {data?.map((user: UserList) =>  
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      )}
     </>  
  )
} 