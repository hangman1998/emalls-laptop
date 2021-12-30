import React from "react";

const LittlePages = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {[...Array(totalPages).keys()].map((i) => {
        if (i + 1 === page) {
          return (
            <div
              className="px-2 py-1 border rounded-md m-2 bg-slate-600 font-bold text-lg"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </div>
          );
        } else {
          return (
            <div
              className="px-2 py-1 border rounded-md m-2 hover:bg-slate-400 font-bold text-lg"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </div>
          );
        }
      })}
    </div>
  );
};

export default LittlePages;
