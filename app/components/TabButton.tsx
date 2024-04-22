import {motion} from 'framer-motion';

type Props = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const variants = {
  default: {width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}

function TabButton({ active, selectTab, children }: Props) {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div className='h-1 bg-primary-500 mt-2 mr-3' animate={active ? "active" : "default"} variants={variants}></motion.div>
    </button>
  );
}

export default TabButton;
