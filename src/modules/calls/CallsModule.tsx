import { CallsApi } from '@api';
import { IMAGES } from '@assets';
import { CommonTable } from '@components/common/table/CommonTable';
import { useHeaderButton, useHeaderSearch } from '@hooks';
import { ICall } from '@interfaces/calls.type';
import CallsCreateEditModule from '@modules/calls/CallsCreateEditModule';
import { showAppToast } from '@utils';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CallsModule = () => {
  const [callsData, setCallsData] = useState<ICall[]>([]);
  const { searchContent } = useHeaderSearch();
  const { setType } = useHeaderButton();
  const [searchParams] = useSearchParams();
  const [currentCall, setCurrentCall] = useState<ICall>();

  const searchContentByPhoneNumber = async (search: string) => {
    try {
      const res: any = await CallsApi.searchData(search);
      if (res) {
        setCallsData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  const handleDeleteCall = async (callId: number) => {
    try {
      const res: any = await CallsApi.deleteCallById(callId);
      if (res) {
        getCallData();
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  async function getCallData() {
    try {
      const res: any = await CallsApi.getCallsData();
      if (res) {
        setCallsData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  }

  // at present just with statusId
  const filterDataById = async () => {
    try {
      const res: any = await CallsApi.filterData(
        Number(searchParams.get('statusId')),
      );
      if (res) {
        setCallsData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  useEffect(() => {
    getCallData();
  }, []);

  useEffect(() => {
    if (searchContent === '') {
      getCallData();
      return;
    }
    searchContentByPhoneNumber(searchContent);
  }, [searchContent]);

  useEffect(() => {
    if (!searchParams.get('statusId')) {
      getCallData();
      return;
    }
    filterDataById();
  }, [searchParams]);

  const columns = [
    {
      title: 'STT.',
      dataIndex: 'stt',
      key: 'stt',
      render: (record: any) => (record > 10 ? record : `00${record}`),
    },
    {
      title: 'ID cuộc gọi',
      dataIndex: 'callId',
      key: 'callId',
    },
    {
      title: 'Trạng thái cuộc gọi',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: `Thời gian`,
      dataIndex: 'callDate',
      key: 'callDate',
    },
    {
      title: `Bắt đầu`,
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'Kết thúc',
      dataIndex: 'end',
      key: 'end',
    },
    {
      title: `Thời lượng gọi`,
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: `Ghi âm`,
      dataIndex: 'record',
      key: 'record',
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="small">
          <button
            onClick={() => {
              setCurrentCall(record);
              setType('edit');
            }}
          >
            <img
              src={IMAGES.IconEdit}
              alt="edit"
              className="!h-[40px] cursor-pointer"
            />
          </button>
          <button>
            <img
              onClick={() => handleDeleteCall(record.callId)}
              src={IMAGES.IconUnseen}
              alt="edit"
              className="!h-[40px] cursor-pointer"
            />
          </button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div>
        <CommonTable
          columns={columns}
          onDuplicate={() => {}}
          dataSource={callsData}
          onDeleteRow={() => {}}
          totalPages={callsData.length}
          totalNumberOfElement={0}
          onPageChange={() => {}}
        />
      </div>
      <CallsCreateEditModule
        onSuccess={getCallData}
        callData={currentCall}
      />
    </>
  );
};

export default CallsModule;
