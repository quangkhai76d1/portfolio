import Image from 'next/image';
import {BiSend} from 'react-icons/bi';

export interface experienceItemProps {
  id?: number;
  title: string;
  srcLogo: string;
  position: string;
  time: string;
  description: {
    title: string;
    desc1: string;
    desc2: string;
  };
}

export default function ExperienceItem({title, srcLogo, position, time, description}: experienceItemProps) {
  return (
    <div className="flex flex-col items-center border-[0.0625rem] border-solid border-gray-500 rounded-lg shadow-md shadow-gray-500 outline-0 md:flex-1 lg:min-h-[30.375rem] md:min-h-[26.375rem] min-h-[23.375rem]">
      <div className="relative w-full bg-exp-bg h-[8rem] flex-center rounded-tr-lg rounded-tl-lg">
        <span className="text-center">
          <h3 className="text-2xl font-semibold text-white lg:text-[1.75rem]">{title}</h3>
        </span>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-[-32.03125%] p-4 bg-slate-100 rounded-full">
          <Image src={srcLogo} alt={`Logo ${title}`} className="" quality={100} width={50} height={50} />
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 p-4 mt-8 text-center text-white md:overflow-hidden xl:p-6">
        <h5 className="font-medium text-gray-300 uppercase lg:h-[3rem] xl:h-6">{position}</h5>
        <h5 className="text-sm md:text-base lg:h-[3rem] xl:h-6">{time}</h5>
        <p className="w-full text-sm font-medium text-center md:h-12 xl:text-base">{description.title}</p>
        <div className="flex flex-col items-start list-none text-start">
          <span className="flex gap-2">
            <span>
              <BiSend size={20} color="#1de6e3" />
            </span>
            <span className="inline-block h-[3rem] text-xs xl:text-sm">{description.desc1}</span>
          </span>
          <span className="flex gap-2">
            <span>
              <BiSend size={20} color="#1de6e3" />
            </span>

            <span className="inline-block text-xs xl:text-sm">{description.desc2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
