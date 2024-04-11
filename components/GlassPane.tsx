import React from "react";

function GlassPane({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass dark:bg-blue-950/75 rounded-2xl border-solid border-1 border-gray-200 purple-shadow mb-6">
      <div className="flex items-center">{children}</div>
    </div>
  );
}

export default GlassPane;
