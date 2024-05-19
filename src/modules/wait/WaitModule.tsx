import { WaitApi } from '@api/waitApt';
import { IMAGES } from '@assets';
import { CommonTable } from '@components/common/table/CommonTable';
import { useHeaderButton } from '@hooks';
import { IWait } from '@interfaces';
import { showAppToast } from '@utils';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WaitModule = () => {
  const [waitData, setWaitData] = useState<IWait[]>([]);

  async function getWaitData() {
    try {
      const res: any = await WaitApi.getWaitData();
      if (res) {
        setWaitData(res);
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  }

  const handleDeleteWaitdata = async (userId: number | string) => {
    try {
      const res: any = await WaitApi.deleteWait(userId);
      if (res) {
        showAppToast('Xóa thành công!', 'success');
        getWaitData();
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  };

  const handleAcceptWait = async (userId: number | string) => {
    try {
      const res: any = await WaitApi.acceptWait(userId);
      if (res) {
        showAppToast('Phê duyệt thành công!', 'success');
        getWaitData();
      }
    } catch (error) {
      showAppToast(error, 'error');
    }
  };

  useEffect(() => {
    getWaitData();
  }, []);

  const columns = [
    {
      title: 'STT.',
      dataIndex: 'stt',
      key: 'stt',
      render: (record: any) => (record > 10 ? record : `00${record}`),
    },
    {
      title: 'ID người dùng',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Tài Khoản',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: `Email`,
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: `Mật khẩu`,
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    },

    {
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => {
        return (
          <Space size="small">
            <img
              src={IMAGES.IconCheck}
              alt="edit"
              className="!h-[40px] cursor-pointer"
              onClick={() => handleAcceptWait(record.userId)}
            />
            <img
              src={IMAGES.IconDelete}
              alt="edit"
              className="!h-[40px] cursor-pointer"
              onClick={() => handleDeleteWaitdata(record.userId)}
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
        dataSource={waitData}
        onDeleteRow={() => {}}
        totalPages={waitData.length}
        totalNumberOfElement={0}
        onPageChange={() => {}}
      />
    </ModuleWrapper>
  );
};

const ModuleWrapper = styled.div<{ $userStatus?: string }>`
  width: 100%;
`;

export default WaitModule;
