import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-oktee-text">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <Link href={ROUTES.BROWSE} className="text-oktee-primary hover:underline">
        Return to Browse
      </Link>
    </div>
  );
}
