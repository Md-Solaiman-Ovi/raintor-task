import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfiniteScrollFeed } from "../components/InfiniteUserFeed";

const queryClient = new QueryClient();

export default function Task3() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <div className="pt-10 text-center  ">
        <h2 className="font-bold">This is Task 3 Page</h2>
        <button
          className="px-4 bg-red-500 rounded py-2 text-center text-white hover:bg-red-600"
          onClick={() => navigate("/")}
          style={{ marginTop: "20px" }}
        >
          Back to Home
        </button>
      </div>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold text-center py-6">User Feed</h1>
          <InfiniteScrollFeed />
        </div>
      </QueryClientProvider>
    </div>
  );
}
