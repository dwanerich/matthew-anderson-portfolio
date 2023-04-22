import React from 'react';
import { Header } from './Header';
import classes from './contact.module.css';
import matthewImg from '../img/bio-pic.jpg';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
  return (
    <div className={classes.contactBody}>
      <div className={classes.text_area}>
        <Header />

        <h1>Contact Me</h1>

        <div className={classes.form}>
          <TextField
            className={classes.field}
            id="standard-basic"
            fullWidth
            label="Name"
            variant="standard"
          />

          <TextField
            className={classes.field}
            id="standard-basic"
            fullWidth
            label="Email"
            variant="standard"
          />

          <TextField
            className={classes.field}
            id="outlined-multiline-static"
            label="Message"
            fullWidth
            multiline
            rows={3}
            placeholder="Enter message here..."
            variant="standard"
          />
          <Button className={classes.button}>
            Hit Me Up &nbsp;{' '}
            <SendIcon fontSize="12px" className={classes.icon} />
          </Button>
        </div>
      </div>
      <div className={classes.img_cont}>
        <img src={matthewImg} alt="ariana" />
      </div>
    </div>
  );
};
