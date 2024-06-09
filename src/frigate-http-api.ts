import axios from 'axios';
import { environment } from '../environment';

export class FrigateHTTPAPI {
  private async post<T>(
    cmd: string,
    param?: {
      [key: string]: any;
    },
  ): Promise<T> {
    try {
      const rxp = await axios.post<T>(
        environment.FRIGATE_HTTP_URL,
        [
          {
            cmd,
            param,
          },
        ],
        {
          headers: {
            contentType: 'application/json',
          },
          timeout: environment.DEFAULT_TIMEOUT,
          transitional: { clarifyTimeoutError: true },
        },
      );
      return rxp.data;
    } catch (e: unknown) {
      throw new Error(`Failed to run command ${cmd}. ${e}`);
    }
  }
}
