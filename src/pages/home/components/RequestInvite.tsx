import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import SpecDialogTitle from './DialogTitle';

export default function RequestInvite() {
  const [open, setOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);

  const [serverError, setServerError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const companyName = 'Broccoli & Co.';

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  }

  const checkEmailEqual = (val: String) => {
    return val === getValues().email;
  }

  const onSubmit = (data: any) => {
    if (serverError) {
      setServerError('');
    }

    setLoading(true);

    axios.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", {
      name: encodeURI(data.name),
      email: encodeURI(data.email),
    }).then(data => {
      console.log('data', data);
      setOpen(false);
      setSuccessOpen(true);
    }).catch((err) => {
      if (err.response.status === 400) {
        setServerError('Error: Message from server xxx.');
      } else {
        setServerError('Error: Unknown Server Error.');
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  return (<div>
    <Button variant="outlined" onClick={handleClickOpen}>Request an invite</Button>
    <Dialog open={open} onClose={handleClose}>
      <SpecDialogTitle>Request An Invite </SpecDialogTitle>
      <DialogContent>
        <form>
          {/* <DialogContentText>
          To subscribe to this website, please enter your email address here.We
          will send updates occasionally.
        </DialogContentText> */}
          <TextField autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            {...register("name", { required: true, minLength: 3 })}
            error={!!errors.name}
            helperText={errors.name && "At least 3 character is required"}
          />
          <TextField autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            {...register("email")}
          />
          <TextField autoFocus
            margin="dense"
            id="confirmEmail"
            label="Confirm Email"
            type="email"
            fullWidth
            variant="standard"
            {...register("confirmEmail", { validate: checkEmailEqual })}
            error={!!errors.confirmEmail}
            helperText={errors.confirmEmail && "Please confirm your email."}
          />
        </form>
      </DialogContent>
      <DialogActions sx={{ padding: '14px 24px' }}>
        <Button variant="outlined" fullWidth onClick={handleSubmit(onSubmit)} disabled={loading} > {loading ? 'Loading. Please Wait' : 'Send'} </Button>
      </DialogActions>
      <DialogContent sx={{ marginBottom: 6, color: '#f44336', textAlign: 'center' }}>
        {serverError}
      </DialogContent>
    </Dialog>

    <Dialog open={successOpen} onClose={handleSuccessClose}>
      <SpecDialogTitle>All Done!</SpecDialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>You will be one of the xxxxxxxx.<br /> {companyName} when we launch. </DialogContent>
      <DialogActions sx={{ padding: '14px 24px' }}>
        <Button variant="outlined" fullWidth onClick={handleSuccessClose}> OK </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}
