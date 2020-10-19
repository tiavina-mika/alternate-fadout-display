import * as React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { createUseStyles } from "react-jss";

const variants = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const useStyles = createUseStyles({

  block: {
    fontSize: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'sans-serif',
    letterSpacing: 10,
    backgroundColor: 'red',
    position: 'absolute',
  }
})

type Props = { animate?: boolean; text: string };
const Fadeout = ({ animate, text }: Props) => {
  const classes = useStyles();

  return (
      <motion.div
        variants={variants}
        initial={animate ? 'show' : 'hidden'}
        animate={animate ? 'hidden' : 'show'}
        transition={{ duration: 1 }}
        className={classes.block}
      >
        {text}
      </motion.div>
  );
}

export default Fadeout;