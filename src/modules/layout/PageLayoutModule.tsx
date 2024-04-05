// import { useLocation } from 'react-router-dom';

// import { useAppDispatch } from '@redux';
import { PageLayout } from '@components';

export interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  sidebar?: boolean;
  breadcrumbs?: boolean;
}

export const PageLayoutModule = (props: IProps) => {
  // const location = useLocation();
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // Location changed
  //   dispatch(setCurrentPage(1));
  // }, [location]);

  return <PageLayout {...props} />;
};
