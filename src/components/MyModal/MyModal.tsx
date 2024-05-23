import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  maxWidth: 722,
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  p: 3,
};

interface MainPageToolbarProps {
  open: boolean,
  handleClose: Function,
  children: React.ReactNode
}

const MyModal: React.FC<MainPageToolbarProps> = ({ open, handleClose, children }) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default MyModal;