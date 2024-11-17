import { Navigation } from "@/components/Navigation";
import { APP } from "@/constants";

export function Header() {
  return (
    <header className="relative bg-gradient-to-b from-oktee-darkest/95 to-oktee-dark/80 backdrop-blur-sm rounded-full p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-full -z-10" />

      <div className="flex items-center justify-between p-x-4">
        <h1 className="text-xl font-bold text-white">{APP.NAME}</h1>
        <Navigation />
      </div>
    </header>
  );
}
