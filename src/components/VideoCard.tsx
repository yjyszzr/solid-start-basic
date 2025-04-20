import { createSignal } from "solid-js";

interface VideoCardProps {
  title: string;
  author: string;
  postedTime: string;
  likes?: number;
  comments?: number;
  stars?: number;
  shares?: number;
  thumbnailUrl: string;
}

export default function VideoCard(props: VideoCardProps) {
  const [liked, setLiked] = createSignal(false);
  const [starred, setStarred] = createSignal(false);
  const [isPlaying, setIsPlaying] = createSignal(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying());
  };
  
  return (
    <div class="video-card">
      <div class="video-player" style={{"background-image": `url(${props.thumbnailUrl})`}} onClick={togglePlay}>
        {isPlaying() ? (
          <video 
            class="active-video" 
            autoplay 
            loop 
            onClick={(e) => e.stopPropagation()}
          >
            <source src={`https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4?random=${props.title}`} type="video/mp4" />
            您的浏览器不支持视频标签
          </video>
        ) : (
          <div class="play-button">
            <svg viewBox="0 0 48 48" fill="currentColor" width="48" height="48">
              <path d="M16 10v28l22-14z" />
            </svg>
          </div>
        )}
        
        <div class="video-actions">
          <div class="action-btn" onClick={(e) => { e.stopPropagation(); setLiked(!liked()); }}>
            <div class={`icon-wrapper ${liked() ? "liked" : ""}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span>{props.likes || 0}</span>
          </div>
          <div class="action-btn" onClick={(e) => e.stopPropagation()}>
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <span>{props.comments || 0}</span>
          </div>
          <div class="action-btn" onClick={(e) => { e.stopPropagation(); setStarred(!starred()); }}>
            <div class={`icon-wrapper ${starred() ? "starred" : ""}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span>{props.stars || 0}</span>
          </div>
          <div class="action-btn" onClick={(e) => e.stopPropagation()}>
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
            </div>
            <span>{props.shares || 0}</span>
          </div>
        </div>
      </div>
      <div class="video-info">
        <div class="author-info">
          <span class="author-name">@{props.author}</span>
          <span class="post-time">{props.postedTime}</span>
        </div>
        <div class="video-title">{props.title}</div>
      </div>
    </div>
  );
} 