import { Button, TextField } from '@mui/material'
import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MyModal() {
  const firstInput = useRef<HTMLInputElement>(null);
  const secondInput = useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function sendValue() {
  }

  return (
    <>
      {/* <Button
        variant="outlined"
        color="info"
        onClick={() => sendValue()}>
        Use text
      </Button> */}
      <TextField
        label='text...'
        inputRef={firstInput}
        sx={{
          backgroundColor: 'pink'
        }}
      />
      <TextField
        label='text...'
        inputRef={secondInput}
        sx={{
          backgroundColor: 'pink'
        }}
      />
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" color={"red"} component="h2">
            {firstInput.current?.value}
            </Typography>
            <Typography id="modal-modal-description" color={"black"} sx={{ mt: 2 }}>
              {secondInput.current?.value}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}


export default MyModal