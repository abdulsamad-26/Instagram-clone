"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const stories = [
  {
    username: "Your story",
    image: "/myphoto.jpg",
    own: true,
  },
  {
    username: "terylucas",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    username: "lauramatthews",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    username: "harryprescott",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    username: "ednamarc",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    username: "christina",
    image: "https://i.pravatar.cc/150?img=44",
  },
  {
    username: "johnsmith",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    username: "amanda",
    image: "https://i.pravatar.cc/150?img=25",
  },
  {
    username: "michael",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    username: "sophia",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

export default function Stories() {
  const storiesRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollStories = (direction) => {
    if (!storiesRef.current) return;

    const scrollAmount = 300;

    storiesRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      updateArrows();
    }, 400);
  };

  const updateArrows = () => {
    if (!storiesRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      storiesRef.current;

    setShowLeft(scrollLeft > 10);

    setShowRight(
      scrollLeft + clientWidth < scrollWidth - 10
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white">

      {/* ================= STORIES ================= */}

      <div
        ref={storiesRef}
        onScroll={updateArrows}
        className="flex gap-5 overflow-x-auto px-5 py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {stories.map((story, index) => (
          <button
            key={`${story.username}-${index}`}
            className="relative flex min-w-[62px] flex-col items-center"
          >
            {/* Story Ring */}
            <div
              className={
                story.own
                  ? "relative rounded-full bg-gray-200 p-[2px]"
                  : "rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]"
              }
            >
              <div className="rounded-full bg-white p-[2px]">
                <img
                  src={story.image}
                  alt={story.username}
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Your Story Plus */}
            {story.own && (
              <span className="absolute bottom-[19px] right-[-2px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
                <Plus size={13} strokeWidth={3} />
              </span>
            )}

            {/* Username */}
            <span className="mt-1 w-[65px] truncate text-center text-xs text-gray-700">
              {story.username}
            </span>
          </button>
        ))}
      </div>

      {/* ================= LEFT ARROW ================= */}

      {showLeft && (
        <button
          onClick={() => scrollStories("left")}
          className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
          aria-label="Previous stories"
        >
          <ChevronLeft
            size={18}
            strokeWidth={2.5}
          />
        </button>
      )}

      {/* ================= RIGHT ARROW ================= */}

      {showRight && (
        <button
          onClick={() => scrollStories("right")}
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
          aria-label="Next stories"
        >
          <ChevronRight
            size={18}
            strokeWidth={2.5}
          />
        </button>
      )}
    </div>
  );
}
