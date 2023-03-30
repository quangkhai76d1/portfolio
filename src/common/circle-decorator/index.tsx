import cx from 'classnames';

interface CircleDecoratorProps {
  className?: string;
  noBorder?: boolean;
  scale?: number;
  blur?: number;
  opacity?: number;
}

const CircleDecorator = ({className, noBorder, scale = 1, blur = 20, opacity = 0.4}: CircleDecoratorProps) => {
  const clsCenter = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const clsBorder = cx('border-secondary-50 rounded-full border-[0.2rem]', {'border-none': noBorder});

  const fontSize = `${120 * scale}rem`;
  const filter = `blur(${blur}rem)`;

  return (
    <div style={{fontSize}} className={cx(`w-[1em] h-[1em] relative`, className)}>
      <div className={cx(clsCenter, clsBorder, 'w-[1em] h-[1em] opacity-12')} />
      <div className={cx(clsCenter, clsBorder, 'w-[0.75em] h-[0.75em] opacity-10')} />
      <div className={cx(clsCenter, clsBorder, 'w-[0.5em] h-[0.5em] opacity-12')} />
      <div style={{filter, opacity}} className={cx(clsCenter, clsBorder, 'w-[0.4em] h-[0.4em] bg-secondary-50')} />
    </div>
  );
};

export default CircleDecorator;
