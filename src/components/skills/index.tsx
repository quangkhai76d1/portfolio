import CircleDecorator from '@/common/circle-decorator';
import {ANIM_DURATION} from '@/config/constants';
import {useListenPageChange} from '@/hook/useListenPageChange';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import {nextPage, prevPage, selectedPageSelector, setScrolling} from '@/store/globalSlice';
import {createTransition} from '@/utils/baseAnim';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import {AiTwotoneThunderbolt} from 'react-icons/ai';
import {FaDatabase, FaGithub, FaGitlab, FaNode, FaSass} from 'react-icons/fa';
import {RiReactjsFill} from 'react-icons/ri';
import {SiJavascript, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {useDispatch, useSelector} from 'react-redux';

export default function Skill() {
  const pageId = 1;
  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  const [widthImg, setWidthImg] = useState(400);
  const [heightImg, setHeightImg] = useState(350);

  const selectedPage = useSelector(selectedPageSelector);
  const dispatch = useDispatch();

  const opacity = selectedPage === pageId ? 1 : 0;
  const timeOutRef = useRef(0);

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

  useEffect(() => {
    if (isDesktop) {
      setWidthImg(600);
      setHeightImg(550);
    }
  }, [isDesktop]);
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
      className="relative pt-[3rem] md:pt-8 px-6 xl:px-16 md:px-8 flex flex-col-reverse md:flex-row items-center md:w-full md:h-full">
      <motion.div
        initial={
          isDesktop && {
            translateY: '100%',
            opacity: 0,
          }
        }
        animate={
          isDesktop && {
            opacity,
            translateY: selectedPage >= pageId ? 0 : '100%',
            transition: createTransition(0.3),
          }
        }
        className="flex justify-center pt-12 md:flex-1 md:items-center">
        <Image priority src={'/skills/Desk.gif'} width={widthImg} height={heightImg} quality={100} alt="Image Skills" />
      </motion.div>

      <div className="flex flex-col items-center gap-4 text-white md:flex-1 md:p-4">
        <motion.h1
          initial={
            isDesktop && {
              translateY: '100vh',
              opacity: 0,
            }
          }
          animate={
            isDesktop && {
              translateY: selectedPage >= pageId ? 0 : '100vh',
              opacity,
              transition: createTransition(selectedPage >= pageId ? 0.1 : 1),
            }
          }
          className="text-3xl font-semibold">
          What I do?
        </motion.h1>
        <motion.p
          initial={
            isDesktop && {
              translateY: '100vh',
              opacity: 0,
            }
          }
          animate={
            isDesktop && {
              translateY: selectedPage >= pageId ? 0 : '100vh',
              opacity,
              transition: createTransition(selectedPage >= pageId ? 0.2 : 1),
            }
          }
          className="text-base font-medium text-center uppercase md:text-2xl text-main md:text-start">
          Crazy front end developer who want to explore every tech stack
        </motion.p>

        <motion.div
          initial={
            isDesktop && {
              translateY: '100vh',
              opacity: 0,
            }
          }
          animate={
            isDesktop && {
              translateY: selectedPage >= pageId ? 0 : '100vh',
              opacity,
              transition: createTransition(selectedPage >= pageId ? 0.3 : 1),
            }
          }
          className="flex flex-wrap justify-center gap-4 pb-4">
          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <SiJavascript color="#a8a8a9" size={50} />
            <span>JavaScript</span>
          </span>

          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <SiTypescript color="#a8a8a9" size={50} />
            <span>TypeScript</span>
          </span>

          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <RiReactjsFill color="#a8a8a9" size={50} />
            <span>ReactJs</span>
          </span>

          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <TbBrandNextjs color="#a8a8a9" size={50} />
            <span>NextJs</span>
          </span>

          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <FaNode color="#a8a8a9" size={50} />
            <span>NodeJs</span>
          </span>

          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <FaDatabase color="#a8a8a9" size={50} />
            <span>Database</span>
          </span>
          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <FaSass color="#a8a8a9" size={50} />
            <span>Sass</span>
          </span>
          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <SiTailwindcss color="#a8a8a9" size={50} />
            <span>TailwindCSS</span>
          </span>
          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <FaGitlab color="#a8a8a9" size={50} />
            <span>GitLab</span>
          </span>
          <span className="flex flex-col items-center gap-2 text-sm text-gray-300 ">
            <FaGithub color="#a8a8a9" size={50} />
            <span>GitHub</span>
          </span>
        </motion.div>

        <motion.div
          initial={
            isDesktop && {
              translateY: '100vh',
              opacity: 0,
            }
          }
          animate={
            isDesktop && {
              translateY: selectedPage >= pageId ? 0 : '100vh',
              opacity,
              transition: createTransition(selectedPage >= pageId ? 0.4 : 1),
            }
          }
          className="space-y-3 text-start">
          <p className="flex items-center gap-3 ">
            <span className="text-main">
              <AiTwotoneThunderbolt />
            </span>
            Develop highly interactive Front end / User Interfaces for your web.
          </p>
          <p className="flex items-center gap-3">
            <span className="text-main">
              <AiTwotoneThunderbolt />
            </span>
            I use web technologies such as HTML, CSS, JavaScript,Typescript, ReactJs and NextJs to create responsive user
            interfaces for different devices.
          </p>
          <p className="flex items-center gap-3">
            <span className="text-main">
              <AiTwotoneThunderbolt />
            </span>
            I must ensure that the user interface runs smoothly and quickly on different devices and browsers.
          </p>
          <p className="flex items-center gap-3">
            <span className="text-main">
              <AiTwotoneThunderbolt />
            </span>
            I must test and debug user interfaces to ensure that they work well on different browsers and devices.
          </p>
        </motion.div>
      </div>

      <div className="absolute z-10 bottom-[-30rem] right-[-30rem] opacity-80 ">
        <CircleDecorator />
      </div>
    </motion.section>
  );
}
