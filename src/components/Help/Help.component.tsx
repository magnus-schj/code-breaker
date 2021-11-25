import React, { FC } from "react";
import "./Help.styles.css";
import { motion, Variants } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Card, CardContent, IconButton, Typography } from "@mui/material";

const dropIn: Variants = {
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
      stiffness: 500,
      damping: 100,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface Props {
  handleClose: () => void;
}

const HelpComponent: FC<Props> = ({ handleClose }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex: 9001 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Card style={{ padding: "1rem", margin: "1rem" }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h3" color="initial" gutterBottom>
                Help
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="body1" color="initial">
              Place colours in the emoty boxes, and press submit. The attempt
              will be displayed, with the colour combination, how many correct
              colours (white square), and how many correct positions (black
              square)
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default HelpComponent;
