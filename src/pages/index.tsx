import Header from '@/modules/header';
import PageManager from '@/modules/page-manager';
import {selectedPageSelector, setPage} from '@/store/globalSlice';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import Loader from '@/common/loading';

const HeaderNavs = [
  {id: 0, name: 'Home', tag: 'home'},
  {
    id: 1,
    name: 'Skills',
    tag: 'skills',
  },
  {
    id: 2,
    name: 'Work Experiences',
    tag: 'work-experiences',
  },

  {
    id: 3,
    name: 'Projects',
    tag: 'projects',
  },
  {
    id: 4,
    name: 'Contact me',
    tag: 'contact-me',
  },
];

export default function Home() {
  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  const router = useRouter();
  const pageId = useSelector(selectedPageSelector);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('Home|My Portfolio');

  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDesktop) {
      if (router) {
        const path = router.asPath;
        if (path.startsWith('/#')) {
          const tag = path.slice(2);
          const nav = HeaderNavs.find((item) => item.tag === tag);
          console.log(nav);
          if (nav) {
            dispatch(setPage(nav.id));
          }
        }
      }
    }
  }, [dispatch, router, isDesktop]);

  useEffect(() => {
    const nav = HeaderNavs.find((item) => item.id === pageId);
    if (nav) {
      setTitle(`${nav.name} | My Portfolio`);
    }
  }, [pageId]);

  const handleLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <div className="h-full bg-primary-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is my portfolio" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>
      {showContent && (
        <>
          <Header headerNavs={HeaderNavs} />
          <PageManager />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaded} />
    </div>
  );
}
