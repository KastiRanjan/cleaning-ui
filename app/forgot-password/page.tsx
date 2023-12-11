import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="w-[1440px] h-[900px] pt-[60px] pb-[346px] bg-white shadow flex-col justify-start items-center gap-[46px] inline-flex">
        <div className="w-[113.65px] h-[45px] relative">
          <div className="w-[113.65px] h-[32.32px] left-[-0px] top-[12.68px] absolute"></div>
          <img
            className="w-[13.70px] h-[31.46px] left-[28.92px] top-[13.11px] absolute"
            src="https://via.placeholder.com/14x31"
          />
          <img
            className="w-[24.20px] h-[24.33px] left-[40.41px] top-[20.67px] absolute"
            src="https://via.placeholder.com/24x24"
          />
        </div>
        <div className="w-[382px] h-[403px] relative">
          <div className="w-[382px] h-[74px] left-0 top-[192px] absolute">
            <div className="w-[380px] h-5 left-0 top-0 absolute text-gray-400 text-sm font-semibold font-['Averta'] uppercase leading-[17px] tracking-tight">
              Enter your email
            </div>
            <div className="w-[382px] h-12 left-0 top-[26px] absolute">
              <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] shadow border-2 border-blue-600" />
              <div className="w-[352px] h-5 left-[15px] top-[14px] absolute text-slate-900 text-base font-normal font-['Averta'] leading-[23px] tracking-tight">
                reece08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[382px] h-[403px] left-0 top-0 absolute">
            <div className="w-[382px] h-[344px] left-0 top-[59px] absolute">
              <div className="w-[382px] h-[285px] left-0 top-0 absolute">
                <div className="left-[52px] top-0 absolute text-center text-slate-900 text-[34px] font-bold font-['Averta'] leading-[42px]">
                  Forgot password?
                </div>
                <div className="w-[382px] h-12 left-0 top-[237px] absolute">
                  <div className="w-[382px] h-12 left-0 top-0 absolute bg-blue-600 rounded-[10px]" />
                  <div className="left-[106px] top-[12px] absolute text-center text-white text-base font-semibold font-['Averta'] leading-[23px] tracking-tight">
                    Email me my reset link
                  </div>
                </div>
              </div>
              <div className="w-[382px] left-0 top-[52px] absolute text-center text-gray-400 text-base font-normal font-['Averta'] leading-[23px] tracking-tight">
                Enter the email you use for the account and we’ll send you a
                reset password link
              </div>
              <div className="w-[382px] left-0 top-[306px] absolute text-center text-gray-400 text-sm font-normal font-['Averta'] leading-[19px] tracking-tight">
                If you don’t see your reset password email link, please check
                your spam folder
              </div>
            </div>
            <div className="w-[50px] h-[19px] left-0 top-0 absolute">
              <div className="left-[17px] top-0 absolute text-gray-500 text-sm font-semibold font-['Averta'] leading-[19px] tracking-tight">
                Back
              </div>
              <div className="origin-top-left rotate-90 w-1.5 h-[9px] left-0 top-[8px] absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
