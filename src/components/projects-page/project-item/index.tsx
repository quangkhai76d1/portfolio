import Image from 'next/image';
import Link from 'next/link';

export interface IProjectItemProps {
  title: string;
  url: string;
  desc: string;
  text: string;
  href: string;
}

export default function ProjectItem({title, url, desc, text, href}: IProjectItemProps) {
  return (
    <div className="border border-[#515154] rounded-lg flex flex-col items-center group  w-full shadow-lg shadow-[#515154] outline-none min-h-[27rem] md:min-h-[25.625rem] hover:border-main hover:transition-all hover:duration-1000 hover:shadow-main">
      <div className="relative mb-4 border-b-[0.0625rem] border-b-[#515154] w-full max-h-[13.5rem]">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-20 rounded-tl-lg rounded-tr-lg opacity-0 bg-slate-500 group-hover:opacity-60 group-hover:transition-opacity" />
        <h2 className="opacity-0 absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl w-full text-center group-hover:opacity-100 group-hover:duration-1400 transition-opacity z-30 ease-in-out">
          {title}
        </h2>
        <Image
          src={url}
          alt={`Project ${title}`}
          quality={100}
          priority
          width={500}
          height={215}
          className="rounded-lg h-[13.4375rem] z-10"
        />
      </div>
      <p className="px-5 pt-4 text-sm font-medium text-white lg:text-sm lg:h-[9.75rem] md:h-[4.75rem] xl:text-base">{desc}</p>
      <div className="px-4 py-5">
        <Link
          target="_blank"
          href={href}
          className="flex-center gap-5 px-[1.03125rem] py-[0.5625rem] rounded-[0.5625rem] text-base leading-[1.125rem] transition-colors whitespace-nowrap text-secondary-60 border border-secondary-60 hover:border-gray-300 hover:text-gray-300 cursor-pointer shadow-md shadow-secondary-60 hover:shadow-gray-300 lg:text-sm xl:text-base">
          {text}
        </Link>
      </div>
    </div>
  );
}
