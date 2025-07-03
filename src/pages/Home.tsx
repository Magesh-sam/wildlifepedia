import React from "react";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div>
      <nav className="flex justify-around">
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ThemeToggle />
      </nav>
      <main className="flex h-screen items-center justify-center">
        <h1 className="text-4xl">Wildlifepedia</h1>
      </main>
    </div>
  );
}

export default Home;
