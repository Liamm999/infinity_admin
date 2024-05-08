import { CustomerApi } from '@api';
import { IMAGES } from '@assets';
import { DataTypeContainer } from '@components';
import { CommonTable } from '@components/common/table/CommonTable';
import { useHeaderSearch } from '@hooks';
import { ICustomer } from '@interfaces/customer.type';
import { showAppToast } from '@utils';
import { getCallStatus } from '@utils/getCallStatus';
import { getDataTypeColor } from '@utils/getDataTypeColor';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

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
      align: 'center',
      render: (record: any) => (
        <DataTypeContainer $bgColor={getDataTypeColor(record)}>
          <p>{record}</p>
        </DataTypeContainer>
      ),
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
      render: (record: any) => (
        <DataTypeContainer $bgColor={getCallStatus(record).color}>
          {getCallStatus(record).status}
        </DataTypeContainer>
      ),
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="small">
          <img
            src={IMAGES.IconEdit}
            alt="edit"
            className="!h-[40px] cursor-pointer"
          />
          <img
            src={IMAGES.IconCoppy}
            alt="edit"
            className="!h-[40px] cursor-pointer"
          />
          <img
            src={IMAGES.IconUnseen}
            alt="edit"
            className="!h-[40px] cursor-pointer"
          />
        </Space>
      ),
    },
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
