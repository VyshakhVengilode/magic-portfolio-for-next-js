'use client';

import React from "react";
import CrosswordPuzzle from "../components/CrosswordPuzzle"; // Adjust path if your structure is different

export default function PublicationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Crossy Words</h1>
      <hr className="my-8" />
      <CrosswordPuzzle />
    </div>
  );
}
