import cx from 'classnames';
import Link from 'next/link';
import {ReactNode} from 'react';

interface LinkProps {
  kind?: 'outlined' | 'solid';
  className?: string;
  children?: ReactNode;
  icon?: string;
  replace?: boolean;
  href: string;
  tabIndex?: number;
}

const QKLink = ({className, children, icon, href, replace, tabIndex, kind = 'solid'}: LinkProps) => {
  const baseCls =
    'flex-center gap-5 px-[1.03125rem] py-[0.5625rem] rounded-[0.5625rem] text-base leading-[1.125rem] transition-colors whitespace-nowrap';
  const outlinedCls = 'text-main border border-main hover:border-secondary-80 hover:text-secondary-80';
  const solidCls = 'text-primary-05 bg-main hover:bg-secondary-80 border border-main';

  return (
    <Link tabIndex={tabIndex} replace={replace} href={href}>
      <a tabIndex={tabIndex} className={cx(baseCls, kind === 'outlined' ? outlinedCls : solidCls, className)}>
        {icon && <i className={cx(icon, 'text-[1.125rem]')} />}
        {<span className={cx('font-semibold ', {'font-medium': icon})}>{children}</span>}
      </a>
    </Link>
  );
};

export default QKLink;
