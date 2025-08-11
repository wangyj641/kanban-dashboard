// scripts/task3-fetch.ts
import { listPosts, getPost } from '../lib/http/endpoints/posts';

(async () => {
  const list = await listPosts();
  if (!list.ok) {
    console.error('❌ listPosts error:', list.error);
    process.exit(1);
  }
  console.log('✅ posts:', list.data.slice(0, 3)); // 只打印前三条

  const one = await getPost(1);
  if (!one.ok) {
    console.error('❌ getPost error:', one.error);
    process.exit(1);
  }
  console.log('✅ post #1:', one.data);
})();
