import { ToastContainer } from 'react-toastify';

export const AppToast: React.FC = () => {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      limit={2}
      style={{ fontSize: '1.6rem' }}
    />
  );
};
