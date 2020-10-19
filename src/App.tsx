import * as React from "react";
import { useCycle } from "framer-motion";
import { createUseStyles } from "react-jss";

import Fadeout from "./Fadeout";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
})

const App = () => {
  const classes = useStyles();
  const [isNight, setIsNight] = useCycle(false, true);
  console.log(isNight)
  React.useLayoutEffect(() => {
    const timeoutId = setInterval(
        () => {
          setIsNight();
        },
        // the night last 4 seconds and the day 8s
        isNight ? 4000 : 8000
    );
    return () => clearInterval(timeoutId);
}, [isNight, setIsNight]);


  // const toggle = () => setIsNight(prev => !prev);
  return (
    <div className={classes.root}>
      <Fadeout text="DAY" animate={isNight} />
      <Fadeout text="NIGHT" animate={!isNight} />
    </div>
  );
}

export default App;