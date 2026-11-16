import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"映界 · 电影与剧集",description:"探索电影、电视剧与正版公开影像资源"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
