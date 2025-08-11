// scripts/task3-create.ts
import { createPost } from "../lib/http/endpoints/posts";

(async () => {
  const res = await createPost({
    userId: 123,
    title: "Hello Panda Hub",
    body: "This is a demo post from Task 3.",
  });
  if (!res.ok) {
    console.error("❌ createPost error:", res.error);
    process.exit(1);
  }
  console.log("✅ created:", res.data);
})();
