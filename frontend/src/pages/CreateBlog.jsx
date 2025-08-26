import React from "react";
import {
  Edit3,
  Trash2,
  CalendarDays,
  User,
  Eye,
  MessageSquare,
  ArrowRight,
  FileText,
} from "lucide-react";


export default function BlogCard() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-gray-100 shadow-xl transition-transform hover:-translate-y-1">
        {/* Glow border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [mask-image:radial-gradient(180px_80px_at_10%_0%,black,transparent)]" />

        {/* Header inside card */}
        <div className="p-6 pb-3">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
              <FileText className="h-5 w-5 text-gray-100" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore unde cupiditate similique quaerat, blanditiis nisi dolorum fugit sunt, 
              </h3>
              <p className="mt-1 text-sm text-gray-300 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi nisi nesciunt voluptas quisquam distinctio, iste est beatae explicabo, eaque fugit, optio illum facilis.
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" /> <span>Wajahat Kamal</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> <span>25 august 2025</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Eye className="h-4 w-4" />{" "}
              <span>25</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> <span>comments</span>
            </span>
          </div>
        </div>

    

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-white/8 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <button
              // onClick={onEdit}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium bg-white/6 border border-white/8 hover:bg-white/10"
            >
              <Edit3 className="h-4 w-4" /> Edit
            </button>

            <button
              // onClick={onDelete}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium bg-transparent border border-red-600/30 text-red-300 hover:bg-red-600/8"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>

          <button
            // onClick={onReadMore}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
