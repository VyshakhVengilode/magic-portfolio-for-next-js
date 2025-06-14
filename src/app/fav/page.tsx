import { ThemeToggle } from "@/components/ThemeToggle";
import PersonalFavorites from "@/components/fav/PersonalFavorites";

export default function Page() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <ThemeToggle />
      </div>
      <PersonalFavorites />
    </>
  );
}
