import CallsCreateEditModule from '@modules/calls/CallsCreateEditModule';
import CallsModule from '@modules/calls/CallsModule';

export const CallsPage = () => {
  return (
    <>
      <CallsModule />
      <CallsCreateEditModule />
    </>
  );
};

export default CallsPage;
