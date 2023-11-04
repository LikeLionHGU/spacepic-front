import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import Img from './GalleryView';

function Modal({ open, onClose, selectedPhoto }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Photo Details</DialogTitle>
      <DialogContent>
        {selectedPhoto && (
          <>
            <Img src={selectedPhoto.photoUrl} alt={selectedPhoto.desc} />
            <p>{selectedPhoto.desc}</p>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
