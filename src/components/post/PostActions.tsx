import { Tooltip, Text, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { kFormatter } from 'src/utils/formatNumber';
import Iconify from 'src/components/icons/Iconify';

type Props = {
  likes: number;
  // dislikes: number;
  comments: number;
  votes: number;
  shared: number;
};

const PostActions: React.FC<Props & React.HTMLProps<HTMLDivElement>> = ({ likes, comments, shared, className, ...props }) => {
  return (
    <div className={`flex flex-row items-center gap-4 ${className}`} {...props}>
      {LikeAction(likes)}
      {/* {DislikeAction(dislikes)} */}
      {CommentsAction(comments)}
      {SharingAction(shared)}
      {BlockScan()}
    </div>
  );
};

function SharingAction(shared: number) {
  const { t } = useTranslation();
  return (
    <Tooltip hasArrow label={t('labels.sharing')}>
      <HStack spacing={1} alignItems="center">
        <Iconify icon={'dashicons:share-alt2'} width={20} height={20} />
        <Text>{kFormatter(shared)}</Text>
      </HStack>
    </Tooltip>
  );
}

function CommentsAction(comments: number) {
  const { t } = useTranslation();
  return (
    <Tooltip hasArrow label={t('labels.comments')}>
      <HStack spacing={1} alignItems="center">
        <Iconify icon={'material-symbols:mode-comment-rounded'} width={20} height={20} />
        <Text>{kFormatter(comments)}</Text>
      </HStack>
    </Tooltip>
  );
}

// function DislikeAction(dislikes: number) {
//     const { t } = useTranslation();
//     return (
//         <Tooltip hasArrow label={t('labels.dislikes')}>
//             <HStack spacing={1} alignItems="center">
//                 <Iconify icon={'clarity:heart-broken-solid'} width={20} height={20} color="darkred" />
//                 <Text>
//                     {kFormatter(dislikes)}
//                 </Text>
//             </HStack>
//         </Tooltip>
//     );
// }

function LikeAction(likes: number) {
  const { t } = useTranslation();
  return (
    <Tooltip hasArrow label={t('labels.likes')}>
      <HStack spacing={1} alignItems="center">
        <Iconify icon={'flat-color-icons:like'} width={20} height={20} />
        <Text>{kFormatter(likes)}</Text>
      </HStack>
    </Tooltip>
  );
}

function BlockScan() {
  const { t } = useTranslation();
  return (
    <Tooltip hasArrow label={t('buttons.btn_scan')}>
      <HStack spacing={1} alignItems="center">
        <Iconify icon={'fa-brands:ethereum'} width={20} height={20} />
      </HStack>
    </Tooltip>
  );
}

export default PostActions;
