/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, makeAutoObservable, runInAction } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';
import BaseDirectories from '../base_directory/BaseDirectory';
import { toast } from 'react-toastify';

configure({ enforceActions: 'always' });

interface userRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
  address: {
    number: string;
    street: string;
    city: string;
    state: string;
    country: string;
  };
}

interface userLogin {
  email: string;
  password: string;
}

export class AuthStore {
  authenticated = false;
  loading = false;
  submitting = false;
  error = '';
  success = '';
  verified = false;
  user: any = [];
  token: any = sessionStorage.getItem('accessToken') || '';
  userId = '';
  message = {
    type: '',
    msg: '',
  };
  rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isVerified() {
    return this.isVerified;
  }

  createUser(data: userRegistration) {
    this.setSubmitting(true);
    axios
      .post(`${BaseDirectories.BASE_API_URL}/users/user-sign-up`, data)
      .then((apiResponse: any) => {
        // console.debug(apiResponse, 'apiResponse');
        // console.debug(apiResponse.data, 'apiResponse.data');
        if (apiResponse.data?.error === true) {
          apiResponse.data?.message
            ? toast.error(apiResponse.data?.message)
            : 'Registration Failed, Please try again!';
          runInAction(() => {
            this.setMessage('error', 'Registration Failed, Please try again!');
          });
        } else if (apiResponse.data?.error === false) {
          apiResponse.data?.message
            ? toast.success(apiResponse.data?.message)
            : 'Registration Successful, Proceed to login';
          runInAction(() => {
            this.setMessage(
              'success',
              'Registration Successful, Proceed to login',
            );
          });
        }

        // TODO: Add success message
      })
      .catch((apiError: any) => {
        toast.error('Registration Failed, Please try again!');
        runInAction(() => {
          this.setMessage('error', 'Registration Failed, Please try again!');
        });
        // console.debug(apiError.message, 'apiError');
        // TODO: Add error message
      })
      .finally(() => {
        runInAction(() => {
          this.setSubmitting(false);
          setTimeout(() => {
            this.setMessage('', '');
          }, 3000);
        });
        // TODO: Add finally
      });
  }

  loginUser(data: userLogin) {
    this.setSubmitting(true);
    axios
      .post(`${BaseDirectories.BASE_API_URL}/users/login`, data)
      .then((apiResponse: any) => {
        if (apiResponse.data?.error === true) {
          apiResponse.data?.message
            ? toast.error(apiResponse.data?.message)
            : 'Login Failed, Please try again!';
          if (
            apiResponse.data?.message ===
            'Email has not been verified, check your email for verification token to proceed to login'
          ) {
            this.setUser(apiResponse.data?.user);
            runInAction(() => {
              this.setMessage(
                'error',
                'Email has not been verified, check your email for verification token to proceed to login',
              );
            });
            console.debug(apiResponse.data.user, 'apiResponse.data.user');
          } else {
            runInAction(() => {
              this.setMessage('error', 'Login Failed, Please try again!');
            });
          }
        } else if (apiResponse.data?.error === false) {
          apiResponse.data?.message
            ? toast.success(apiResponse.data?.message)
            : 'Login Successful';
          runInAction(() => {
            this.setMessage('success', 'Login Successful');
            this.setUser(apiResponse.data?.user);
          });
        }
        // TODO: Add success message
      })
      .catch((apiError: any) => {
        toast.error('Login Failed, Please try again!');
        runInAction(() => {
          this.setMessage('error', 'Login Failed, Please try again!');
        });
        // TODO: Add error message
      })
      .finally(() => {
        runInAction(() => {
          this.setSubmitting(false);
          setTimeout(() => {
            this.setMessage('', '');
          }, 3000);
        });
        // TODO: Add finally
      });
  }

  logoutUser() {
    axios
      .post(`${BaseDirectories.BASE_API_URL}/user-sign-up`)
      .then((apiResponse: any) => {
        // TODO: Add success message
      })
      .catch((apiError: any) => {
        // TODO: Add error message
      })
      .finally(() => {
        // TODO: Add finally
      });
  }

  setUser = (res: any) => {
    this.user = res;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };

  setError = (err: string) => {
    this.error = err;
  };
  setSuccess = (res: string) => {
    this.success = res;
  };

  setMessage = (type: string, msg: string) => {
    this.message.type = type;
    this.message.msg = msg;
  };

  setSubmitting = (val: boolean) => {
    this.submitting = val;
  };

  SetAccessToken = (token: string) => {
    this.token = token || sessionStorage.getItem('accessToken');
  };

  setToLocalStorage = (key: string, value: any) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };

  clearFromLocalStorage = () => {
    window.sessionStorage.clear();
  };

  setUserAuthenticated(res: any) {
    this.authenticated = true;
    this.token = res.access_token;
    this.success = 'Sign up successful';
    this.setLoading(false);
    this.setToLocalStorage('accessToken', this.token);
    this.setToLocalStorage('uid', this.userId);
  }

  setUserNotAuthenticated() {
    this.authenticated = false;
    this.token = '';
    this.error = 'Sign up failed';
    this.setLoading(false);
    this.clearFromLocalStorage();
  }
}
