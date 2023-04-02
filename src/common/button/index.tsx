import cx from 'classnames';

interface ButtonProps {
  kind?: 'outlined' | 'solid';
  className?: string;
  text: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({className, text, icon, disabled, onClick, kind = 'solid'}: ButtonProps) => {
  const baseCls =
    'flex justify-center items-center gap-5  px-[1rem] py-[0.625rem] rounded-[0.75rem] text-base leading-[1.125rem]';
  const outlinedCls = 'text-main border border-main';
  const solidCls = 'text-primary-05 bg-main';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      className={cx(baseCls, kind === 'outlined' ? outlinedCls : solidCls, className)}>
      {icon && <i className={cx(icon, 'text-[1.125rem]')} />}
      {<span className={cx('font-semibold', {'font-medium': icon})}>{text}</span>}
    </button>
  );
};

export default Button;
