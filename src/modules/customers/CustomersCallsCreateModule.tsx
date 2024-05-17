import { CallsApi, CustomerApi } from '@api';
import { AppModal } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHeaderButton } from '@hooks';
import { ICreateCallRequest } from '@interfaces/calls.type';
import { ICreateCustomerRequest, ICustomer } from '@interfaces/customer.type';
import { CustomersForm } from '@pages/app/customers/CustomersForm';
import { setLoading, useAppDispatch } from '@redux';
import { showAppToast } from '@utils';
import { FormCustomerSchema } from '@validations';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type TProps = {
  onSuccess: () => void;
  onClose: () => void;
  customerData?: ICustomer;
};

const CustomersCreateEditModule = ({
  onSuccess,
  customerData,
  onClose,
}: TProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setType, type } = useHeaderButton();

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      callId: '',
      cusId: '',
      staId: '',
      cusName: '',
      datatype: '',
      phoneNumber: '',
    },
    resolver: yupResolver(FormCustomerSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const handleSubmitForm = handleSubmit(async value => {
    const body = {
      staId: value.staId,
      ...(!customerData && { cusId: value.cusId }),
      callId: value.callId,
      cusName: value.cusName,
      datatype: value.datatype,
      phoneNumber: value.phoneNumber,
    };

    if (customerData && customerData.callId) {
      try {
        dispatch(setLoading(true));
        const res: any = await CustomerApi.editCustomerById(
          customerData.cusId,
          body,
        );
        if (res) {
          showAppToast('Update success', 'success');
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
        const res: any = await CustomerApi.createCustomer(body);
        if (res) {
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
      callId: customerData?.callId,
      staId: customerData?.staId,
      cusName: customerData?.cusName,
      datatype: customerData?.datatype,
      phoneNumber: customerData?.phoneNumber,
    });
  }, [customerData]);

  return (
    <AppModal
      containerClassname="w-max bg-white py-4"
      onClose={() => {
        reset();
        onClose();
        setType(undefined);
      }}
      open={type === 'create' || type === 'edit'}
      title={type === 'create' ? 'Tạo khách hàng mới' : 'Sửa khách hàng'}
      haveCloseIcon
    >
      <CustomersForm
        form={form}
        type={type}
        onSubmitForm={handleSubmitForm}
      />
    </AppModal>
  );
};

export default CustomersCreateEditModule;
