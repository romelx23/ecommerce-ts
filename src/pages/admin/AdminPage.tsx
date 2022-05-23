import React from "react";
import { LayoutProfile } from "../../components/layout/LayoutProfile";

export const AdminPage = () => {
  return (
    <LayoutProfile>
      <div className="p-2 flex flex-wrap h-full">
        <div className="w-72 h-44 bg-indigo-600 text-white rounded-2xl flex items-center p-5">
          <h1 className="text-center text-2xl">Admin Page</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </LayoutProfile>
  );
};
