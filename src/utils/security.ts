import dayjs from 'dayjs';
import md5 from 'md5';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const genUploadFileKey = () => {
  return md5(
    import.meta.env.UPLOAD_SECRET_KEY +
      dayjs().utcOffset(0).format('DD-MM-YYYY-HH')
  );
};
