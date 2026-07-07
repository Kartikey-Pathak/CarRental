"use client";

export default function HoverButton({ children }) {
  return (
    <button
      onMouseEnter={() => window.cursor?.enter()}
      onMouseLeave={() => window.cursor?.leave()}
      className="bg-[#FF3600] cursor-pointer hover:bg-[#FF3600]/60 active:bg-[#FF3600]/60 transition text-white font-semibold px-6 py-3 rounded-full"
    >
      {children}
    </button>
  );
}