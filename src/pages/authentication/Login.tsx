import React from 'react';
import { Checkbox, Label, Modal } from 'flowbite-react';
import { useRef } from 'react';
import InputField from '../../components/common/InputField';
import AppleIcon from '../../components/icons/apple';
import GoogleIcon from '../../components/icons/google';
import FacebookIcon from '../../components/icons/facebook';
import CustomButton from '../../components/common/CustomButton';
import '../../styles/authentication.css';

const Login = ({
  isOpen,
  toggleModal,
  toggleRegisterModal,
}: {
  isOpen: boolean;
  toggleModal: () => void;
  toggleRegisterModal: () => void;
}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  if (!isOpen) return null;

  return (
    <>
      <Modal
        show={isOpen}
        size="md"
        popup
        onClose={() => toggleModal()}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center header-text">
              Login
            </h1>
            <div className="relative my-6">
              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                classess="rounded-full h-12"
                labelClasses=""
                required={true}
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
                required={true}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Forgot Password?
              </a>
            </div>
            <div className="w-full">
              <CustomButton
                label={'SIGN IN'}
                classes={
                  'bg-[#A4BC46] w-full uppercase justify-center rounded-full text-white hover:bg-[#829C39]'
                }
                type="button"
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <div className="flex items-center justify-center gap-1 w-full my-4">
                <hr className="w-[4%] text-gray-600 font-bold border-[1px] border-gray-400" />
                <p>Or sign in with</p>
                <hr className="w-[4%] text-gray-600 font-bold border-[1px] border-gray-400" />
              </div>
              <div className="flex justify-evenly flex-col md:flex-row my-4">
                <CustomButton
                  leftIcon={<GoogleIcon />}
                  label={'Google'}
                  classes={
                    'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2'
                  }
                  type="button"
                />
                <CustomButton
                  leftIcon={<AppleIcon />}
                  label={'Apple'}
                  classes={
                    'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2'
                  }
                  type="button"
                />
                <CustomButton
                  leftIcon={<FacebookIcon />}
                  label={'Facebook'}
                  classes={
                    'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2'
                  }
                  type="button"
                />
              </div>
              <div className="flex justify-evenly text-sm font-medium text-gray-500 dark:text-gray-300">
                Don’t have an account?&nbsp;
                <p
                  className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
                  onClick={() => {
                    toggleModal();
                    toggleRegisterModal();
                  }}
                >
                  Create Account?
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
