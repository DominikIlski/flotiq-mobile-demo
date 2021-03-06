import { Alert, Linking } from 'react-native';

const AUTH_DEFAULT_TITLE = 'Missing API Key!';
const AUTH_DEFAULT_MESSAGE = 'You have to provide valid Flotiq API Key!';

export const missingApiKeyAlert = (errorMessage) => new Promise((resolve) => {
    Alert.alert(
        AUTH_DEFAULT_TITLE,
        errorMessage || AUTH_DEFAULT_MESSAGE,
        [
            {
                text: 'Ok',
                onPress: () => {
                    resolve('Ok');
                },
            },
        ],
    );
});

export const ivalidApiKeyAlert = (errorMessage, flotiqDocsUrl) => new Promise((resolve) => {
    Alert.alert(
        'Invalid API Key!',
        errorMessage,
        [
            {
                text: 'flotiq.com',
                onPress: () => {
                    Linking.openURL(flotiqDocsUrl);
                    resolve('Ok');
                },
            },
            {
                text: 'Ok',
                onPress: () => {
                    resolve('Ok');
                },
            },
        ],
    );
});

export const fetchingDataErrorAlert = (errorMessage) => new Promise((resolve) => {
    Alert.alert(
        'Fetching data error!',
        errorMessage,
        [
            {
                text: 'Ok',
                onPress: () => {
                    resolve('Ok');
                },
            },
        ],
    );
});

export const confirmDeleteAction = (message) => new Promise((resolve) => {
    Alert.alert(
        'Delete',
        message,
        [
            {
                text: 'Ok',
                onPress: () => {
                    resolve('OK');
                },
            },
            {
                text: 'Cancel',
                onPress: () => {
                    resolve('CANCEL');
                },
            },
        ],
    );
});

export const postDataError = (message, title = 'Error!') => new Promise((resolve) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Ok',
                onPress: () => {
                    resolve('OK');
                },
            },
        ],
    );
});
