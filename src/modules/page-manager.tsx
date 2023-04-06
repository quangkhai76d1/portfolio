import Skill from '@/components/skills';
import HomePage from '../components/home-page';
import {useDispatch, useSelector} from 'react-redux';
import {selectedPageSelector} from '@/store/globalSlice';
import {motion, useAnimationControls} from 'framer-motion';
import {useWindowSize} from '@/hook/useWindowSize';
import {useEffect} from 'react';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import Experiences from '@/components/experiences';
import Projects from '@/components/projects-page';
import Contact from '@/components/contact';

export interface PageProps {
  id: number;
  selectedPage: number;
  onPageChange: (page: number) => void;
}

export default function PageManager() {
  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  const selectedPage = useSelector(selectedPageSelector);
  const controls = useAnimationControls();
  const {height} = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDesktop) {
      controls.start({
        translateY: `${-selectedPage * height}px`,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [controls, dispatch, height, selectedPage, isDesktop]);

  return (
    <motion.div
      initial={
        isDesktop && {
          translateY: 0,
        }
      }
      animate={controls}
      className="w-full h-full">
      <HomePage />
      <Skill />
      <Experiences />
      <Projects />
      <Contact />
    </motion.div>
  );
}
