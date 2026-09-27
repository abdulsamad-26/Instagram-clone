"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile,
} from "lucide-react";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(1069);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  const handleComment = () => {
    if (!comment.trim()) return;

    alert(`Comment: ${comment}`);
    setComment("");
  };

  return (
    <article className="mt-6 w-full overflow-hidden border border-gray-200 bg-white">
      
      {/* ================= POST HEADER ================= */}
      <div className="flex h-[60px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          
          {/* Profile Picture */}
          <img
            src="/post.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />

          {/* Username */}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                terrylucas
              </span>

              <span className="text-gray-500">•</span>

              <span className="text-xs text-gray-500">
                1h
              </span>
            </div>
          </div>
        </div>

        {/* More Button */}
        <button
          className="text-gray-800 transition hover:text-gray-500"
          aria-label="More options"
        >
          <MoreHorizontal size={22} />
        </button>
      </div>

      {/* ================= POST IMAGE ================= */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src="/post.jpg"
          alt="Post"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="px-4 pt-3">

        <div className="flex items-center justify-between">
          
          {/* Left Actions */}
          <div className="flex items-center gap-4">

            {/* Like */}
            <button
              onClick={handleLike}
              aria-label="Like"
              className="transition hover:scale-105"
            >
              <Heart
                size={25}
                strokeWidth={2}
                className={
                  liked
                    ? "fill-red-500 text-red-500"
                    : "text-black"
                }
              />
            </button>

            {/* Comment */}
            <button
              aria-label="Comment"
              className="transition hover:scale-105"
            >
              <MessageCircle
                size={25}
                strokeWidth={2}
              />
            </button>

            {/* Share */}
            <button
              aria-label="Share"
              className="transition hover:scale-105"
            >
              <Send
                size={25}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* Save */}
          <button
            onClick={() => setSaved(!saved)}
            aria-label="Save"
            className="transition hover:scale-105"
          >
            <Bookmark
              size={25}
              strokeWidth={2}
              className={saved ? "fill-black text-black" : "text-black"}
            />
          </button>
        </div>

        {/* ================= LIKES ================= */}
        <p className="mt-3 text-sm font-semibold text-gray-900">
          {likes.toLocaleString()} likes
        </p>

        {/* ================= CAPTION ================= */}
        <p className="mt-1 text-sm leading-5 text-gray-900">
          <span className="font-semibold">
            terrylucas
          </span>{" "}
          Enjoying the moment ✨
        </p>

        {/* ================= VIEW COMMENTS ================= */}
        <button className="mt-1 text-sm text-gray-500">
          View all 100 comments
        </button>

        {/* ================= TIME ================= */}
        <p className="mt-2 text-[10px] uppercase tracking-wide text-gray-400">
          1 HOUR AGO
        </p>

        {/* ================= COMMENT BOX ================= */}
        <div className="mt-3 flex items-center gap-3 border-t border-gray-100 py-3">
          
          {/* Emoji */}
          <button
            aria-label="Emoji"
            className="text-gray-700"
          >
            <Smile size={21} />
          </button>

          {/* Input */}
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleComment();
              }
            }}
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />

          {/* Post Button */}
          <button
            onClick={handleComment}
            disabled={!comment.trim()}
            className="text-sm font-semibold text-blue-500 disabled:cursor-default disabled:text-blue-200"
          >
            Post
          </button>
        </div>
      </div>
    </article>
  );
}
