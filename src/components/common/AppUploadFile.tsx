// import { message, Upload } from 'antd';
// import { LogApp } from '@utils';
// import { useTranslation } from 'react-i18next';
// import { PlusIcon, UploadIcon } from '@components';
// import styled, { css } from 'styled-components';
// import { useState } from 'react';
// import { APP_COLORS } from '@themes';
// import { stsEventAPI } from '@api/stsEventAPI';

// interface IProps {
//   label?: string;
//   required?: boolean;
//   onChange?: (file: any) => void;
//   name?: string;
//   imageUrl?: any;
//   onRemove?: (file: any) => void;
// }

// const AppUploadFile = (props: IProps) => {
//   const { label, required, onChange, name } = props;
//   const { t } = useTranslation();
//   const [fileList, setFileList] = useState<any[]>([]);
//   const [payloadList, setPayloadList] = useState<any[]>([]);

//   const handleChange = async (info: any) => {
//     const { status } = info.file;
//     const formData = new FormData();
//     formData.append('file', info.file);

//     if (status !== 'uploading') {
//       LogApp(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//     if (status === 'removed') {
//       let fileList = [...info.fileList];

//       fileList = fileList.map(file => {
//         if (file.response) {
//           file.url = file.response.url;
//         }
//         return file;
//       });

//       handleRemove(info.file);

//       setFileList(fileList);
//       return true;
//     }

//     try {
//       let response;

//       if (name === 'venueImages') {
//         response = await stsEventAPI.uploadFileVenueImage(formData);
//       } else if (name === 'seatMapImages') {
//         response = await stsEventAPI.uploadFileSeatMap(formData);
//       }

//       let fileList = [...info.fileList];

//       fileList = fileList.map(file => {
//         if (file.response) {
//           file.url = file.response.url;
//         }
//         return file;
//       });

//       setFileList(fileList);
//       setPayloadList([...payloadList, response]);
//       onChange && onChange([...payloadList, response]);
//       return false;
//     } catch (error) {
//       message.error('File upload failed.');
//       setFileList([]);
//       return true;
//     }
//   };
//   const handleRemove = (file: any) => {
//     const indexRemove = fileList.findIndex(item => item.uid === file.uid);
//     const updatedFileList = payloadList.filter(
//       (_, index) => index !== indexRemove
//     );
//     setPayloadList(updatedFileList);
//     onChange && onChange(updatedFileList);
//   };

//   const uploadButton = (
//     <StyledUploadMore
//       style={{ border: 0, background: 'none' }}
//       type="button"
//       color={APP_COLORS.blue500}
//     >
//       <div>
//         <PlusIcon className="plus-icon" />
//       </div>
//       <div className="add-more">Add More</div>
//     </StyledUploadMore>
//   );

//   const uploadButtonDefault = (
//     <StyledButtonUpload
//       style={{ border: 0, background: 'none' }}
//       type="button"
//     >
//       <p className="ant-upload-drag-icon">
//         <UploadIcon />
//       </p>
//       <p className="ant-upload-text">Drag & drop image or Browse</p>
//       <p className="ant-upload-hint">Supported formats: .JPEG, .PNG, .GIF</p>
//     </StyledButtonUpload>
//   );
//   return (
//     <StyledWrapper $isDefault={fileList.length === 0 ? true : false}>
//       {label && (
//         <label
//           className="input__cap-label"
//           htmlFor={label}
//         >
//           {t(label)}
//           {required && <span className="required"> *</span>}
//         </label>
//       )}
//       <Upload
//         listType="picture-card"
//         fileList={fileList}
//         onChange={handleChange}
//         beforeUpload={() => false}
//       >
//         {fileList.length === 0 ? uploadButtonDefault : uploadButton}
//       </Upload>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div<{ $isDefault?: boolean }>`
//   width: 100%;
//   ${({ $isDefault }) =>
//     $isDefault &&
//     css`
//       .ant-upload-select {
//         width: 100% !important;
//         height: 100% !important;
//       }
//     `}
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

// const StyledButtonUpload = styled.button`
//   width: 100%;
//   .ant-upload-drag-icon {
//     margin-top: 24px;
//   }
//   .ant-upload-text {
//     font-weight: 600;
//     margin-top: 20px;
//     font-size: 16px;
//     text-align: center;
//   }
//   .ant-upload-hint {
//     font-size: 12px;
//     margin: 7px 0 30px;
//     font-weight: 400;
//     text-align: center;
//   }
// `;

// const StyledUploadMore = styled.button`
//   .add-more {
//     font-size: 16px;
//     font-weight: 400;
//     text-align: center;
//     color: ${APP_COLORS.blue500};
//   }
//   .plus-icon {
//     color: ${APP_COLORS.blue500};
//   }
// `;

// export default AppUploadFile;
