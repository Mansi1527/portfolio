import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface HeaderAllProps {
  links: LinkItem[];
}

const HeaderAll: React.FC<HeaderAllProps> = ({ links }) => {
  return (
    <div className='bg-black text-white pb-10'>
      <div className='flex justify-between pt-10 px-10 text-gray-300'>
        <div>
          <p className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">Mansi Yadav</p>
        </div>
        <div className='flex gap-10 text-xl'>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="scale-100 hover:scale-150 ease-out duration-500">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderAll;
