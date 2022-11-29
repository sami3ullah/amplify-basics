import React from "react";

const InitialsPlaceholder = ({ initials }: { initials: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-darkgrey">
      <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
        {initials}
      </span>
    </div>
  );
};

export default InitialsPlaceholder;
