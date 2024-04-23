import { CallsApi } from '@api';
import { CommonTable } from '@components/common/table/CommonTable';
import { useHeaderSearch } from '@hooks';
import { ICall } from '@interfaces/calls.type';
import { showAppToast } from '@utils';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CallsModule = () => {
  const [callsData, setCallsData] = useState<ICall[]>([]);
  const { searchContent } = useHeaderSearch();
  const [searchParams] = useSearchParams();

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
      // render: (city: any) => city.cityName,
    },
    {
      title: 'Kết thúc',
      dataIndex: 'end',
      key: 'end',
      // render: (venue: any) => venue.venueName,
    },
    {
      title: `Thời lượng gọi`,
      dataIndex: 'duration',
      key: 'duration',
      // render: (sport: any) => sport.sportName,
    },
    {
      title: `Ghi âm`,
      dataIndex: 'record',
      key: 'record',
      // render: (league: any) => league.leagueName,
    },
    // {
    //   title: t('action'),
    //   dataIndex: 'action1',
    //   key: 'action1',
    //   render: (_: any, record: any) => (
    //     <Space size="middle">
    //       <Dropdown
    //         overlay={
    //           <Menu>
    //             <Menu.Item
    //               key="edit"
    //               icon={<EditIcon />}
    //               onClick={() => handleEdit(record)}
    //             >
    //               {t('table.edit')}
    //             </Menu.Item>
    //             <Menu.Item
    //               key="duplicate"
    //               icon={<DuplicateIcon />}
    //               onClick={() => onDuplicate(record.eventid)}
    //             >
    //               {t('table.duplicate')}
    //             </Menu.Item>
    //             <Menu.Item
    //               key="delete"
    //               icon={<DeleteIcon />}
    //               onClick={() => onDeleteRow(record)}
    //             >
    //               {t('table.delete')}
    //             </Menu.Item>
    //           </Menu>
    //         }
    //         placement="bottomRight"
    //       >
    //         <div
    //           style={{
    //             cursor: 'pointer',
    //           }}
    //         >
    //           <EllipsisOutlined />
    //         </div>
    //       </Dropdown>
    //     </Space>
    //   ),
    // },
  ];
  return (
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
  );
};

export default CallsModule;
