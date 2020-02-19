import NetInfo, { NetInfoStateType } from 'react-native-web';
import { logMe } from './apputils';

export class ConnectionType {
  static NONE = 1;

  static CELLULAR = 2;

  static WIFI = 3;

  static OTHER = 4;
}

const TAG = 'ConnectionUtils';

export async function getConnectionType() {
  const state = await NetInfo.fetch();
  const { type } = state;
  logMe(TAG, `type: ${type}`);
  switch (type) {
    case NetInfoStateType.NONE:
      return { type: ConnectionType.NONE };
    case NetInfoStateType.CELLULAR:
      return { type: ConnectionType.CELLULAR };
    case NetInfoStateType.WIFI:
      return { type: ConnectionType.WIFI };
    default:
      return { type: ConnectionType.OTHER };
  }
}

export async function isConnectedToInternet() {
  const state = await NetInfo.fetch();
  const { isConnected } = state;
  logMe(TAG, `connection status: ${isConnected}`);
  return isConnected;
}
