import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";
import axios from "axios";
import { UserCard } from "./UserCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Company {
  title: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: Company;
}

interface APIResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const fetchUsers = async ({ pageParam = 0 }): Promise<APIResponse> => {
  const { data } = await axios.get(
    `https://tech-test.raintor.com/user/GetUsersList?take=10&skip=${pageParam}`
  );
  return data;
};

export const InfiniteScrollFeed: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const nextSkip = pages.length * 10;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastUserElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const allUsers = data?.pages.flatMap((page) => page.users) || [];

  if (isLoading) {
    return (
      <div className="p-4">
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} height={100} className="mb-4" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 p-4">
        Something went wrong: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <List
        height={600}
        itemCount={allUsers.length}
        itemSize={120}
        width="100%"
      >
        {({ index, style }) => {
          const user = allUsers[index];
          const refProp =
            index === allUsers.length - 1 ? { ref: lastUserElementRef } : {};
          return (
            <div style={style} {...refProp}>
              <UserCard user={user} />
            </div>
          );
        }}
      </List>
      {isFetchingNextPage && (
        <div className="text-center mt-4">Loading more users...</div>
      )}
    </div>
  );
};
