import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const BTN_BASE_VARIANTS = new Set([
  'orange',
  'outline-navy',
  'whatsapp',
  'ghost',
  'outline-hp',
  'nav',
  'pill',
  'navy',
  'gray',
  'outline-white',
]);

export default function GlassButton({
  variant = 'orange',
  size = 'md',
  className = '',
  children,
  type = 'button',
  as = 'button',
  href,
  disabled,
  onClick,
  ...rest
}) {
  const btnRef = useRef(null);
  const [droplet, setDroplet] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback((event) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDroplet({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setDroplet((prev) => ({ ...prev, visible: false }));
  }, []);

  const classes = [
    BTN_BASE_VARIANTS.has(variant) ? 'btn' : '',
    'glass-btn',
    `glass-btn--${variant}`,
    size === 'lg' ? 'btn--lg' : '',
    size === 'sm' ? 'glass-btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sharedProps = {
    ref: btnRef,
    className: classes,
    onClick,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: disabled ? undefined : { scale: 0.97 },
    ...rest,
  };

  const content = (
    <>
      <span
        className={`glass-btn__droplet${droplet.visible ? ' glass-btn__droplet--active' : ''}`}
        aria-hidden="true"
        style={{
          left: `${droplet.x}px`,
          top: `${droplet.y}px`,
        }}
      />
      <span className="glass-btn__shine" aria-hidden="true" />
      <span className="glass-btn__label">{children}</span>
    </>
  );

  if (as === 'a') {
    return (
      <motion.a href={href} {...sharedProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} {...sharedProps}>
      {content}
    </motion.button>
  );
}
