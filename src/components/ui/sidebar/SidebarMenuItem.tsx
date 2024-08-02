import { ElementType } from "react";
import Link from "next/link";

interface Props {
  Icon: ElementType;
  title: string;
  href: string;
  size?: number;
}

export const SidebarMenuItem = ({ Icon, title, href, size = 30 }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
    >
      <Icon size={size} />
      <span className="ml-3 text-xl">{title}</span>
    </Link>
  );
};
