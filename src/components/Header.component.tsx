import { Help } from "@mui/icons-material";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useState } from "react";
import HelpComponent from "./Help/Help.component";
import ThemeSwitch from "./ThemeSwitch.component";

interface Props {
  gameInitialized: boolean;
  setGameInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<Props> = ({ gameInitialized, setGameInitialized }) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const handleClick = () => {
    setGameInitialized(false);
  };

  const onMotionClick = () => {
    setHelpOpen(!helpOpen);
  };
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <span style={{ flexGrow: 1 }}>
            {gameInitialized && (
              <Button onClick={handleClick} variant="contained">
                Quit
              </Button>
            )}
          </span>
          <motion.div className="motion-container" onClick={onMotionClick}>
            <IconButton color="default" aria-label="help">
              <Help />
            </IconButton>
          </motion.div>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      {/* help window */}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {helpOpen && <HelpComponent handleClose={() => setHelpOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
