import Button from '@/common/button';
import CircleDecorator from '@/common/circle-decorator';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import {motion, useInView} from 'framer-motion';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

import {ANIM_DURATION} from '@/config/constants';
import {useListenPageChange} from '@/hook/useListenPageChange';
import {nextPage, selectedPageSelector, setScrolling} from '@/store/globalSlice';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {URL_FACEBOOK, URL_GITHUB, URL_INSTAGRAM, URL_LINKEDIN} from '../../config/constants';
import {createTransition} from '../../utils/baseAnim';

export default function HomePage() {
  const iconHome = 'duration-300 cursor-pointer hover:text-secondary-20';

  const pageId = 0;
  const selectedPage = useSelector(selectedPageSelector);
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const transition = createTransition();
  const opacity = selectedPage === pageId ? 1 : 0;
  const isInView = useInView(containerRef, {amount: 'all'});

  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);

  const [scale, setScale] = useState(1);
  const [widthImg, setWidthImg] = useState(350);
  const [heightImg, setHeightImg] = useState(400);

  useEffect(() => {
    if (isDesktop) {
      setScale(1.086);
      setWidthImg(350);
      setHeightImg(400);
    } else {
      setScale(0.946);
      setWidthImg(250);
      setHeightImg(300);
    }
  }, [isDesktop]);

  useListenPageChange(
    () => {
      if (isDesktop) {
        if (selectedPage === pageId) {
          dispatch(setScrolling(true));
          dispatch(nextPage());
          setTimeout(() => dispatch(setScrolling(false)), ANIM_DURATION + 200);
        }
      }
    },
    () => {}
  );

  return (
    <motion.section
      ref={containerRef}
      initial={isDesktop && {opacity: 0}}
      animate={isDesktop && {opacity, transition}}
      className="relative w-full h-full pt-[4.6875rem] px-6 md:px-32 ">
      <div className="absolute z-10 top-[-36rem] left-[-39rem]">
        <CircleDecorator scale={scale} blur={!isDesktop ? 8 : 10.2} />
      </div>
      <div className="w-full h-full flex-center">
        <motion.div className="flex flex-col items-center md:flex-row md:flex-1">
          <div className="flex flex-col items-center flex-1 gap-3 mb-8 text-white md:gap-4 md:items-start">
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
                  transition,
                }
              }
              className="inline-block text-sm px-3 py-2 font-semibold rounded-md bg-title-home md:text-[1.125rem] md:leading-5">
              Welcome to my portfolio
            </motion.p>

            <motion.p
              initial={
                isDesktop && {
                  translateY: '110vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage >= pageId ? 0 : '110vh',
                  opacity,
                  transition: createTransition(0.075),
                }
              }
              className="w-[21rem] text-3xl font-bold tracking-wide md:text-[3.25rem] md:leading-[4rem] md:w-full">
              Hi! I am <span className="text-main">Quang Khai</span> Frontend Developer
            </motion.p>

            <motion.p
              initial={
                isDesktop && {
                  translateY: '120vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage >= pageId ? 0 : '120vh',
                  opacity,
                  transition: createTransition(0.15),
                }
              }
              className="text-sm font-medium tracking-wide md:text-lg ">
              A passionate Front-end Developer 🚀 having an experience of building Web with JavaScript / TypeScript / ReactJs /
              NextJs / NodeJs and some other cool libraries and frameworks.
            </motion.p>

            <motion.div
              initial={
                isDesktop && {
                  translateY: '120vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage >= pageId ? 0 : '120vh',
                  opacity,
                  transition: createTransition(0.225),
                }
              }
              className="flex gap-3 pb-3 rounded-md">
              <Link href={URL_GITHUB} target="_blank">
                <FaGithub size={30} className={iconHome} />
              </Link>
              <Link href={URL_LINKEDIN} target="_blank">
                <FaLinkedin size={30} className={iconHome} />
              </Link>
              <Link href={URL_FACEBOOK} target="_blank">
                <FaFacebook size={30} className={iconHome} />
              </Link>

              <AiOutlineMail size={30} className={iconHome} />

              <Link href={URL_INSTAGRAM} target="_blank">
                <FaInstagram size={30} className={iconHome} />
              </Link>
            </motion.div>

            <motion.div
              initial={
                isDesktop && {
                  translateY: '120vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage >= pageId ? 0 : '120vh',
                  opacity,
                  transition: createTransition(0.3),
                }
              }
              className="flex items-start gap-2">
              <Button text="Contact me" kind="solid" />
              <Button text="See my CV" kind="outlined" />
            </motion.div>
          </div>

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
                transition,
              }
            }
            className="relative flex-1 flex-center">
            <Image
              priority
              quality={100}
              src={'/home/avatar.png'}
              alt="home background"
              width={widthImg}
              height={heightImg}
              className="z-10"
            />
            <div
              className="absolute bg-title-home  bottom-0 rounded-tr-full  rounded-tl-full z-5 md:right-30
             md:w-[21.875rem] md:h-[29rem] w-[15.625rem] h-[22rem]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
