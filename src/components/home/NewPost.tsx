import { useState } from 'react';
import { Box, Button, HStack, IconButton, Stack, Textarea, Tooltip, useColorModeValue, useToken, useColorMode, chakra } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { MotionContainer } from 'src/components/animate';
import MyAvatar from 'src/components/contract/avatars/MyAvatar';
import Iconify from 'src/components/icons/Iconify';
import { useToast } from 'src/hooks';

export const MAX_CHARECTERS = 420;

export default function NewPost() {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const [light, dark] = useToken('colors', ['caw.600', 'caw.500']);
  const iconColor = useColorModeValue(light, dark);
  const bg = useColorModeValue('gray.50', 'gray.800');
  const toast = useToast();
  const [input, setInput] = useState('');

  const handlePost = () => {
    toast.closeAll();
    toast({
      title: t('new_post.yettodone_title'),
      description: t('new_post.yettodone_desc'),
      status: 'info',
      variant: colorMode === 'dark' ? 'solid' : 'subtle',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <MotionContainer>
      <chakra.div className="rounded-md p-4 pt-6" bg={bg}>
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={4}>
          <MyAvatar sx={{ display: { base: 'none', sm: 'block' } }} />
          <Textarea
            autoFocus
            resize="none"
            placeholder={t('labels.new_post_plh')}
            inputMode="text"
            maxLength={MAX_CHARECTERS}
            height={110}
            onChange={(event) => setInput(event.target.value)}
          />
        </Stack>
        <HStack alignItems="center" ml={{ base: 0, sm: 14 }} mt="2" alignContent="space-between">
          <Tooltip hasArrow label={t('labels.add_photo')}>
            <IconButton variant="ghost" aria-label={t('labels.add_photo')}>
              {<Iconify icon={'bxs:image'} width={20} height={20} color={iconColor} />}
            </IconButton>
          </Tooltip>
          <Tooltip hasArrow label={t('labels.add_gif')}>
            <IconButton variant="ghost" aria-label={t('labels.add_gif')}>
              {<Iconify icon={'fluent:gif-24-filled'} width={20} height={20} color={iconColor} />}
            </IconButton>
          </Tooltip>
          <Tooltip hasArrow label={t('labels.add_video')}>
            <IconButton variant="ghost" aria-label={t('labels.add_video')}>
              {<Iconify icon={'bxs:video'} rotate={180} width={20} height={20} color={iconColor} />}
            </IconButton>
          </Tooltip>
          <Tooltip hasArrow label={t('labels.add_link')}>
            <IconButton variant="ghost" aria-label={t('labels.add_link')}>
              {<Iconify icon={'majesticons:link-circle'} rotate={180} width={20} height={20} color={iconColor} />}
            </IconButton>
          </Tooltip>
          <Tooltip hasArrow label={t('labels.add_long_caw')}>
            <IconButton variant="ghost" aria-label={t('labels.add_long_caw')}>
              {<Iconify icon={'akar-icons:circle-plus-fill'} rotate={180} width={20} height={20} color={iconColor} />}
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction={{ base: 'column', sm: 'row' }} alignItems={{ base: 'flex-start', sm: 'center' }}>
            <div className="pr-1 text-gray-500">
              {input.length}/{MAX_CHARECTERS}
            </div>
            <Tooltip hasArrow label={t('buttons.btn_caw_tooltip')}>
              <Button variant="contained" bg="caw.600" color={'gray.900'} size="sm" boxShadow="2xl" onClick={handlePost}>
                CAW
              </Button>
            </Tooltip>
          </Stack>
        </HStack>
      </chakra.div>
    </MotionContainer>
  );
}
