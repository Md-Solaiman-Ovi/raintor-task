const ErrorFallback = ({ error }: { error: unknown }) => (
  <div className="text-center text-red-500 mt-10">
    <h1 className="text-xl font-semibold">Something went wrong!</h1>
    <p>{String(error)}</p>
  </div>
);
export default ErrorFallback;
