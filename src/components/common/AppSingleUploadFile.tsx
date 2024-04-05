// import { message, Space, Upload } from 'antd';
// import { LogApp } from '@utils';
// import { useTranslation } from 'react-i18next';
// import { CancelPreviewFileIcon, UploadIcon } from '@components';
// import styled from 'styled-components';
// import { useMemo, useState } from 'react';
// import { APP_COLORS } from '@themes';
// import { stsEventAPI } from '@api/stsEventAPI';
// import { stsClassAPI } from '@api/stsClassAPI';

// const { Dragger } = Upload;
// interface IProps {
//   label?: string;
//   required?: boolean;
//   onChange?: (file: any) => void;
//   name?: string;
//   imageUrl?: any;
//   onRemove?: () => void;
//   accept?: string;
// }

// export const AppSingleUploadFile = (props: IProps) => {
//   const { label, required, onChange, name, imageUrl, onRemove, accept } = props;
//   const { t } = useTranslation();
//   const [fileList, setFileList] = useState<any>('');

//   const handleChange = async (info: any) => {
//     const { status } = info.file;
//     const formData = new FormData();
//     formData.append('file', info.file);
//     if (status !== 'uploading') {
//       LogApp(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(
//         `${info.file.name} ${t('message.fileUploadedSuccessfully')}`
//       );
//     } else if (status === 'error') {
//       message.error(`${info.file.name} ${t('message.fileUploadedFailed')}`);
//     }
//     try {
//       let response;

//       if (name === 'venueImg') {
//         response = await stsEventAPI.uploadFileVenueImage(formData);
//       } else if (name === 'seatMapImg') {
//         response = await stsEventAPI.uploadFileSeatMap(formData);
//       } else if (name === 'stsClassImage') {
//         response = await stsClassAPI.uploadFileImage(formData);
//       }
//       const uploadedFile = response;
//       setFileList(uploadedFile);
//       onChange && onChange(uploadedFile);
//       return false;
//     } catch (error) {
//       message.error(t('message.fileUploadedFailed'));
//       setFileList('');
//       return true;
//     }
//   };

//   const handleRemove = () => {
//     // const updatedFileList = fileList.filter(item => item.uid !== file.uid);
//     // onChange && onChange(updatedFileList);
//     onRemove && onRemove();
//     setFileList('');
//   };

//   useMemo(() => {
//     if (imageUrl) {
//       setFileList(imageUrl);
//     }
//   }, [imageUrl]);

//   return (
//     <StyledWrapper>
//       {label && (
//         <label
//           className="input__cap-label"
//           htmlFor={label}
//         >
//           {t(label)}
//           {required && <span className="required"> *</span>}
//         </label>
//       )}

//       {fileList ? (
//         <div>
//           <Space
//             className="contain-image"
//             direction="vertical"
//           >
//             {fileList && (
//               <div
//                 key={fileList}
//                 className="preview"
//               >
//                 <img
//                   src={fileList || ''}
//                   alt={fileList}
//                   className="preview-image"
//                 />
//                 <div
//                   className="delete-button"
//                   onClick={() => handleRemove()}
//                 >
//                   <CancelPreviewFileIcon />
//                 </div>
//               </div>
//             )}
//           </Space>
//         </div>
//       ) : (
//         <Dragger
//           name="file"
//           multiple={false}
//           accept={accept}
//           onChange={handleChange}
//           beforeUpload={handleChange}
//           fileList={[...fileList]}
//         >
//           <p className="ant-upload-drag-icon">
//             <UploadIcon />
//           </p>
//           <p className="ant-upload-text">{t('selectImage')}</p>
//           <p className="ant-upload-hint">{t('supportFormat')}</p>
//         </Dragger>
//       )}
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   width: 100%;
//   label {
//     display: inline-block;
//     margin-bottom: 10px;
//     color: ${p => p.theme.colors.neutral800};
//     font-family: 'Hammersmith One', sans-serif;
//     font-size: 1.4rem;
//     font-style: normal;
//     font-weight: 500;
//     line-height: normal;
//     .required {
//       color: #d42a1c;
//       font-weight: bold;
//     }
//   }
//   .input__cap-label {
//     font-size: 1.6rem;
//     font-weight: 500;
//     &::first-letter {
//       text-transform: capitalize;
//     }
//   }
//   .contain-image {
//     width: 100%;
//     border: 2px solid ${APP_COLORS.stroke};
//     border-radius: 10px;
//     overflow: hidden;
//     .preview {
//       position: relative;
//       display: inline-block;
//       margin-right: 10px;
//       width: 100%;
//     }

//     .preview-image {
//       width: 100%;
//       height: 16rem;
//       object-fit: cover;
//     }

//     .delete-button {
//       position: absolute;
//       cursor: pointer;
//       top: 0;
//       right: 0;
//       padding: 0.5rem;
//       z-index: 1;
//     }
//   }
// `;
