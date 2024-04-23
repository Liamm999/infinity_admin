import React, { useEffect } from 'react';
import { Table, Space, Dropdown, Menu, Empty } from 'antd';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { APP_COLORS } from '@themes';
import { DeleteIcon, DuplicateIcon, EditIcon } from '@components';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '@assets';
import { useTranslation } from 'react-i18next';
import { ICall } from '@interfaces/calls.type';

interface IProps {
  dataSource: ICall[];
  columns: any[];
  onDeleteRow: (value: any) => void;
  totalPages?: number | 1;
  totalNumberOfElement?: number | 0;
  onPageChange?: (value: any) => void;
  onDuplicate: (id: number) => void;
}

export const CommonTable = (props: IProps) => {
  const {
    dataSource,
    columns,
    onDeleteRow,
    totalPages,
    totalNumberOfElement,
    onPageChange,
    onDuplicate,
  } = props;
  const { t } = useTranslation();
  const tableProps: any = {
    scroll: dataSource?.length > 0 ? { x: 1500 } : {},
  };
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigate = useNavigate();

  const CustomEmpty = () => (
    <Empty
      image={IMAGES.confirmImage}
      imageStyle={{
        height: 60,
      }}
      description={<h4>{t('noData')}</h4>}
    />
  );

  const handlePrev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages ? totalPages : 1));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages ? totalPages : 1);
  };

  useEffect(() => {
    onPageChange && onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handleEdit = (record: any) => {
    navigate(``);
  };

  return (
    <StyledWrapTable>
      <Table
        dataSource={dataSource}
        columns={columns}
        locale={{ emptyText: <CustomEmpty /> }}
        pagination={false}
        {...tableProps}
      />
    </StyledWrapTable>
  );
};

const StyledWrapTable = styled.div`
  .ant-table-thead {
    background-color: ${APP_COLORS.midGray};
    > tr > th {
      border: none;
      font-weight: 600;
      font-size: 12px;
      color: black;
      background: none;
    }
  }
  .ant-table-tbody {
    > tr > td {
      font-weight: 500;
      font-size: 14px;
      color: #3d4042;
    }
    > tr:nth-child(2n) {
      background-color: ${APP_COLORS.pink};
    }
    > tr:nth-child(2n + 1) {
      background-color: ${APP_COLORS.lightGray};
    }
    > tr {
      > td {
        border: none;
      }
      > td:last-child {
        align-items: center;
      }
    }
  }
  .ant-table-pagination {
    border-radius: 8px;
    background-color: #fff;
    margin-top: 20px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
  }
  .ant-pagination-item {
    font-weight: 500;
    font-size: 16px;
    color: ${APP_COLORS.neutralColor400};
    &-active {
      background-color: ${APP_COLORS.blueBgLight};
      color: ${APP_COLORS.blueNormal};
      border-color: ${APP_COLORS.blueNormal};
    }
  }
  .wrap-pagination {
    display: flex;
  }
  .action {
    color: ${APP_COLORS.blue300};
    font-weight: 500;
    font-size: 16px;
    &:hover {
      color: ${APP_COLORS.blueNormal};
    }
  }
  .page {
  }
  .first-page {
    margin-right: 20px;
  }
  .last-page {
    margin-left: 20px;
  }
`;

// pagination={{
//   showSizeChanger: false,
//   pageSize: 10,
//   current: currentPage,
//   total: totalNumberOfElement,
//   itemRender: (current, type, originalElement) => {
//     if (type === 'prev') {
//       return (
//         <div className="wrap-pagination">
//           <div
//             onClick={handleFirstPage}
//             className={`action first-page ${
//               current === 1 ? 'active' : ''
//             }`}
//           >
//             {<DoubleLeftOutlined />}
//           </div>
//           <div
//             onClick={handlePrev}
//             className={`action ${current === 1 ? 'active' : ''}`}
//           >
//             <LeftOutlined />
//           </div>
//         </div>
//       );
//     }
//     if (type === 'next') {
//       return (
//         <div className="wrap-pagination">
//           <div
//             onClick={handleNext}
//             className={`action ${
//               current === totalPages ? 'active' : ''
//             }`}
//           >
//             <RightOutlined />
//           </div>
//           <div
//             onClick={handleLastPage}
//             className={`action last-page ${
//               current === totalPages ? 'active' : ''
//             }`}
//           >
//             {<DoubleRightOutlined />}
//           </div>
//         </div>
//       );
//     }
//     if (type === 'page') {
//       return (
//         <div
//           onClick={() => setCurrentPage(current)}
//           className={` ${current === currentPage ? 'active' : ''}`}
//         >
//           {current}
//         </div>
//       );
//     }

//     return originalElement;
//   },
// }}
