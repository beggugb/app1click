import { Platform, StatusBar } from 'react-native';

export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);