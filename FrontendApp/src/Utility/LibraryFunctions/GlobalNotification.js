import { notification } from 'antd';

export function openErrorNotification(error) {
    
    notification['info']({
        message: 'Action info',
        description: error,
        style: {
            marginTop: '150px',
          },
    });
}