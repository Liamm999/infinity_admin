import { IMAGES } from '@assets';
import { AppText, AppTextBodyMedium } from '@components';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { logout, selectAuth, useAppDispatch, useAppSelector } from '@redux';
import { PATH_CALLS, PATH_CUSTOMERS, PATH_USER_INFOR } from '@routes';
import { Checkbox } from 'antd';

interface OptionProps {
  $active?: boolean;
}

export const SidebarModule = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(selectAuth);

  const handleFilter = (value: number, check: boolean) => {
    if (check) {
      setSearchParams(`?statusId=${value}`);
    }
    if (Number(searchParams.get('statusId')) === value) {
      setSearchParams(``);
    }
  };

  return (
    <SidebarWrapper>
      <div>
        <div className="w-full border-b border-[#EDC16CDE] pb-6 mb-8">
          <Logo
            src={IMAGES.logoImage}
            alt="Logo"
            className="!w-[75%] mx-auto mt-6"
          />
          <AppText
            $fontSize={24}
            $fontWeight={400}
            className="!text-white text-center"
          >
            {user?.fullName ? user.fullName : user?.userName}
          </AppText>
        </div>

        {/* Sidebar routes */}
        <div className="flex flex-col gap-8 w-full">
          <Link to={PATH_CUSTOMERS}>
            <Option
              className="flex gap-4 items-center"
              $active={location.pathname === PATH_CUSTOMERS}
            >
              <img
                src={IMAGES.IconCustomer}
                alt="search"
                className="!h-[18px]"
              />
              <AppTextBodyMedium
                className={`!text-[22px] ${
                  location.pathname === PATH_CUSTOMERS && 'active'
                }`}
                $color={APP_COLORS.primaryGolden}
              >
                Quản lý khách hàng
              </AppTextBodyMedium>
            </Option>
          </Link>
          <Link to={PATH_CALLS}>
            <Option
              className="flex gap-4 items-center"
              $active={location.pathname === PATH_CALLS}
            >
              <img
                src={IMAGES.IconCalls}
                alt="search"
                className="!h-[18px]"
              />
              <AppTextBodyMedium
                className={`!text-[22px] ${
                  location.pathname === PATH_CALLS && 'active'
                }`}
                $color={APP_COLORS.primaryGolden}
              >
                Quản lý cuộc gọi
              </AppTextBodyMedium>
            </Option>
          </Link>
          <Link to={PATH_USER_INFOR}>
            <Option
              className="flex gap-4 items-center"
              $active={location.pathname === PATH_USER_INFOR}
            >
              <img
                src={IMAGES.IconHR}
                alt="search"
                className="!h-[18px]"
              />
              <AppTextBodyMedium
                className={`!text-[22px] ${
                  location.pathname === PATH_USER_INFOR && 'active'
                }`}
                $color={APP_COLORS.primaryGolden}
              >
                Quản lý nhân sự
              </AppTextBodyMedium>
            </Option>
          </Link>
        </div>
        {/*  */}
      </div>
      <SideBarContentWrapper>
        {(location.pathname === PATH_CUSTOMERS ||
          location.pathname === PATH_CALLS) && (
          <div className="w-full py-[30px] px-4 border-y border-[#EDC16CDE]">
            <AppText
              $fontSize={22}
              $fontWeight={400}
              className="!text-[#EDC16CDE] pb-6"
            >
              Lọc dữ liệu theo:
            </AppText>
            <span className="flex items-center gap-4 mb-2">
              <Checkbox
                value={1}
                onChange={e =>
                  handleFilter(Number(e.target.value), e.target.checked)
                }
                checked={Number(searchParams.get('statusId')) === 1}
              />
              <AppText
                $fontSize={22}
                $fontWeight={400}
                className="!text-[#EDC16CDE]"
              >
                Mới
              </AppText>
            </span>
            <span className="flex items-center gap-4 mb-2">
              <Checkbox
                value={2}
                onChange={e =>
                  handleFilter(Number(e.target.value), e.target.checked)
                }
                checked={Number(searchParams.get('statusId')) === 2}
              />
              <AppText
                $fontSize={22}
                $fontWeight={400}
                className="!text-[#EDC16CDE]"
              >
                Kết nối
              </AppText>
            </span>
            <span className="flex items-center gap-4">
              <Checkbox
                value={3}
                onChange={e =>
                  handleFilter(Number(e.target.value), e.target.checked)
                }
                checked={Number(searchParams.get('statusId')) === 3}
              />
              <AppText
                $fontSize={22}
                $fontWeight={400}
                className="!text-[#EDC16CDE]"
              >
                Kết thúc
              </AppText>
            </span>
          </div>
        )}

        <button
          className="py-6 flex items-center gap-6"
          onClick={() => {}}
        >
          <img
            src={IMAGES.IconLogout}
            alt="search"
            className="!h-[42px] border-s border-black pl-3 cursor-pointer"
          />
          <AppText
            $fontSize={22}
            $fontWeight={400}
            className="!text-[#EDC16CDE]"
            onClick={() => dispatch(logout())}
          >
            Đăng xuất
          </AppText>
        </button>
      </SideBarContentWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 316px;
  height: 100%;
  z-index: 100;
  background-color: ${APP_COLORS.greenDarker};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
  }

  .active {
    color: ${APP_COLORS.darkerGolden} !important;
    font-weight: 600;
    font-size: 24px !important;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  padding: 1.6rem 5.7rem;
`;

const Option = styled.div<OptionProps>`
  color: ${APP_COLORS.darkerGolden} !important;
  padding: 0 12px;
`;

const SideBarContentWrapper = styled.div`
  .ant-checkbox-inner {
    background: transparent !important;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${APP_COLORS.primaryGolden};
  }

  .ant-checkbox-checked {
    background-color: ${APP_COLORS.primaryGolden};
  }
`;
