import axios from 'axios';
import Swal from 'sweetalert2';
const configApi = 'http://localhost:4000'

interface UserData {
  accessAllCategorys: boolean
  access_token: string
  botEnable: boolean
  categorysEnabled: boolean
  categorys_id: string
  categorys_name: string
  email: string
  id: string
  internalChatEnabled: false
  isAdmin: boolean
  name: string
  olisaIntegration: boolean
  phone: string
  session: string
  username: string
}

// {
//   id: string;
//   name: string;
//   botEnable: boolean;
//   phone: string;
//   username: string;
//   email: string;
//   isAdmin: boolean;
//   access_token: string;
//   session: string;
//   accessAllCategorys: boolean;
//   categorys_id: string;
//   categorys_name: string;
// }


interface AuthenticatorOptions {
  email: string;
  password: string;
  token_admin: string;
}

class Authenticator {
  async restore(data: UserData) {
    try {
      const response = await axios.post(`${configApi}/login`, {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
          'X-account-id': localStorage.getItem('__whats_id') || '',
        },
      });

      const res = response.data as UserData;

      this.updateLocalStorage(res);

      return res;
    } catch (error) {
      this.handleAuthenticationError(error);
      return Promise.reject();
    }
  }

  async authenticate(options: AuthenticatorOptions) {
    try {
      const response = await axios.post(`${configApi}/login`, {
        email: options.email,
        password: options.password,
        token_admin: options.token_admin,
      });

      const res = response.data as UserData;

      this.updateLocalStorage(res);

      return res;
    } catch (error) {
      this.handleAuthenticationError(error);
      return Promise.reject();
    }
  }

  invalidate() {
    return Promise.resolve();
  }

  updateLocalStorage(res: UserData) {
    localStorage.setItem('__whats_id', res.id);
    localStorage.setItem('__whats_user', res.name);
    localStorage.setItem('__whats_botEnable', res.botEnable.toString());
    localStorage.setItem('__whats_phone', res.phone);
    localStorage.setItem('__whats_username', res.username);
    localStorage.setItem('__whats_email', res.email);
    localStorage.setItem('__whats_admin', res.isAdmin.toString());
    localStorage.setItem('__whats_access_token', res.access_token);
    localStorage.setItem('__whats_session', res.session);
    localStorage.setItem('__whats_user_accessAllCategorys', res.accessAllCategorys.toString());
    localStorage.setItem('__whats_user_categorys_ids', res.categorys_id);
    localStorage.setItem('__whats_user_categorys_names', res.categorys_name);
  }

  handleAuthenticationError(error: any) {
    const errorMessage = error.response?.data?.message || 'Authentication failed.';
    Swal.fire({
      title: `Authentication Failed: ${errorMessage}`,
      icon: 'error',
    }); 
  }

  render() {
    return null;
  }
}

export default Authenticator;
