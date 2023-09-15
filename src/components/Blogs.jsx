import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-y-10 my-4">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.index} className="w-11/12 max-w-2xl mx-auto">
            <p className="font-bold text-lg">{post.act}</p>
            <p className="mt-4 mb-2">{post.prompt}</p>
          </div>
        ))
      )}
    </div>
  );
}
