import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 722,
  height: 304,
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  p: 4,
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