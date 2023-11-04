import { icons } from 'lucide-react';
import { FC } from 'react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

const Icon: FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
