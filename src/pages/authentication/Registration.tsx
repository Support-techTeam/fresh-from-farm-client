import React, { useEffect, useState, useRef } from 'react';
import '../../styles/authentication.css';
import { Modal } from 'flowbite-react';
import InputField from '../../components/common/InputField';
import AppleIcon from '../../components/icons/apple';
import GoogleIcon from '../../components/icons/google';
import FacebookIcon from '../../components/icons/facebook';
import CustomButton from '../../components/common/CustomButton';
import { useStore } from '../../context/StoreContext';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react-lite';
import Spinner from '../../components/common/Spinner';

interface UserDetails {
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

interface RegistrationProps {
  isOpen: boolean;
  toggleModal: () => void;
  toggleLoginModal: () => void;
}

const Registration: React.FC<RegistrationProps> = ({
  isOpen,
  toggleModal,
  toggleLoginModal,
}) => {
  const { authStore } = useStore();
  const { message, submitting } = authStore;
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: {
      number: '',
      street: '',
      city: '',
      state: '',
      country: '',
    },
  });
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Clear user details when modal is opened
      setUserDetails({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: '',
        address: {
          number: '',
          street: '',
          city: '',
          state: '',
          country: '',
        },
      });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    authStore.createUser(userDetails);
  };

  useEffect(() => {
    if (
      message.type === 'error' &&
      message.msg !== 'Registration Failed, Please try again!'
    ) {
      toast.error(message.msg);
    } else if (
      message.type === 'success' &&
      message.msg !== 'Registration Successful, Proceed to login'
    ) {
      toggleModal();
      toggleLoginModal();
    }
  }, [message.type, message.msg]);

  const isDisabled =
    userDetails.firstName === '' ||
    userDetails.email === '' ||
    userDetails.password === '' ||
    userDetails.confirmPassword === '' ||
    userDetails.lastName === '';

  if (!isOpen) return null;

  return (
    <>
      <Modal
        show={isOpen}
        size="md"
        popup
        onClose={toggleModal}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body className="overflow-x-hidden overflow-y-hidden">
          <div className="space-y-6">
            <Spinner isLoading={submitting} />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center header-text">
              Create Account
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="relative my-6">
                <InputField
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  classess="rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full h-12"
                  labelClasses=""
                  required
                  value={userDetails.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  classess="rounded-full h-12"
                  labelClasses=""
                  required
                  value={userDetails.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  classess="rounded-full h-12"
                  labelClasses=""
                  required
                  value={userDetails.email}
                  onChange={handleChange}
                  ref={emailInputRef}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  classess="rounded-full h-12"
                  labelClasses=""
                  required
                  value={userDetails.password}
                  onChange={handleChange}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  classess="rounded-full h-12"
                  labelClasses=""
                  required
                  value={userDetails.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <CustomButton
                  label="Create Account"
                  classes={`${
                    isDisabled ? 'opacity-50' : 'opacity-100'
                  } bg-[#A4BC46] w-full uppercase justify-center rounded-full text-white hover:bg-[#829C39]`}
                  type="submit"
                  disabled={isDisabled}
                />
              </div>
            </form>

            <div className="flex justify-center flex-col items-center">
              <div className="flex items-center justify-center gap-1 w-full my-0">
                <hr className="w-[4%] text-gray-600 font-bold border-[1px] border-gray-400" />
                <p>Or Sign Up with</p>
                <hr className="w-[4%] text-gray-600 font-bold border-[1px] border-gray-400" />
              </div>
              <div className="flex justify-evenly flex-col md:flex-row my-2">
                <CustomButton
                  leftIcon={<GoogleIcon />}
                  label="Google"
                  classes="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2"
                  type="button"
                />
                <CustomButton
                  leftIcon={<AppleIcon />}
                  label="Apple"
                  classes="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2"
                  type="button"
                />
                <CustomButton
                  leftIcon={<FacebookIcon />}
                  label="Facebook"
                  classes="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2"
                  type="button"
                />
              </div>
              <div className="flex justify-evenly text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?&nbsp;
                <p
                  className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
                  onClick={() => {
                    toggleModal();
                    toggleLoginModal();
                  }}
                >
                  Log In?
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default observer(Registration);
