import { Space } from 'antd';
import styled from 'styled-components';
import { AppInput, AppText } from '@components';
import { APP_COLORS } from '@themes';
import { useLocation } from 'react-router-dom';
import { PATH_CALLS, PATH_CUSTOMERS } from '@routes';
import { APP_HEADER_HEIGHT } from '@config';
import { ChangeEvent, useState } from 'react';
import { IMAGES } from '@assets';
import { useHeaderButton, useHeaderSearch } from '@hooks';

export const Header = () => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const { setSearchContent } = useHeaderSearch();
  const { setType } = useHeaderButton();

  const getPathName = () => {
    if (location.pathname === PATH_CALLS) {
      return 'Quản lý cuộc gọi';
    } else if (location.pathname === PATH_CUSTOMERS) {
      return 'Quản lý khách hàng';
    }
  };

  return (
    <HeaderWrapper>
      <div>
        <AppText
          $fontSize={22}
          $fontWeight={400}
          className="!text-[#a3a19a]"
        >
          {getPathName()}
        </AppText>
        {(location.pathname === PATH_CALLS ||
          location.pathname === PATH_CUSTOMERS) && (
          <Space className="gap-5 mt-7">
            <button onClick={() => setType('create')}>
              <img
                src={IMAGES.IconCreate}
                alt="create"
                className="!h-[40px] cursor-pointer"
              />
            </button>

            <button onClick={() => setType('save')}>
              <img
                src={IMAGES.IconSave}
                alt="save"
                className="!h-[40px] cursor-pointer"
              />
            </button>

            <button onClick={() => setType('export')}>
              <img
                src={IMAGES.IconExport}
                alt="export"
                className="!h-[40px] cursor-pointer"
              />
            </button>
          </Space>
        )}
      </div>

      <div className="flex items-center justify-between border border-black !h-[56px] !w-[320px] !px-0 !rounded-[14px]">
        <AppInput
          placeholder="Tìm kiếm"
          name="search"
          className="!border-none"
          containerClassName="!border-none"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          inputStyle={{
            padding: '0 16px',
            border: 'none',
            borderRadius: '0',
          }}
        />
        <img
          src={IMAGES.searchImage}
          alt="search"
          className="!h-[42px] border-s border-black pl-3 cursor-pointer"
          onClick={() => setSearchContent(search)}
        />
      </div>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding-left: 18%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 48px;
  height: ${APP_HEADER_HEIGHT};
  background-color: #fff;
  border-bottom: 2px solid #000;
`;

const StyledWrapUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .userName {
    background-color: ${APP_COLORS.blueDarker};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-transform: uppercase;
  }
  .custom-icon {
    font-size: 16px;
    margin-left: 5px;
  }
`;

const StyledWrapLanguage = styled.div`
  display: flex;
  justify-content: center; // useEffect(() => {
  //   setNoti(true);
  // }, []);
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;
  margin-right: 24px;

  .custom-icon {
    font-size: 16px;
    margin-left: 5px;
  }
`;

// const BellIconWrapper = styled.div`
//   margin-left: 24px;
//   margin-right: 24px;
//   cursor: pointer;

//   &:hover {
//     rect {
//       fill: ${APP_COLORS.blueBgLight};
//     }

//     path {
//       stroke: ${APP_COLORS.blueNormal};
//     }
//   }
// `;

const StyledMenuAccount = styled.div`
  .wrap-name {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid ${APP_COLORS.stroke};
    .user-name {
      background-color: ${APP_COLORS.blueDarker};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      text-transform: uppercase;
    }
    .user-email {
      padding: 10px 0;
    }
  }
  li {
    padding: 8px 12px !important;
  }
  /* li:last-child {
    border-top: 1px solid ${APP_COLORS.stroke};
  } */
`;

const StyledWrapLanguageDropDown = styled.div`
  .active {
    background-color: ${APP_COLORS.stroke};
  }
`;
