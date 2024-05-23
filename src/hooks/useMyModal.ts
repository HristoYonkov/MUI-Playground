import { useState } from 'react';

interface UseMyModalProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
};

const useMyModal = (): UseMyModalProps => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return { open, handleOpen, handleClose };
};

export default useMyModal;