const SkeletonCard = ({ count = 5 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-100 animate-pulse p-4 m-2 rounded-lg flex gap-4"
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 w-3/4 rounded" />
            <div className="h-4 bg-gray-300 w-1/2 rounded" />
            <div className="h-4 bg-gray-300 w-1/4 rounded" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
