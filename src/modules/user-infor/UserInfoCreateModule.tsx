import { CustomerApi, UserInforAPI } from '@api';
import { AppModal } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHeaderButton } from '@hooks';
import { IUserInfor } from '@interfaces/userInfor.type';
import { UserInfoForm } from '@pages/app/user-info/UserInfoForm';
import { setLoading, useAppDispatch } from '@redux';
import { showAppToast } from '@utils';
import { UserInforSchema } from '@validations';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type TProps = {
  onSuccess: () => void;
  onClose: () => void;
  userInfor?: IUserInfor;
};

const UserInforCreateEditModule = ({
  onSuccess,
  userInfor,
  onClose,
}: TProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setType, type } = useHeaderButton();

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      password: '',
      fullName: '',
      email: '',
      status: '',
      authority: '',
    },
    resolver: yupResolver(UserInforSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const handleSubmitForm = handleSubmit(async value => {
    const body = {
      userName: value.userName,
      password: value.password,
      fullName: value.fullName,
      email: value.email,
      status: value.status,
      authority: value.authority,
    };

    if (userInfor) {
      try {
        dispatch(setLoading(true));
        const res: any = await UserInforAPI.updateUserInfor(
          String(userInfor.userId),
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
    }
  });

  useEffect(() => {
    reset({
      userName: userInfor?.userName,
      password: userInfor?.password,
      fullName: userInfor?.fullName,
      email: userInfor?.email,
      status: userInfor?.status,
      authority: userInfor?.authority,
    });
  }, [userInfor]);

  return (
    <AppModal
      containerClassname="w-max bg-white py-4"
      onClose={() => {
        reset();
        onClose();
        setType(undefined);
      }}
      open={type === 'create' || type === 'edit'}
      title={type === 'create' ? 'Tạo nhân sự mới' : 'Sửa nhân sự'}
      haveCloseIcon
    >
      <UserInfoForm
        form={form}
        type={type}
        onSubmitForm={handleSubmitForm}
      />
    </AppModal>
  );
};

export default UserInforCreateEditModule;
