import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import React from 'react';

function NotificationComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
        setOpen(false);
        const requestOptions = {
            method: 'POST',
            headers:{'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
                        title:  'Banque Centrale Populaire',
                        body:   'Le code dauthentification de votre achat sur internet du 27/02/2024 de 150 MAD est: 123456',
                        token:  'dLbbbRxoTOy_idRudhcJPr:APA91bHVO58NguU8fCdD_9FTTeEabQ4xMina5Ry8QAGeWsnOTN7aZMetfEgpqgRNix22UfZ31O15lfp6K3WKkAA24LGSbnImkJ-VT5J_cQ4Z4tn9g0aKZkaSHGKu63eFRoBl9BljRG0q'
                    })
        };
        fetch('http://localhost:8080/notification', requestOptions);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Envoyer la notification
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Banque Centrale Populaire</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Le code d'authentification de votre achat sur internet du 27/02/2024 de 150 MAD est: <code>123456</code>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NotificationComponent;
