import { notification } from 'antd';

export function openErrorNotification(error) {
    
    notification['info']({
        message: 'Action info',
        description: error,
    });
}