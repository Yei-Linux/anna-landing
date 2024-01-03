import classNames from 'classnames';

type TBalloon = {
  fill: string;
  direction: 'left' | 'right';
  children: React.ReactNode;
};

export const Balloon = ({ fill, direction, children }: TBalloon) => {
  return (
    <div className="relative w-[354px] h-[279px]">
      <svg
        className="absolute left-0 top-0 z-0"
        width="354"
        height="279"
        viewBox="0 0 354 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            direction === 'left'
              ? 'M0.0648533 151.479C1.53037 63.1255 80.8226 -0.702631 184.086 1.01019C287.349 2.72301 368.561 13.5714 351.006 127.796C342.037 186.155 259.241 280.295 155.978 278.582C52.7153 276.869 -1.40066 239.832 0.0648533 151.479Z'
              : 'M356.511 136.383C350.192 224.522 267.512 283.897 164.499 276.512C61.486 269.126 -19.0072 253.831 4.79834 140.744C16.961 82.9661 104.805 -6.48147 207.818 0.903586C310.831 8.28864 362.829 48.2436 356.511 136.383Z'
          }
          fill={fill}
        />
      </svg>

      <div
        className={classNames('z-[2] h-[100%] relative flex', {
          'justify-end': direction === 'left',
          'justify-start': direction === 'right',
        })}
      >
        {children}
      </div>
    </div>
  );
};
