'use client';

import { Icon } from '@iconify/react';

type IconifyProps = {
  icon: string;
  height?: number;
  width?: number;
  style?: React.CSSProperties;
};

export const Iconify = ({ icon, height = 20, width = 20, style }: IconifyProps) => {
  return <Icon icon={icon} height={height} width={width} style={style} />;
};
