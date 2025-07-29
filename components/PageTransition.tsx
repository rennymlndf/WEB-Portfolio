"use client"

import { AnimatePresence,motion } from "framer-motion"
import { usePathname } from "next/navigation"
interface Props {
  children: any;
}
const PageTransition : React.FC<Props> = ({children}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{opacity:1}}
          animate={{
            opacity:0,
            transition:{delay:0,duration:0.1,ease: "easeInOut"},
          }}
          className=" h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition