import { Help } from "@mui/icons-material";
import { AppBar, Toolbar, Button, IconButton, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useContext, useState } from "react";
import HelpComponent from "./Help/Help.component";
import ThemeButton from "./ThemeButton.component";

interface Props {
  gameInitialized: boolean;
  setGameInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<Props> = ({ gameInitialized, setGameInitialized }) => {
  const theme = useTheme();
  const [helpOpen, setHelpOpen] = useState(false);
  const handleClick = () => {
    setGameInitialized(false);
  };

  const onMotionClick = () => {
    setHelpOpen(!helpOpen);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <span style={{ flexGrow: 1 }}>
            {gameInitialized && (
              <Button
                sx={{
                  background: theme.palette.secondary.main,
                  "&:hover": {
                    background: theme.palette.secondary.light,
                  },
                }}
                onClick={handleClick}
                variant="contained"
              >
                Quit
              </Button>
            )}
          </span>
          <motion.div className="motion-container" onClick={onMotionClick}>
            <IconButton color="default" aria-label="help">
              <Help />
            </IconButton>
          </motion.div>
          <ThemeButton />
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
