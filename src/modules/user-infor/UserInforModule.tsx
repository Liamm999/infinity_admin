import { CustomerApi, UserInforAPI } from '@api';
import { IMAGES } from '@assets';
import { AppSelect, DataTypeContainer } from '@components';
import { CommonTable } from '@components/common/table/CommonTable';
import { EUserAuthority, EUserStatus } from '@config';
import { useHeaderButton, useHeaderSearch } from '@hooks';
import { ICustomer } from '@interfaces/customer.type';
import { IUserInfor } from '@interfaces/userInfor.type';
import UserInforCreateEditModule from '@modules/user-infor/UserInfoCreateModule';
import { showAppToast } from '@utils';
import { getAuthorityColor } from '@utils/getAuthorityColor';
import { getCallStatus } from '@utils/getCallStatus';
import { getDataTypeColor } from '@utils/getDataTypeColor';
import { getUserStatusColor } from '@utils/getUserStatusColor';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export const statusOptions = [
  {
    label: EUserStatus.ACTIVE,
    value: EUserStatus.ACTIVE,
  },
  {
    label: EUserStatus.STOP,
    value: EUserStatus.STOP,
  },
  {
    label: EUserStatus.BREAK,
    value: EUserStatus.BREAK,
  },
];

export const authorityOptions = [
  {
    label: EUserAuthority.ADMIN,
    value: EUserAuthority.ADMIN,
  },
  {
    label: EUserAuthority.LEAD,
    value: EUserAuthority.LEAD,
  },
  {
    label: EUserAuthority.EMPLOYEE,
    value: EUserAuthority.EMPLOYEE,
  },
];

// interface IProps {}

const UserInforModule = () => {
  const [userInfor, setUserInfor] = useState<IUserInfor[]>([]);
  const [currentUserInfor, setCurrentUserInfor] = useState<IUserInfor>();
  const { setType } = useHeaderButton();

  async function getUserInfor() {
    try {
      const res: any = await UserInforAPI.getUserInforData();
      if (res) {
        setUserInfor(res);
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  }

  const updateStatus = async (id: string | number, status: EUserStatus) => {
    try {
      const res: any = await UserInforAPI.updateUserStatus(id, status);
      if (res) {
        getUserInfor();
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  };

  const updateAuthority = async (
    id: string | number,
    authority: EUserAuthority,
  ) => {
    try {
      const res: any = await UserInforAPI.updateUserAuthority(id, authority);
      if (res) {
        getUserInfor();
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  };

  const handleDeleteUserInfor = async (userId: number | string) => {
    try {
      const res: any = await UserInforAPI.deleteUserInforById(userId);
      if (res) {
        getUserInfor();
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  };

  useEffect(() => {
    getUserInfor();
  }, []);

  const columns = [
    {
      title: 'STT.',
      dataIndex: 'stt',
      key: 'stt',
      render: (_: any, record: any, index: number) =>
        index + 1 > 10 ? index + 1 : `0${index + 1}`,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (_: any, record: any) => (
        <SelectWrapper $userStatus={record.status}>
          <AppSelect
            value={record.status}
            options={statusOptions}
            onChange={value =>
              updateStatus(record.userId, value as EUserStatus)
            }
            className="status-option"
          />
        </SelectWrapper>
      ),
    },
    {
      title: `Vai trò`,
      dataIndex: 'authority',
      key: 'authority',
      render: (_: any, record: any) => (
        <SelectWrapper $authority={record.authority}>
          <AppSelect
            value={record.authority}
            options={authorityOptions}
            onChange={value =>
              updateAuthority(record.userId, value as EUserAuthority)
            }
            className="authority-option"
          />
        </SelectWrapper>
      ),
    },
    {
      title: 'ID nhân viên phụ trách',
      dataIndex: 'userId',
      key: 'userId',
    },
    // {
    //   title: `ID nhân viên phụ trách`,
    //   dataIndex: 'callId',
    //   key: 'callId',
    // },
    {
      title: 'Tên người dùng',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: `Email`,
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: `SĐT`,
    //   dataIndex: 'phoneNumber',
    //   key: 'phoneNumber',
    // },
    {
      title: 'Tài Khoản',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: `Mật khẩu`,
      dataIndex: 'password',
      key: 'password',
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => {
        return (
          <Space size="small">
            <img
              src={IMAGES.IconEdit}
              alt="edit"
              className="!h-[40px] cursor-pointer"
              onClick={() => {
                setCurrentUserInfor(record);
                setType('edit');
              }}
            />
            <img
              src={IMAGES.IconDelete}
              alt="edit"
              className="!h-[40px] cursor-pointer"
              onClick={() => handleDeleteUserInfor(record.userId)}
            />
          </Space>
        );
      },
    },
  ];
  return (
    <ModuleWrapper>
      <CommonTable
        columns={columns}
        onDuplicate={() => {}}
        dataSource={userInfor}
        onDeleteRow={() => {}}
        totalPages={userInfor.length}
        totalNumberOfElement={0}
        onPageChange={() => {}}
      />
      <UserInforCreateEditModule
        onSuccess={() => {
          setCurrentUserInfor(undefined);
          getUserInfor();
        }}
        onClose={() => setCurrentUserInfor(undefined)}
        userInfor={currentUserInfor}
      />
    </ModuleWrapper>
  );
};

const ModuleWrapper = styled.div<{ $userStatus?: string }>`
  width: 100%;
`;

const SelectWrapper = styled.div<{ $userStatus?: string; $authority?: string }>`
  .ant-select-selector {
    background-color: ${({ $userStatus, $authority }) => {
      if ($userStatus) {
        return `${getUserStatusColor($userStatus)} !important`;
      }
      return `${getAuthorityColor($authority)} !important`;
    }};
  }
`;

export default UserInforModule;
