import { createSignal, onMount, For, createEffect } from 'solid-js';
import { createClient } from '@supabase/supabase-js';

// 立即执行的调试日志
console.log('模块加载');

interface Fruit {
  id: number;
  name: string;
}

function FruitList() {
  console.log('组件开始执行', new Date().toISOString());

  const [fruits, setFruits] = createSignal<Fruit[]>([]);
  const [error, setError] = createSignal<string>('');
  const [loading, setLoading] = createSignal(true);

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

  // 改用 onMount 替代 createEffect
  onMount(async () => {
    console.log('onMount 执行');
    await fetchFruits();
  });

  const fetchFruits = async () => {
    console.log('fetchFruits 开始执行');
    try {
      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase 配置缺失');
      }

      const supabase = createClient(supabaseUrl, supabaseKey);
      
      console.log('开始请求数据...');
      const { data, error } = await supabase
        .from('fruit')
        .select('*');

      console.log('Supabase 返回结果:', { data, error });

      if (error) {
        throw error;
      }

      console.log('处理后的数据:', data);
      setFruits(data || []);
    } catch (err) {
      console.error('数据获取错误:', err);
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setLoading(false);
    }
  };

  // 移除 createEffect
  console.log('组件渲染结束');

  return (
    <div>
      <h1>水果列表</h1>
      {error() && (
        <div style={{ color: 'red' }}>错误: {error()}</div>
      )}
      <ul>
        <For each={fruits()}>
          {(fruit) => (
            <li>ID: {fruit.id}, 名称: {fruit.name}</li>
          )}
        </For>
      </ul>
      {loading() && <p>正在加载数据...</p>}
      {!loading() && fruits().length === 0 && !error() && (
        <p>没有找到水果数据</p>
      )}
    </div>
  );
}

// 导出前执行调试
console.log('准备导出组件');
export default FruitList;