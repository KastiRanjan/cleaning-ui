import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="w-[1440px] h-[900px] pt-[60px] pb-[358px] bg-white shadow flex-col justify-start items-center gap-[105px] inline-flex">
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
        <div className="w-[382px] h-[332px] relative">
          <div className="left-[77px] top-[80px] absolute text-center text-slate-900 text-[34px] font-bold font-['Averta'] leading-[42px]">
            Reset link sent
          </div>
          <div className="w-[382px] left-0 top-[130px] absolute text-center text-gray-400 text-base font-normal font-['Averta'] leading-[23px] tracking-tight">
            Check your email for the reset password link
          </div>
          <div className="w-[382px] left-0 top-[286px] absolute text-center text-gray-400 text-base font-normal font-['Averta'] leading-[23px] tracking-tight">
            If you don’t see your reset password email link, please check your
            spam folder inside your mail
          </div>
          <div className="w-[50px] h-[50px] left-[166px] top-0 absolute">
            <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-blue-600 rounded-full" />
          </div>
          <div className="w-[382px] h-12 left-0 top-[188px] absolute">
            <div className="w-[382px] h-12 left-0 top-0 absolute bg-blue-600 rounded-[10px]" />
            <div className="left-[130px] top-[12px] absolute text-center text-white text-base font-semibold font-['Averta'] leading-[23px] tracking-tight">
              Open email app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
