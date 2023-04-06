import {AnimatePresence, motion} from 'framer-motion';

const animateVariant = {
  visible: {
    y: '0',
    opacity: 1,
  },
  none: {
    y: '-100%',
    opacity: 0.3,
  },
};

interface ErrorMessageProps {
  className?: string;
  showError?: boolean;
  message?: string;
  variant?: string;
}

const ErrorMessage = ({showError, message}: ErrorMessageProps) => {
  return (
    <AnimatePresence>
      {showError && message && (
        <motion.div
          initial="none"
          animate="visible"
          exit="none"
          transition={{duration: 0.3}}
          variants={animateVariant}
          className="text-sm text-red-500">
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
