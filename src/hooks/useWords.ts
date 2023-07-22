import { useQuery } from "@tanstack/react-query";
import wordService from "../services/wordService";
import ms from "ms";

const useWords = () =>
  useQuery({
    queryKey: ["words"],
    queryFn: () => wordService.getAll(),
    refetchOnWindowFocus: false,
    staleTime: ms("1d"),
  });

export default useWords;
