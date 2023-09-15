import { createContext, useState } from "react";
import { prompts } from "../pages/Prompts";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState(prompts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
