import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/legacy/image';

import auth_bg_1 from '../../../public/auth_bg_1.jpg';
import auth_bg_2 from '../../../public/auth_bg_2.jpg';

export default function ImageSec({ isImageLeft }: { isImageLeft: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {isImageLeft ? (
        <motion.div
          key="image-left"
          className="absolute left-0 top-0 w-[62%] h-full"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={auth_bg_1}
            alt="login"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </motion.div>
      ) : (
        <motion.div
          key="image-right"
          className="absolute right-0 top-0 w-[62%] h-full"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={auth_bg_2}
            alt="signup"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
