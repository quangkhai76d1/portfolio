import {ANIM_DURATION, LANDING_PAGE_URL, PORTFOLIO_URL} from '@/config/constants';
import {useListenPageChange} from '@/hook/useListenPageChange';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import {nextPage, prevPage, selectedPageSelector, setScrolling} from '@/store/globalSlice';
import {createTransition} from '@/utils/baseAnim';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AIOZ_NETWORK_URL, DASHBOARD_URL} from '../../config/constants';
import ProjectItem from './project-item';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

export interface IProjectsProps {}

const projects = [
  {
    title: 'AIOZ W3S Langding Page',
    url: '/projects/landing-page.png',
    desc: 'AIOZ W3S Langding Page is a website that introduces an overview and the superior features of AIOZ W3S Dashboard',
    text: 'Visit Website',
    href: LANDING_PAGE_URL,
  },
  {
    title: 'AIOZ W3S Dashboard',
    url: '/projects/dashboard.png',
    desc: 'AIOZ Web3 Storage Disrupting Cloud Storage Industry with Blockchain Technology powered by AIOZ Network',
    text: 'Visit Website(Updating)',
    href: DASHBOARD_URL,
  },
  {
    title: 'AIOZ Network',
    url: '/projects/aioz-network.png',
    desc: 'AIOZ Network utilizes a decentralized model to share bandwidth and storage among users, creating a decentralized environment for content exchange.',
    text: 'Visit Website',
    href: AIOZ_NETWORK_URL,
  },
  {
    title: 'My Portfolio',
    url: '/projects/portfolio.png',
    desc: 'My Portfolio is a website introducing myself, my work experience, and contact information to everyone.',
    text: 'Visit Website',
    href: PORTFOLIO_URL,
  },
  {
    title: 'Skyeye Studio',
    url: '/projects/skyeye.png',
    desc: 'Skyeye studio is a project that synchronizes data with skyeye web to implement tools for counting trees, labeling trees, measuring tree health status and integrating labeling of telecom towers for proactive maintenance.',
    text: 'Visit Website',
    href: PORTFOLIO_URL,
  },
  {
    title: 'CCTV',
    url: '/projects/cctv.png',
    desc: 'CCTV is a project to broadcast live from an IP camera and allow review of all recordings during the camera recording process',
    text: 'Developing',
    href: PORTFOLIO_URL,
  },
];

export default function Projects() {
  const pageId = 3;
  const selectedPage = useSelector(selectedPageSelector);
  const dispatch = useDispatch();

  const opacity = selectedPage === pageId ? 1 : 0;
  const timeOutRef = useRef(0);
  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  useListenPageChange(
    () => {
      if (isDesktop) {
        if (selectedPage === pageId) {
          window.clearTimeout(timeOutRef.current);
          dispatch(setScrolling(true));
          dispatch(nextPage());
          timeOutRef.current = window.setTimeout(() => dispatch(setScrolling(false)), ANIM_DURATION + 300);
        }
      }
    },
    () => {
      if (isDesktop) {
        if (selectedPage === pageId) {
          window.clearTimeout(timeOutRef.current);
          dispatch(setScrolling(true));
          dispatch(prevPage());
          timeOutRef.current = window.setTimeout(() => dispatch(setScrolling(false)), ANIM_DURATION + 400);
        }
      }
    }
  );
  return (
    <motion.section
      initial={
        isDesktop && {
          opacity: 0,
        }
      }
      animate={
        isDesktop && {
          opacity,
          transition: createTransition(),
        }
      }
      className="relative z-10 w-full h-full px-6 pt-[87px]">
      <motion.div
        initial={
          isDesktop && {
            translateY: '100vh',
            opacity: 0,
          }
        }
        animate={
          isDesktop && {
            opacity,
            translateY: selectedPage >= pageId ? 0 : '100vh',
            transition: createTransition(selectedPage >= pageId ? 0 : 0.4),
          }
        }
        className="w-full mb-3 text-center lg:text-start lg:mb-5">
        <h1 className="pb-3 text-3xl font-bold leading-10 text-main lg:text-5xl">Projects</h1>
        <h3 className="text-sm font-semibold text-white lg:text-lg">
          Some products of the company that I have contributed to developing their technology
        </h3>
      </motion.div>

      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          pagination={{clickable: true}}
          navigation
          mousewheel
          keyboard
          className="w-full">
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={
                  isDesktop && {
                    translateY: '120vh',
                    opacity: 0,
                  }
                }
                animate={
                  isDesktop && {
                    opacity,
                    translateY: selectedPage >= pageId ? 0 : '120vh',
                    transition: createTransition(0.2 + index / 3),
                  }
                }>
                <ProjectItem {...project} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
