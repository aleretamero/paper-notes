import { Api } from '../Api';

export class TokenService {
  private static readonly api = Api;
  private static readonly key = '@token-paper-notes';

  static readonly save = (token: string) => {
    localStorage.setItem(this.key, token);
    this.api.defaults.headers.common.Authorization = token;
  };

  static readonly remove = () => {
    localStorage.removeItem(this.key);
    this.api.defaults.headers.common.Authorization = undefined;
  };

  static readonly get = (): string | null => {
    return localStorage.getItem(this.key);
  };
}
