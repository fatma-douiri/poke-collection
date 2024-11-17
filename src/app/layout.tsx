import { MainLayout } from "@/components/layout/MainLayout";
import { APP } from "@/constants";
import "@/styles/globals.scss";

export const metadata = {
  title: APP.NAME,
  description: APP.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
