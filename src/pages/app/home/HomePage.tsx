import dynamic from 'next/dynamic';
import {
  Box,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RiArrowUpDownFill, RiLayoutHorizontalFill, RiLayoutLine, RiLayoutMasonryFill, RiLayoutTopFill } from 'react-icons/ri';
import { TbArrowsSort, TbLayoutDashboardFilled, TbLayoutListFilled } from 'react-icons/tb';

import PageWrapper, { Layout } from 'src/components/wrappers/Page';
import Iconify from 'src/components/icons/Iconify';
import NewPost from 'src/components/home/NewPost';
import { SearchIcon } from '@chakra-ui/icons';

const Wall = dynamic(() => import('src/components/home/Wall'), { ssr: false });

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="dashboard">{page}</Layout>;
};

export default function HomePage() {
  const { t } = useTranslation();
  const borderColor = useColorModeValue('gray.400', 'gray.700');

  return (
    <PageWrapper title="Home">
      <HStack
        w="100%"
        alignItems="baseline"
        alignContent="baseline"
        divider={<StackDivider borderColor={borderColor} borderRightStyle="dashed" display={{ xl: 'inherit', base: 'none' }} />}
      >
        <Box w={{ base: '100%', xl: '85%' }}>
          <Heading as="h4" size="md" className="flex justify-start pb-4 uppercase">
            {/* <Iconify icon="ci:home-heart-1" width={22} height={22} color="currentColor" className="mr-0.5" /> */}
            {t('app_home.wall_title')}
          </Heading>
          <div className="m-3 flex flex-col gap-4">
            <NewPost />
            <div className="flex gap-2">
              <SearchCawInput />
              <Select
                flex="1 0 120px"
                width="max-content"
                variant="filled"
                icon={<TbArrowsSort />}
                iconSize="26"
                textAlign="center"
                cursor="pointer"
                // value={sortingMode}
                // onChange={handleSortingModeChange}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="alphabetically">A-Z</option>
              </Select>
              <ButtonGroup spacing="1">
                <IconButton
                  bg={false ? 'whiteAlpha.400 !important' : undefined}
                  aria-label="Single-column layout"
                  icon={<TbLayoutListFilled size={26} />}
                />
                <IconButton
                  bg={true ? 'whiteAlpha.400 !important' : undefined}
                  aria-label="Multi-column layout"
                  icon={<TbLayoutDashboardFilled size={26} />}
                />
              </ButtonGroup>
            </div>
            <Wall />
          </div>
        </Box>
        {/* <div className="hidden w-[25%] xl:block"> */}
        {/*   <SearchCawInput /> */}
        {/* </div> */}
      </HStack>
    </PageWrapper>
  );
}

function SearchCawInput() {
  const borderColor = useColorModeValue('gray.400', 'gray.700');
  return (
    <InputGroup>
      <Input placeholder="Search CAW" variant="outline" borderColor={borderColor} />
      <InputRightElement alignItems="center" justifyContent="center">
        <IconButton variant="unstyled" aria-label="Search" icon={<SearchIcon className="mb-1" />} />
      </InputRightElement>
    </InputGroup>
  );
}
