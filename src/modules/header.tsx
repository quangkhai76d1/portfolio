import {ANIM_DURATION} from '@/config/constants';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pageManagerSelector, setScrolling} from '../store/globalSlice';
import {createTransition} from '../utils/baseAnim';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';

interface Nav {
  id: number;
  name: string;
  tag: string;
}

interface IHeaderProps {
  headerNavs: Nav[];
}

export default function Header({headerNavs}: IHeaderProps) {
  const router = useRouter();
  const {selectedPage, scrolling} = useSelector(pageManagerSelector);
  const dispatch = useDispatch();
  const timeOutRef = useRef(0);

  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleChangePage = (tag: string) => {
    if (isDesktop) {
      if (!scrolling) {
        window.clearTimeout(timeOutRef.current);
        dispatch(setScrolling(true));
        timeOutRef.current = window.setTimeout(() => dispatch(setScrolling(false)), ANIM_DURATION + 300);
        router.push(`/#${tag}`, undefined, {shallow: true});
      }
    }
  };

  const handleToggleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <motion.div
      initial={{opacity: 0.2}}
      animate={{opacity: 1, transition: createTransition(0, 1)}}
      className="fixed top-0 left-0 z-30 flex items-center w-full px-4 pt-5 pb-4 md:pl-32 md:pr-0">
      <div className="flex items-center cursor-pointer" onClick={() => handleChangePage('home')}>
        <span className="font-serif text-xl text-gray-400 md:text-2xl"> &lt; </span>
        <span className="px-2 text-3xl tracking-wide md:text-4xl font-agustina text-main"> QuangKhai </span>
        <span className="font-serif text-xl text-gray-400 md:text-2xl"> /&gt; </span>
      </div>

      {/* Screen other */}
      <motion.div className="md:relative md:flex-1 md:items-center md:justify-end hidden md:flex md:pr-32  md:gap-[8.625rem]">
        {headerNavs.map((nav) => {
          const active = selectedPage === nav.id;
          return (
            <motion.div
              initial={{color: '#515154'}}
              animate={{
                color: active ? '#27dcda' : '#515154',

                transition: createTransition(0, 1.2),
              }}
              whileHover={{color: '#4eb5b4', transition: {duration: 0.1}}}
              onClick={() => handleChangePage(nav.tag)}
              key={nav.id}
              className="cursor-pointer md:flex md:flex-col md:items-center md:gap-[0.1875rem] w-9 tracking-wide z-20">
              <motion.span
                initial={{color: '#b3b3b3'}}
                animate={{
                  color: active ? '#f2f2f2' : '#b3b3b3',
                }}
                transition={{
                  duration: 1.2,
                  bounce: 0,
                }}
                className="text-base font-medium tracking-wide text-gray-60 whitespace-nowrap">
                {nav.name}
              </motion.span>
              <div className="hidden md:block w-6 h-6 p-[0.125rem] border-[0.0625rem] border-current rounded-full flex-center bg-primary-30">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: active ? 1 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    bounce: 0,
                  }}
                  className="hidden rounded-full bg-secondary-40 h-[1.125rem] w-[1.125rem] md:block"
                />
              </div>
            </motion.div>
          );
        })}

        <div className="hidden md:block md:absolute md:bottom-[0.75rem] md:inset-x-0 z-10 md:h-[0.0935rem] md:bg-header-line " />
      </motion.div>

      {/* Mobile devices */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{backgroundColor: 'currentcolor', translateY: '-100%'}}
            animate={{backgroundColor: '#131315', translateY: toggleMenu ? 0 : '-100%'}}
            exit={{translateY: '-100%'}}
            transition={{duration: 0.6}}
            className="absolute left-0 w-full h-screen max-h-[24rem] px-3 py-8 top-[4rem] cursor-pointer md:hidden">
            {headerNavs.map((nav) => {
              const active = selectedPage === nav.id;
              return (
                <motion.div
                  initial={{
                    color: '#515154',
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 0,
                  }}
                  animate={{
                    color: active ? '#27dcda' : '#515154',
                    borderLeftColor: active ? '#27dcda' : 'transparent',
                    borderLeftWidth: active ? '2px' : 0,
                    transition: createTransition(0, 1.2),
                  }}
                  whileHover={{backgroundColor: '#27dcda', transition: {duration: 0.1}}}
                  onClick={() => handleChangePage(nav.tag)}
                  key={nav.id}
                  className="p-5">
                  <motion.span
                    initial={{color: '#b3b3b3'}}
                    animate={{
                      color: active ? '#f2f2f2' : '#b3b3b3',
                    }}
                    transition={{
                      duration: 1.2,
                      bounce: 0,
                    }}
                    className="text-base font-medium tracking-wide text-gray-60 whitespace-nowrap">
                    {nav.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="absolute cursor-pointer text-gray-50 right-4 top-[1.625rem] md:hidden">
        <button onClick={handleToggleClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              stroke="currentColor"
              strokeOpacity="0.95"
              strokeWidth="2"
              initial={{
                x1: 3,
                y1: 7,
                x2: 9,
                y2: 7,
              }}
              animate={{
                x1: toggleMenu ? 5.70915 : 3,
                y1: toggleMenu ? 5.29494 : 7,
                x2: toggleMenu ? 9.93949 : 9,
                y2: toggleMenu ? 9.54985 : 7,
              }}
            />

            <motion.line
              stroke="currentColor"
              strokeOpacity="0.95"
              strokeWidth="2"
              initial={{
                x1: 3,
                y1: 11,
                x2: 21,
                y2: 11,
              }}
              animate={{
                x1: toggleMenu ? 5.32687 : 3,
                y1: toggleMenu ? 17.3777 : 11,
                x2: toggleMenu ? 18.6383 : 21,
                y2: toggleMenu ? 5.26131 : 11,
              }}
            />

            <motion.line
              stroke="currentColor"
              strokeOpacity="0.95"
              strokeWidth="2"
              style={{
                transformOrigin: '100% 50%',
              }}
              initial={{
                x1: 3,
                y1: 15,
                x2: 15,
                y2: 15,
              }}
              animate={{
                x1: toggleMenu ? 9.70753 : 3,
                y1: toggleMenu ? 9.29332 : 15,
                x2: toggleMenu ? 18.1877 : 15,
                y2: toggleMenu ? 17.7837 : 15,
              }}
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
