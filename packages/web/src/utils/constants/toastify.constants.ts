import { toast } from 'react-toastify';

export const toatifyNotification = (type: 'success' | 'error', message: string) => {
  toast[type](message, {
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
