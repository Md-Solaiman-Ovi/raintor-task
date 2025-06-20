import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-5">
      <h1 className="font-bold text-3xl">Welcome to Raintor Tasks App</h1>
      <div className="flex gap-5 items-center">
        <button
          className="px-4 bg-teal-500 rounded py-2 text-center text-white hover:bg-teal-600"
          onClick={() => navigate("/task1")}
        >
          Task 1
        </button>
        <button
          className="px-4 bg-teal-500 rounded py-2 text-center text-white hover:bg-teal-600"
          onClick={() => navigate("/task2")}
        >
          Task 2
        </button>
        <button
          className="px-4 bg-teal-500 rounded py-2 text-center text-white hover:bg-teal-600"
          onClick={() => navigate("/task3")}
        >
          Task 3
        </button>
      </div>
    </div>
  );
}
