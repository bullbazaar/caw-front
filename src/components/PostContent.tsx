import { Text, useColorModeValue } from '@chakra-ui/react';

import type { TextAlign } from 'src/types/interface-props';
import TagRenderer, { ActionTagEvent } from './tag-renderer';

type Props = {
  align?: TextAlign;
  htStyle?: React.CSSProperties;
  mtStyle?: React.CSSProperties;
  urlStyle?: React.CSSProperties;
  onHashtagClick: ActionTagEvent;
  content: React.ReactNode[] | string;
};

const PostContent: React.FC<Props> = ({ align, htStyle, mtStyle, urlStyle, content, onHashtagClick }) => {
  const textColor = useColorModeValue('gray.900', 'gray.50');

  return (
    <Text as="p" textAlign={align} fontSize="md" color={textColor}>
      <TagRenderer htStyle={htStyle} mtStyle={mtStyle} urlStyle={urlStyle} onActionTag={onHashtagClick}>
        {content}
      </TagRenderer>
    </Text>
  );
};

export default PostContent;
