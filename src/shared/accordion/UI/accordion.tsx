import React, { FC, ReactNode } from 'react';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import cn from '~shared/utils/cn';

const cx = cn('accordion');

interface AccordionProps {
  title: ReactNode;
  children: ReactNode | undefined;
}
const Accordion: FC<AccordionProps> = (props) => {
  const { title, children } = props;

  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <div className={cx()}>
      <div className={cx('title', { hasContent: Boolean(children) })} onClick={() => setIsOpen()}>
        <div>{title}</div>
        {/* {children && <ArrowToggle direction={isOpen ? 'bottom' : 'right'} size={30} />} */}
      </div>
      <AnimatePresence initial={false}>
        {children && isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={cx('content')}>{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
