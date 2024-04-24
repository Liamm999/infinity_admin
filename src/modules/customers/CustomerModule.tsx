import { CustomerApi } from '@api';
import { CommonTable } from '@components/common/table/CommonTable';
import { useHeaderSearch } from '@hooks';
import { ICustomer } from '@interfaces/customer.type';
import { showAppToast } from '@utils';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CustomerModule = () => {
  const [customerData, setCustomerData] = useState<ICustomer[]>([]);
  const { searchContent } = useHeaderSearch();
  const [searchParams] = useSearchParams();

  const searchContentByPhoneNumber = async (search: string) => {
    try {
      const res: any = await CustomerApi.searchData(search);
      if (res) {
        setCustomerData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  async function getCusData() {
    try {
      const res: any = await CustomerApi.getCustomerData();
      if (res) {
        setCustomerData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  }

  // at present just with statusId
  const filterDataById = async () => {
    try {
      const res: any = await CustomerApi.filterData(
        Number(searchParams.get('statusId')),
      );
      if (res) {
        setCustomerData(res);
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  useEffect(() => {
    getCusData();
  }, []);

  useEffect(() => {
    if (searchContent === '') {
      getCusData();
      return;
    }
    searchContentByPhoneNumber(searchContent);
  }, [searchContent]);

  useEffect(() => {
    if (!searchParams.get('statusId')) {
      getCusData();
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
      title: 'Kiểu dữ liệu',
      dataIndex: 'datatype',
      key: 'datatype',
    },
    {
      title: 'ID khách hàng',
      dataIndex: 'cusId',
      key: 'cusId',
    },
    {
      title: `SĐT`,
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: `Bắt đầu`,
      dataIndex: 'start',
      key: 'start',
      // render: (city: any) => city.cityName,
    },
    {
      title: 'Họ và tên khách hàng',
      dataIndex: 'cusName',
      key: 'cusName',
      // render: (venue: any) => venue.venueName,
    },
    {
      title: `ID nhân viên phụ trách`,
      dataIndex: 'callId',
      key: 'callId',
      // render: (sport: any) => sport.sportName,
    },
    {
      title: `Trạng Thái`,
      dataIndex: 'staId',
      key: 'staId',
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
        dataSource={customerData}
        onDeleteRow={() => {}}
        totalPages={customerData.length}
        totalNumberOfElement={0}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default CustomerModule;
