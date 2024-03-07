import {ANIM_DURATION} from '@/config/constants';
import {useListenPageChange} from '@/hook/useListenPageChange';
import useMediaQuery, {TABLET_DESKTOP_QUERY, TABLET_QUERY} from '@/hook/useMediaQuery';
import {nextPage, prevPage, selectedPageSelector, setScrolling} from '@/store/globalSlice';
import {createTransition} from '@/utils/baseAnim';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import ExperienceItem from './experiences-item';

const experiences = [
  {
    id: 1,
    title: 'The Green Market',
    srcLogo: '/experiences/green.png',
    position: 'Front End Developer Internship',
    time: 'September 2021 - November 2021',
    description: {
      title: `Learn some languages and joined some projects to practice.`,
      desc1: 'Learning HTML, CSS, JavaScript, ReactJs...',
      desc2: 'Joined project for skills improvement. ',
    },
  },
  {
    id: 2,
    title: 'AIOZ NetWork',
    srcLogo: '/experiences/aioz-network-logo.png',
    position: 'Front End Developer',
    time: 'June 2022 - April 2023',
    description: {
      title: `Keep learning more to improve skills
    and joined some projects.`,
      desc1: 'Learn NextJs, Typescript,...',
      desc2: 'Take responsibility some projects in AIOZ Dashboard W3S, AIOZ Network Landing Page,AIOZ W3S Landing Page,...',
    },
  },
  {
    id: 3,
    title: 'MiSmart',
    srcLogo: '/experiences/mismart.png',
    position: 'Front End Developer',
    time: 'April 2023 - Present',
    description: {
      title: `Research and develop the company's products.`,
      desc1: 'Research Vuejs, use vuejs, reactjs and Nextjs to develop products.',
      desc2: 'Take responsibility some projects in Skyeye Studio(Vuejs), Skyeye Web(Reactjs) and CCTV(Nextjs).',
    },
  },
  {
    id: 4,
    title: 'Freelancer',
    srcLogo: '/experiences/freelancer-icon.svg',
    position: 'Freelance',
    time: 'Flexible',
    description: {
      title: 'Working with my friends together.',
      desc1: 'Convert HTML, CSS to modern UI.',
      desc2: 'Self-study by doing personal projects.',
    },
  },
];

export default function Experiences() {
  const pageId = 2;
  const selectedPage = useSelector(selectedPageSelector);
  const dispatch = useDispatch();

  const opacity = selectedPage === pageId ? 1 : 0;
  const timeOutRef = useRef(0);

  const isTablet = useMediaQuery(TABLET_QUERY);

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
      className="relative z-10 w-full h-full px-6 pt-[87px] md:px-16 md:flex md:flex-col md:justify-center">
      <motion.h1
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
        className="mb-6 text-3xl font-bold text-center text-white md:mb-8 md:text-4xl md:text-left lg:text-[2.815rem]">
        Work <span className="text-main">Experiences</span>
      </motion.h1>
      <div>
        {/* {experiences.map((exp, index) => (
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
            }
            key={index}>
            <ExperienceItem {...exp} />
          </motion.div>
        ))} */}
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
          }}
          pagination={{clickable: true}}
          navigation
          mousewheel
          keyboard
          className="w-full">
          {experiences.map((exp, index) => (
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
                <ExperienceItem {...exp} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
