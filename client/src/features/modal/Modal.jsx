import { AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const Modal = ({ children, context }) => {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  return (
    <div>
        {context.isOpen &&
          <Backdrop onClick={context.handleClose}>
            <motion.div
              className="modal"
              onClick={e => e.stopPropagation()}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {children}
            </motion.div>
          </Backdrop>
        }
    </div>
  );
};

export default Modal;
