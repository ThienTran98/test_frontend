import React from "react";

export default function Button({ value, backgroundColor, color }) {
  return (
    <div
      className={`px-10 py-[15px] mr-5 ${backgroundColor} ${color} hover:opacity-70 cursor-pointer rounded-3xl border border-color-2 mt-[18px]`}
    >
      {value}
    </div>
  );
}
