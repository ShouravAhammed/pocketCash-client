
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
  const axiosCommon = useAxiosCommon();
  const { currentUser, loading } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", currentUser?.email],
    enabled: !loading && !!currentUser?.email,
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/role/${currentUser?.email}`);
      return data;
    },
  });
  return { role, isLoading };
};

export default useRole;