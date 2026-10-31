import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Portfolio · Message admin", robots: { index: false, follow: false } };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><main className="shell"><header><span className="eyebrow">YUE WU / PRIVATE WORKSPACE</span><h1>Message inbox</h1><p>Conversations from your portfolio.</p></header>{children}</main></body></html>;
}
