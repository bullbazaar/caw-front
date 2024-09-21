import { useCallback, useEffect, useRef, useState } from 'react';
import { chakra, useColorModeValue, useToken } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import type { PostDto } from 'src/types/community-feed';
import type { TagType } from 'src/components/tag-renderer/parser';
import PostContent from 'src/components/PostContent';
import PostHeader from './PostHeader';
import PostActions from './PostActions';

type Props = {
  post: PostDto;
};

export default function Post({ post }: Props) {
  const postContentRef = useRef<HTMLDivElement>(null);
  const [rowSpan, setRowSpan] = useState(0);
  const [htLight, htDark] = useToken('colors', ['caw.800', 'caw.600']);
  const [mtLight, mtDark] = useToken('colors', ['red.600', 'red.500']);
  const [urlLight, urlDark] = useToken('colors', ['blue.600', 'blue.500']);
  const htColor = useColorModeValue(htLight, htDark);
  const mtColor = useColorModeValue(mtLight, mtDark);
  const urlColor = useColorModeValue(urlLight, urlDark);
  const bg = useColorModeValue('gray.50', 'gray.800');

  const { id, content, likes, votes, commentsCount, transactionHash, date, author } = post;

  const handleHashTagClicked = useCallback((ht: string, type: TagType, element: any) => {
    console.log(ht, type, element);
  }, []);

  const handleDeletePost = useCallback(() => {
    console.log('Delete post', id);
  }, [id]);

  const rowGap = 16;
  const rowHeight = 10;

  const updateRowSpan = useCallback(() => {
    setRowSpan(0);
    if (!postContentRef.current) return;
    setRowSpan(Math.ceil((postContentRef.current.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)));
  }, [postContentRef, setRowSpan]);

  useEffect(() => {
    updateRowSpan();
    const handleResize = () => updateRowSpan();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <chakra.div
      as={motion.div}
      layout
      id={`post-${id}`}
      className="relative rounded-md"
      bg={bg}
      style={{ gridRowEnd: `span ${rowSpan}`, visibility: !!rowSpan ? 'visible' : 'hidden' }}
    >
      <div ref={postContentRef} className="post-content p-4 pb-1">
        <PostHeader
          src={author?.media.src}
          displayName={author?.name}
          username={author?.userName}
          type={author?.media.type}
          verified={author?.verified}
          date={date}
          postId={id}
          txId={transactionHash}
          onDelete={handleDeletePost}
        />
        <div className="m-4">
          <PostContent
            content={content}
            htStyle={{ color: htColor }}
            mtStyle={{ color: mtColor }}
            urlStyle={{ color: urlColor }}
            onHashtagClick={handleHashTagClicked}
          />
          <br />
          <PostActions likes={likes} votes={votes} comments={commentsCount} shared={0} className="absolute bottom-3" />
        </div>
      </div>
    </chakra.div>
  );
}
