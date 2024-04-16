import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

function NavLink({ href, title }: Props) {
  return (
    <Link
      className="block py-2 pl-3 pr-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      href={href}
    >
      {title}
    </Link>
  );
}

export default NavLink;
