import {message} from 'antd';

const showMessage = (type: 'info' | 'success' | 'error' | 'warning' | 'loading', msg: string, duration: number): void => {
    message[type](msg, duration)
}

export default showMessage;