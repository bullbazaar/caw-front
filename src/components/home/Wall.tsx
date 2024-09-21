import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PostDto } from 'src/types/community-feed';
import { posts } from 'src/utils/mock/wallposts';
import Post from 'src/components/post/Post';
import { motion } from 'framer-motion';

const cols: 1 | 2 = 2;

export default function Wall() {
  //* Pagination rendering logic
  const { t } = useTranslation();
  const [data, setData] = useState<PostDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //* Load posts from API
    setTimeout(() => {
      setData(posts);
      setLoading(false);
    }, 50);
  }, []);

  if (loading) return <div>{t('labels.loading')}</div>;

  return (
    <motion.div
      layout
      className="grid auto-rows-[10px] grid-cols-[repeat(auto-fill,_minmax(350px,1fr))] flex-col gap-[16px]"
      style={{ display: cols === 2 ? 'grid' : 'flex' }}
    >
      {!loading && data.map((post) => <Post key={post.id} post={post} />)}
    </motion.div>
  );
}
