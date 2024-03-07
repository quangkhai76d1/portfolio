import LoadingButton from '@/common/button/button-loading';
import TextField from '@/common/text-field';
import {ANIM_DURATION, URL_FACEBOOK, URL_GITHUB, URL_INSTAGRAM, URL_LINKEDIN, USER_ID_KEY} from '@/config/constants';
import {useListenPageChange} from '@/hook/useListenPageChange';
import useMediaQuery, {TABLET_DESKTOP_QUERY} from '@/hook/useMediaQuery';
import {prevPage, selectedPageSelector, setScrolling} from '@/store/globalSlice';
import {createTransition} from '@/utils/baseAnim';
import emailjs from '@emailjs/browser';
import {yupResolver} from '@hookform/resolvers/yup';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import {ContactFormData} from './interface';
import {emailSchema, messageSchema, nameSchema} from './yupSchema';
import TextInput from '@/common/input/text-input';
import {Form} from 'antd';
import TextAreaInput from '@/common/input/textarea-input';

const ContactData = [
  {
    id: 1,
    label: 'Your Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
  },
  {
    id: 2,
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    id: 3,
    label: 'Message',
    name: 'message',
    type: 'text',
    placeholder: 'Enter your name',
  },
];

const ContactSchema = yup.object().shape({
  email: emailSchema,
  name: nameSchema,
  message: messageSchema,
});

export default function Contact() {
  const pageId = 4;
  const iconHome = 'duration-300 cursor-pointer hover:text-secondary-20';

  const selectedPage = useSelector(selectedPageSelector);
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery(TABLET_DESKTOP_QUERY);
  const opacity = selectedPage === pageId ? 1 : 0;

  const [isLoading, setIsLoading] = useState(false);

  useListenPageChange(
    () => {},
    () => {
      if (selectedPage === pageId) {
        dispatch(setScrolling(true));
        dispatch(prevPage());
        setTimeout(() => dispatch(setScrolling(false)), ANIM_DURATION + 400);
      }
    }
  );

  const {control, handleSubmit, reset} = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    const form = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send('service_iwinoss', 'template_yi1fe7p', form, USER_ID_KEY)
      .then(
        () => {
          toast.success('Thank you for contacting me!');
          reset();
        },
        (error) => {
          toast.error(error.text);
        }
      )
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      );
  };

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
      className="relative z-10 w-full h-full">
      <div className=" relative flex flex-col w-full h-full px-6 py-10 lg:flex-center lg:pt-[8.5rem] lg:pb-10">
        <motion.h1
          initial={
            isDesktop && {
              translateY: '100vh',
              opacity: 0,
            }
          }
          animate={
            isDesktop && {
              translateY: selectedPage === pageId ? 0 : '100vh',
              opacity,
              transition: createTransition(selectedPage === pageId ? 0.1 : 1),
            }
          }
          className="flex flex-col items-center gap-2 lg:absolute lg:top-[16%] lg:right-[17%] xl:right-[19%] lg:gap-3">
          <span className="text-center text-main text-[1.875rem] font-bold lg:text-[3rem]">Contact</span>
          <span className="font-semibold text-center text-gray-300 lg:text-[1.25rem]">Get In Touch</span>
        </motion.h1>

        <div className="w-full lg:flex-center">
          <div className="flex flex-col items-center w-full gap-3 px-4 py-4 lg:pb-4 lg:pt-0">
            <motion.div
              initial={
                isDesktop && {
                  translateY: '100vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage === pageId ? 0 : '100vh',
                  opacity,
                  transition: createTransition(selectedPage === pageId ? 0.1 : 1),
                }
              }
              className="max-w-[37.5rem] lg:max-w-[35.5]">
              <Image priority src={'/contact/contact.gif'} alt="Contact" width={540} height={400} />
            </motion.div>
            <motion.p
              initial={
                isDesktop && {
                  translateY: '100vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage === pageId ? 0 : '100vh',
                  opacity,
                  transition: createTransition(selectedPage === pageId ? 0.2 : 1),
                }
              }
              className="font-medium text-main text-[1.5rem] ">
              Reach Out to me!
            </motion.p>
            <motion.p
              initial={
                isDesktop && {
                  translateY: '100vh',
                  opacity: 0,
                }
              }
              animate={
                isDesktop && {
                  translateY: selectedPage === pageId ? 0 : '100vh',
                  opacity,
                  transition: createTransition(selectedPage === pageId ? 0.3 : 1),
                }
              }
              className="font-medium text-white">
              Just want to say hi? My inbox is open for all.
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
                  translateY: selectedPage === pageId ? 0 : '100vh',
                  opacity,
                  transition: createTransition(selectedPage === pageId ? 0.4 : 1),
                }
              }
              className="flex gap-3 pb-3 text-white rounded-md">
              <Link href={URL_GITHUB} target="_blank">
                <FaGithub size={30} className={iconHome} />
              </Link>
              <Link href={URL_LINKEDIN} target="_blank">
                <FaLinkedin size={30} className={iconHome} />
              </Link>
              <Link href={URL_FACEBOOK} target="_blank">
                <FaFacebook size={30} className={iconHome} />
              </Link>
              <Link href={URL_INSTAGRAM} target="_blank">
                <AiOutlineMail size={30} className={iconHome} />
              </Link>
              <Link href={URL_INSTAGRAM} target="_blank">
                <FaInstagram size={30} className={iconHome} />
              </Link>
            </motion.div>
          </div>

          <Form className="flex flex-col min-w-[322px] w-full mt-6 px-6" layout="vertical">
            <TextInput
              key="email"
              name="email"
              control={control as any}
              placeholder="Email"
              label="Your Email"
              type="text"
              className="!mb-6"
            />

            <TextInput
              key="name"
              name="name"
              control={control as any}
              placeholder="Name"
              label="Your Name"
              type="text"
              className="!mb-6"
            />

            <TextAreaInput
              key="message"
              name="message"
              control={control as any}
              placeholder="Message"
              label="Message"
              rows={4}
              className="!mb-6"
            />

            <LoadingButton isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
              Send message
            </LoadingButton>
          </Form>
        </div>
      </div>
    </motion.section>
  );
}
