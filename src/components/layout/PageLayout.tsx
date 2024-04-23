// import { BreadcrumbsModule } from '@modules';
import { APP_HEADER_HEIGHT } from '@config';
import { StyledCol, StyledPageLayout } from './PageLayoutStyle';

export interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  sidebar?: boolean;
  breadcrumbs?: boolean;
}

export const PageLayout = (props: IProps) => {
  const { children, sidebar } = props;

  return (
    <StyledPageLayout
      className={`app__main-content`}
      $haveSidebar={sidebar}
    >
      {/* {breadcrumbs && <BreadcrumbsModule />} */}
      <StyledCol flex="auto">{children}</StyledCol>
    </StyledPageLayout>
  );
};
