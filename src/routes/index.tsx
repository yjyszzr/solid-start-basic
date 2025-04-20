import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import TikTokLayout from "~/components/TikTokLayout";
import VideoCard from "~/components/VideoCard";
import Counter from "~/components/Counter";

export default function Home() {
  // 模拟视频数据
  const videoData = [
    {
      id: 1,
      title: "老师",
      author: "古龙",
      postedTime: "23小时前",
      likes: 208,
      comments: 8,
      stars: 24,
      shares: 4,
      thumbnailUrl: "https://picsum.photos/600/800?random=1"
    },
    {
      id: 2,
      title: "这一招解决了我所有的编程问题，#编程 #前端开发 #solidjs",
      author: "技术达人",
      postedTime: "2天前",
      likes: 1562,
      comments: 128,
      stars: 189,
      shares: 73,
      thumbnailUrl: "https://picsum.photos/600/800?random=2"
    },
    {
      id: 3,
      title: "成为高级开发的必经之路，一定要掌握这些技能 #程序员 #前端",
      author: "前端大咖",
      postedTime: "1周前",
      likes: 7832,
      comments: 431,
      stars: 655,
      shares: 290,
      thumbnailUrl: "https://picsum.photos/600/800?random=3"
    },
    {
      id: 4,
      title: "编程最重要的是思维方式，看完就懂了",
      author: "代码爱好者",
      postedTime: "3天前",
      likes: 3847,
      comments: 251,
      stars: 421,
      shares: 154,
      thumbnailUrl: "https://picsum.photos/600/800?random=4"
    }
  ];
  
  const [showCounter, setShowCounter] = createSignal(false);

  return (
    <TikTokLayout>
      <div class="video-feed">
        {videoData.map(video => (
          <VideoCard 
            key={video.id}
            title={video.title}
            author={video.author}
            postedTime={video.postedTime}
            likes={video.likes}
            comments={video.comments}
            stars={video.stars}
            shares={video.shares}
            thumbnailUrl={video.thumbnailUrl}
          />
        ))}
      </div>
      
      {showCounter() && (
        <div class="counter-container">
          <h3>Counter组件演示：</h3>
          <Counter />
        </div>
      )}
      
      <button 
        class="toggle-counter" 
        onClick={() => setShowCounter(!showCounter())}
      >
        {showCounter() ? "隐藏" : "显示"} Counter 组件
      </button>
    </TikTokLayout>
  );
}
