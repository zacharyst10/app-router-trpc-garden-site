"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function DeletePostButton({ postId }: { postId: number }) {
  const router = useRouter();

  const deletePost = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh(); // Refresh the page to reflect the deletion
    },
  });

  const handleDelete = () => {
    deletePost.mutate({ postId });
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="rounded-full bg-red-500 p-2 text-white transition hover:bg-red-700"
        disabled={deletePost.isLoading}
        aria-label="Delete Post"
      >
        X
      </button>
    </>
  );
}
