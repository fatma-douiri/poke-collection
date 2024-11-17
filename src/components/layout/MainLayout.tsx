import { Header } from "./Header";

type TMainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: TMainLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-2rem)] p-10">
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-10 z-10">
        <Header />
      </div>

      <main className="flex-1 flex items-center pt-28">{children}</main>
    </div>
  );
}
