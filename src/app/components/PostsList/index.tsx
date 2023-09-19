import React from "react";

interface IProps {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

const PostsList = ({ posts }: IProps): JSX.Element => (
  <ul className="flex flex-wrap gap-2 justify-center mt-4">
    {posts.map(({ id, title, body }) => {
      return (
        <li
          key={id}
          className=" bg-green-300 p-1 rounded-md text-orange-700 w-80 flex flex-col gap-2"
        >
          <h4 className="text-xl font-semibold text-center">{title}</h4>
          <p className="mt-auto">{body}</p>
        </li>
      );
    })}
  </ul>
);

export default PostsList;
