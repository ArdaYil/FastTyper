import { useQuery } from "@tanstack/react-query";
import wordService from "../services/wordService";

const useWords = () =>
  useQuery({
    queryKey: ["words"],
    queryFn: () => wordService.getAll(),
    refetchOnWindowFocus: false,
  });

export default useWords;
