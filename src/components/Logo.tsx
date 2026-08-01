import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'bronze';
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  iconOnly = false,
}) => {
  // Color mappings matching Beaufort Strategy Group brand palette
  const strokeColor =
    variant === 'light'
      ? '#EFECE6'
      : variant === 'bronze'
      ? '#C5A880'
      : '#1C1917';

  const textColor =
    variant === 'light'
      ? '#FAF8F5'
      : variant === 'bronze'
      ? '#C5A880'
      : '#1C1917';

  const subtitleColor =
    variant === 'light'
      ? '#C5A880'
      : variant === 'bronze'
      ? '#9A7B4F'
      : '#57534E';

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Interlocking geometric dual square symbol matching uploaded logo */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* First rounded square (straight orientation) */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="14"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Second rounded square (rotated 45 degrees, creating diamond star shape) */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="14"
          transform="rotate(45 50 50)"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {!iconOnly && (
        <div className="flex items-center gap-3.5">
          {/* Vertical divider line */}
          <div
            className="h-8 w-[1.5px] rounded-full opacity-80"
            style={{ backgroundColor: strokeColor }}
          />

          {/* Stacked Beaufort / Strategy typography matching brand image */}
          <div className="flex flex-col leading-tight select-none">
            <span
              className="font-serif text-[19px] tracking-[0.03em] font-medium transition-colors"
              style={{ color: textColor }}
            >
              Beaufort
            </span>
            <span
              className="font-serif text-[17px] tracking-[0.05em] font-light transition-colors -mt-0.5"
              style={{ color: subtitleColor }}
            >
              Strategy
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
