import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const connect = () => new Promise<void>((resolve, reject) => {
    socket.on('connect', () => {
        resolve();
    });

    socket.on('connect_error', (error) => {
        reject(error);
    });
});

export const disconnect = () => new Promise<void>((resolve) => {
    socket.disconnect();
    resolve();
});

export const onMessage = (callback) => {
    socket.on('message', callback);
};

export const toggleFlag = (params) => {
    socket.emit('TOGGLE_FLAG', params);
};

export const addAnswer = (params) => {
    socket.emit('ADD_ANSWER', params);
};

export default socket;