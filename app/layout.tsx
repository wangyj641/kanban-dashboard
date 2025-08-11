import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project M - Kanban Dashboard",
  description: "Modern project management dashboard with Kanban board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
