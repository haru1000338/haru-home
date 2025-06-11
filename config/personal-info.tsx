import React from "react";
import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { DiPython } from "react-icons/di";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "櫻井　遥輝",
  title: "大学2年生・エンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "S H", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>大学2年生のエンジニアです。サークル活動としてAI関連のLT会やってみたい！</>,
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Python", icon: <DiPython className="w-3 h-3 mr-1" /> },
     ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Darts",
      description: "定期的に友人とダーツを楽しんでいます。技術的な戦略や集中力を高めるための良いリフレッシュになります。",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["ダーツ", "友人と楽しむ", "リフレッシュ"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "プログラミングやWeb開発について学習中。特にフロントエンド技術に興味を持って取り組んでいます。授業以外でも自主的に様々な技術を学び、実際にプロジェクトを作りながらスキルを向上させています。",
      badges: ["コンピュータサイエンス学科", "人工知能専攻"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "○○高等学校",
      description: "○○部で活動していました。チームワークやリーダーシップを学び、問題解決能力を養いました。高校時代からコンピューターに興味を持ち始め、プログラミングの基礎を独学で学んでいました。",
      badges: ["リーダーシップ", "チームワーク", "独学"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/haru1000338", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/yourusername", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
        platform: "Zenn",
        url: "https://zenn.dev/s_haru", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 