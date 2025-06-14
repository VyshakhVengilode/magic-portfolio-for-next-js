import { ThemeToggle } from "@/components/ThemeToggle";
import PersonalFavorites from "@/components/fav/PersonalFavorites";

export default function Page() {
  return (
    <>
      {/* Theme toggle button at the top right; remove if already in your layout/header */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <ThemeToggle />
      </div>
      <PersonalFavorites />
    </>
  );
}
