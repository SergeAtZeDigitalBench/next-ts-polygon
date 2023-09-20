"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import PostsList from "@/components/PostsList";
import { IPost } from "@/types";

async function getPosts() {
  const res = await fetch("/api/posts");
  const posts = (await res.json()) as IPost[];
  return posts;
}

interface IProps {
  [x: string]: unknown;
}

const Posts = ({}: IProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const { data } = useQuery({
    queryKey: ["hydrate-posts"],
    queryFn: () => getPosts(),
  });

  return (
    <div>
      <div className="flex justify-center gap-4 my-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className=" bg-green-600 p-1 w-8 h-8 rounded-sm"
        >
          +
        </button>
        <button
          onClick={() => setCount((c) => c - 1)}
          className=" bg-green-600 p-1 w-8 h-8 rounded-sm"
        >
          -
        </button>
      </div>
      <h4 className="p-2 font-semibold text-lg text-center">Count: {count}</h4>

      {data && <PostsList posts={data} />}
    </div>
  );
};

export default Posts;
