"use client";

import { useState } from "react";

const suggestions = [
  {
    username: "terylucas",
    name: "Tery Lucas",
    image: "https://i.pravatar.cc/150?img=12",
    followedBy: "Followed by john + 2 more",
  },
  {
    username: "lauramatthews",
    name: "Laura Matthews",
    image: "https://i.pravatar.cc/150?img=32",
    followedBy: "Followed by mike + 3 more",
  },
  {
    username: "harryprescott",
    name: "Harry Prescott",
    image: "https://i.pravatar.cc/150?img=11",
    followedBy: "Followed by alex + 1 more",
  },
  {
    username: "ednamarc",
    name: "Edna Marc",
    image: "https://i.pravatar.cc/150?img=47",
    followedBy: "Followed by david + 4 more",
  },
  {
    username: "christina",
    name: "Christina Sterling",
    image: "https://i.pravatar.cc/150?img=44",
    followedBy: "Followed by sara + 2 more",
  },
];

export default function Sidebar() {
  const [following, setFollowing] = useState([]);

  const toggleFollow = (username) => {
    if (following.includes(username)) {
      setFollowing(
        following.filter((user) => user !== username)
      );
    } else {
      setFollowing([...following, username]);
    }
  };

  return (
    <aside className="hidden w-[300px] shrink-0 lg:block">

      {/* ================================= */}
      {/* YOUR PROFILE */}
      {/* ================================= */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">

          {/* Your Profile Image */}
          <img
            src="/myphoto.jpg"
            alt="Your profile"
            className="h-12 w-12 rounded-full object-cover"
          />

          {/* Username + Name */}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-900">
              Bad Boy
            </p>

            <p className="truncate text-sm text-gray-500">
              Rocky
            </p>
          </div>
        </div>

        {/* Switch */}
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* ================================= */}
      {/* SUGGESTIONS HEADER */}
      {/* ================================= */}

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </p>

        <button className="text-xs font-semibold text-gray-900 hover:text-gray-500">
          See All
        </button>
      </div>

      {/* ================================= */}
      {/* SUGGESTIONS */}
      {/* ================================= */}

      <div className="mt-4 space-y-4">
        {suggestions.map((person) => {
          const isFollowing = following.includes(
            person.username
          );

          return (
            <div
              key={person.username}
              className="flex items-center justify-between"
            >

              {/* Person */}
              <div className="flex min-w-0 items-center gap-3">

                <img
                  src={person.image}
                  alt={person.username}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {person.username}
                  </p>

                  <p className="truncate text-[11px] text-gray-400">
                    {person.followedBy}
                  </p>
                </div>
              </div>

              {/* Follow Button */}
              <button
                onClick={() =>
                  toggleFollow(person.username)
                }
                className={`ml-2 text-xs font-semibold ${
                  isFollowing
                    ? "text-gray-500"
                    : "text-blue-500"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}

      <div className="mt-8">
        <p className="text-[11px] leading-5 text-gray-400">
          About · Help · Press · API · Jobs · Privacy ·
          Terms · Locations · Language
        </p>

        <p className="mt-5 text-[10px] uppercase text-gray-400">
          © 2026 Instagram Clone
        </p>
      </div>
    </aside>
  );
}
