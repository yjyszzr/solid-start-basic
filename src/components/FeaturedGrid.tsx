import { createSignal } from "solid-js";

interface VideoGridItemProps {
  id: number;
  title: string;
  author: string;
  time: string;
  views: number;
  thumbnailUrl: string;
}

function VideoGridItem(props: VideoGridItemProps) {
  const [liked, setLiked] = createSignal(false);
  
  return (
    <div class="featured-video-item">
      <div class="video-thumbnail" style={{"background-image": `url(${props.thumbnailUrl})`}}>
        <div class="video-duration">
          <span>{props.time}</span>
        </div>
        <div class="video-play-icon">
          <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
            <path d="M16 10v28l22-14z" />
          </svg>
        </div>
      </div>
      <div class="video-item-info">
        <div class="video-item-title">{props.title}</div>
        <div class="video-item-stats">
          <span class="video-item-author">@{props.author}</span>
          <span class="video-item-views">{formatNumber(props.views)}次观看</span>
        </div>
      </div>
    </div>
  );
}

function formatNumber(num: number): string {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toString();
}

interface CategoryProps {
  active: boolean;
  name: string;
  onClick: () => void;
}

function Category(props: CategoryProps) {
  return (
    <div 
      class={`category-item ${props.active ? 'active' : ''}`}
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}

export default function FeaturedGrid() {
  const [activeCategory, setActiveCategory] = createSignal("全部");
  
  const categories = [
    "全部", "知识", "二次元", "游戏", "影视", 
    "生活vlog", "体育", "旅行", "小剧场", "汽车", 
    "美食", "三农", "音乐", "动物", "亲子", "美妆穿搭"
  ];
  
  const videos = [
    {
      id: 1,
      title: "一个隐藏字符，让明明存在的文件就是找不到！明明文件路径没有错，为何就是打不开？",
      author: "epcdiy",
      time: "05:44",
      views: 12500,
      thumbnailUrl: "https://picsum.photos/600/400?random=101"
    },
    {
      id: 2,
      title: "完美世界：石昊成为荒天帝后，他回报了4位恩师什么？",
      author: "荒年",
      time: "03:28",
      views: 95000,
      thumbnailUrl: "https://picsum.photos/600/400?random=102"
    },
    {
      id: 3,
      title: "最强AI工作流平台：免费部署 连接1000+外部应用，让AI真正替代重复工作 | N8N入门！",
      author: "AI学长小林",
      time: "33:45",
      views: 123600,
      thumbnailUrl: "https://picsum.photos/600/400?random=103"
    },
    {
      id: 4,
      title: "做一款无患子丝瓜络家事皂，从此告别洗洁精和钢丝球，你也来试试吧！",
      author: "影的告别（草本手作）",
      time: "03:45",
      views: 241100,
      thumbnailUrl: "https://picsum.photos/600/400?random=104"
    },
    {
      id: 5,
      title: "贫穷的首相",
      author: "和自己赛跑",
      time: "03:47",
      views: 294300,
      thumbnailUrl: "https://picsum.photos/600/400?random=105"
    },
    {
      id: 6,
      title: "他在拉丁美洲过着荒yin无度的日子（1）｜骑行拉美（Cartagena，Colombia）等滨海城市",
      author: "去通度? 原基☀",
      time: "21:21",
      views: 117500,
      thumbnailUrl: "https://picsum.photos/600/400?random=106"
    },
    {
      id: 7,
      title: "顶级蓝牙耳机宝华韦健改成有线耳机",
      author: "耳机捡漏王",
      time: "12:26",
      views: 22200,
      thumbnailUrl: "https://picsum.photos/600/400?random=107"
    },
    {
      id: 8,
      title: "'小超人'李泽楷",
      author: "财经论",
      time: "20:22",
      views: 15300,
      thumbnailUrl: "https://picsum.photos/600/400?random=108"
    }
  ];
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div class="featured-container">
      <div class="categories-scrollbar">
        {categories.map(category => (
          <Category 
            name={category} 
            active={activeCategory() === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
      
      <div class="featured-grid">
        {videos.map(video => (
          <VideoGridItem
            id={video.id}
            title={video.title}
            author={video.author}
            time={video.time}
            views={video.views}
            thumbnailUrl={video.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  );
} 