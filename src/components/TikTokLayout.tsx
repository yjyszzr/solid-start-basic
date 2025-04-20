import { JSX, createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";
import FeaturedGrid from "./FeaturedGrid";

interface TikTokLayoutProps {
  children: JSX.Element;
}

export default function TikTokLayout(props: TikTokLayoutProps) {
  const [activeTab, setActiveTab] = createSignal("精选");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  
  return (
    <div class="tiktok-layout">
      <header class="tiktok-header">
        <div class="left-header">
          <button class="menu-toggle">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <div class="tiktok-logo">
            <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
              <path d="M16.708 3.163c.765-.458 1.5-.898 2.115-1.545.162-.172.312-.363.428-.584.3-.579.226-1.202.249-1.824H16.5V17.098c0 .202.01.421-.032.619a2.222 2.222 0 01-2.302 1.888c-.897-.057-1.647-.537-2.024-1.34-.31-.657-.232-1.35-.032-2.017.193-.644.622-1.104 1.274-1.346.315-.118.648-.152.982-.124.19.014.31-.074.302-.277-.012-.411-.015-.822-.002-1.233.005-.14-.03-.256-.189-.281a4.53 4.53 0 00-2.153.057 4.087 4.087 0 00-2.638 2.071c-.506.913-.62 1.855-.457 2.838.118.718.394 1.372.815 1.938a4.088 4.088 0 002.924 1.645c.806.098 1.547-.022 2.267-.308.704-.28 1.33-.67 1.803-1.227.71-.837.927-1.823.99-2.86.06-1 .035-2.03.035-3.045V8.813c.616.357 1.229.671 1.863.943 1.33.572 2.715.867 4.124.948v-3.119c-.713-.108-1.42-.275-2.1-.55-.85-.343-1.655-.767-2.37-1.289-.321-.233-.616-.51-.86-.817-.56-.723-.73-1.469-.048-2.102.087-.084.11-.164.11-.284V3.164h-2.073v-.001z" />
            </svg>
            <span>TD</span>
          </div>
        </div>
        
        <div class="tiktok-search">
          <input type="text" placeholder="搜索你感兴趣的内容" />
          <button class="search-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm9.707-1.707l-3.313-3.313A8.963 8.963 0 0018 10a8 8 0 10-8 8 8.963 8.963 0 006.98-3.313l3.313 3.313a1 1 0 001.414-1.414z" />
            </svg>
          </button>
        </div>
        
        <div class="right-header">
          <button class="header-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93A8.002 8.002 0
013 19.93z" />
            </svg>
          </button>
          <button class="header-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          </button>
          <button class="header-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" />
            </svg>
          </button>
          <div class="tiktok-user-actions">
            <span class="user-icon">登录</span>
          </div>
          <div class="user-profile">
            <img src="https://via.placeholder.com/32" alt="User" class="user-avatar" />
          </div>
        </div>
      </header>
      <div class="tiktok-main">
        <div class="tiktok-sidebar">
          <div class="sidebar-menu">
            <div 
              class={`menu-item ${activeTab() === "精选" ? "active" : ""}`}
              onClick={() => handleTabClick("精选")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z" />
              </svg>
              <span>精选</span>
            </div>
            <div 
              class={`menu-item ${activeTab() === "推荐" ? "active" : ""}`}
              onClick={() => handleTabClick("推荐")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>推荐</span>
            </div>
            <div 
              class={`menu-item live ${activeTab() === "关注" ? "active" : ""}`}
              onClick={() => handleTabClick("关注")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <span>关注</span>
              <span class="live-badge">LIVE</span>
            </div>
            <div 
              class={`menu-item ${activeTab() === "朋友" ? "active" : ""}`}
              onClick={() => handleTabClick("朋友")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.67.12-1.36.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.51.92.63 1.62.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
              </svg>
              <span>朋友</span>
            </div>
            <div 
              class={`menu-item ${activeTab() === "我的" ? "active" : ""}`}
              onClick={() => handleTabClick("我的")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>我的</span>
            </div>
          </div>
          
          <div class="api-container">
            <A href="/fruits" class="api-link">
              查看API调用 - 水果列表
            </A>
          </div>
        </div>
        <div class="tiktok-content">
          <Show when={activeTab() === "精选"}>
            <FeaturedGrid />
          </Show>
          
          <Show when={activeTab() === "推荐"}>
            <div class="tab-content-container">
              <div class="tab-title">{activeTab()}</div>
              {props.children}
            </div>
          </Show>
          
          <Show when={activeTab() === "关注" || activeTab() === "朋友" || activeTab() === "我的"}>
            <div class="tab-content-container empty-tab">
              <div class="tab-title">{activeTab()}</div>
              <div class="empty-tab-message">
                <div class="empty-icon">
                  <svg viewBox="0 0 48 48" width="80" height="80" fill="rgba(255,255,255,0.3)">
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm-2-6h4v-4h-4v4zm0-18v10h4V16h-4z" />
                  </svg>
                </div>
                <p>登录后查看{activeTab()}内容</p>
                <button class="login-btn">立即登录</button>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
} 