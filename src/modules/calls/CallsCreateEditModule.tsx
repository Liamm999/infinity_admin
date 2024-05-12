import { CallsApi } from '@api';
import { AppModal } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHeaderButton } from '@hooks';
import { ICreateCallRequest } from '@interfaces/calls.type';
import { CallsForm } from '@pages';
import { setLoading, useAppDispatch } from '@redux';
import { showAppToast } from '@utils';
import { FormCallSchema } from '@validations';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type TProps = {
  onSuccess: () => void;
  callData?: ICreateCallRequest;
};

const CallsCreateEditModule = ({ onSuccess, callData }: TProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setType, type } = useHeaderButton();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormCallSchema),
  });

  const { handleSubmit, reset } = form;

  const handleSubmitForm = handleSubmit(async value => {
    if (callData && callData.callId) {
      try {
        dispatch(setLoading(true));
        const body: ICreateCallRequest = {
          phoneNumber: value.phoneNumber,
          duration: value.callDuration,
          end: value.callEnd,
          start: value.callStart,
          callDate: value.callDate,
          description: value.callDescription,
          record: value.callRecord,
          staId: value.statusId,
        };

        const res: any = await CallsApi.editCallById(callData.callId, body);
        if (res.status === 200) {
          showAppToast('Create success', 'success');
          setType(undefined);
          reset();
          onSuccess();
        }
      } catch (error: any) {
        showAppToast(error?.response?.data, 'error');
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      try {
        dispatch(setLoading(true));
        const body: ICreateCallRequest = {
          phoneNumber: value.phoneNumber,
          duration: value.callDuration,
          end: value.callEnd,
          start: value.callStart,
          callDate: value.callDate,
          description: value.callDescription,
          record: value.callRecord,
          staId: value.statusId,
        };

        const res: any = await CallsApi.createCall(body);
        if (res.status === 200) {
          showAppToast('Create success', 'success');
          setType(undefined);
          reset();
          onSuccess();
        }
      } catch (error: any) {
        showAppToast(error?.response?.data, 'error');
      } finally {
        dispatch(setLoading(false));
      }
    }
  });

  useEffect(() => {
    reset({
      phoneNumber: callData?.phoneNumber,
      callDuration: callData?.duration as number,
      callEnd: callData?.end,
      callStart: callData?.start,
      callDate: callData?.callDate,
      callDescription: callData?.description,
      callRecord: callData?.record,
      statusId: callData?.staId,
    });
  }, [callData]);

  return (
    <AppModal
      containerClassname="w-max bg-white py-4"
      onClose={() => setType(undefined)}
      open={type === 'create' || type === 'edit'}
      title={type === 'create' ? 'Tạo cuộc gọi mới' : 'Sửa cuộc gọi'}
      haveCloseIcon
    >
      <CallsForm
        form={form}
        type={type}
        onSubmitForm={handleSubmitForm}
      />
    </AppModal>
  );
};

export default CallsCreateEditModule;
