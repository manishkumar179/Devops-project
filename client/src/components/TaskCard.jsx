
"use client";

import { useState } from "react";
import { formatDate } from "../utils/dateUtils";

const TaskCard = ({ task, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setIsDeleting(true);
      try {
        await onDelete(task._id);
      } catch (error) {
        console.error("Error deleting task:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="mb-3 break-words text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-indigo-700">
            {task.title}
          </h3>

          <p className="mb-5 break-words text-sm leading-7 text-slate-600">
            {task.description}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors duration-200 group-hover:border-indigo-100 group-hover:bg-indigo-50/70">
            <svg
              className="h-4 w-4 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Created {formatDate(task.createdAt)}</span>
          </div>
        </div>

        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="shrink-0 rounded-xl border border-red-100 bg-red-50/80 p-2.5 text-red-500 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-red-200/60 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          title="Delete task"
        >
          {isDeleting ? (
            <svg
              className="h-5 w-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
