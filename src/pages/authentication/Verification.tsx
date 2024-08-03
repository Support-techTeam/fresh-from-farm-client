/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/common/CustomButton';
import InputField from '../../components/common/InputField';
import { observer } from 'mobx-react-lite';
import { SimpleFooter } from '../../layouts/SimpleFooter';
import { useStore } from '../../context/StoreContext';
import { toJS } from 'mobx';
import { useUser } from '../../context/UserContext';
import Spinner from '../../components/common/Spinner';

const EmailVerification = () => {
  const { user } = useUser();
  const [otpDetails, setOtpDetails] = useState({
    email: '',
    token: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const { authStore } = useStore();
  const { message, submitting } = authStore;
  const navigate = useNavigate();

  const handleOtpChange = (event: any) => {
    const { name, value } = event.target;
    setOtpDetails((prevDetails: any) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.email) {
      {
        const verifyData = {
          email: user.email,
          token: otpDetails.token,
        };
        authStore.verifyUser(verifyData);
      }
    }
  };

  const handleResend = (e: any) => {
    // Handle resend logic here
  };

  useEffect(() => {
    if (
      message.type === 'success' &&
      message.msg === 'Verification Successful'
    ) {
      navigate('/shop');
      //  TODO: Redirect to home page
    }
  }, [message.type, message.msg]);

  useEffect(() => {
    const areUserDetailsIncomplete = (details: any) => {
      return details.otp === '';
    };

    setIsDisabled(areUserDetailsIncomplete(otpDetails));
  }, [otpDetails]);

  return (
    <>
      {/* <HomeHeader /> */}
      <main className="overflow-x-hidden">
        <Spinner isLoading={submitting} />
        <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16 flex justify-center items-center flex-col">
                    <Link to="/">
                      <img
                        src="/logos/Logo.png"
                        alt="F23-Logo"
                        width={80}
                        height={80}
                        className="mr-4 md:mr-1 cursor-pointer py-1.5 lg:ml-2 md:ml-6"
                      />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center header-text">
                      Email Verification
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="relative my-6">
                      <InputField
                        type="text"
                        name="token"
                        label="Enter OTP"
                        placeholder="Enter OTP"
                        classess="rounded-full h-12"
                        labelClasses=""
                        required={true}
                        value={otpDetails.token}
                        onChange={handleOtpChange}
                      />
                    </div>

                    <div className="w-full my-4">
                      <CustomButton
                        label={'Verify OTP'}
                        classes={`${
                          isDisabled ? 'opacity-50' : 'opacity-100'
                        } bg-[#A4BC46] w-full uppercase justify-center rounded-full text-white hover:bg-[#829C39]`}
                        type="submit"
                        disabled={isDisabled}
                      />
                    </div>
                  </form>
                  <div className="w-full my-4">
                    <CustomButton
                      label={'Resend OTP'}
                      classes={`'opacity-100'
                      } bg-black/80 w-full uppercase justify-center rounded-full text-white hover:bg-black/70 hover:text-white`}
                      type="submit"
                      onClick={handleResend}
                    />
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default observer(EmailVerification);
