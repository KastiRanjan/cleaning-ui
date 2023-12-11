import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="w-[1440px] h-[900px] pt-[60px] pb-[155px] bg-white shadow flex-col justify-start items-center gap-[105px] inline-flex">
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
        <div className="w-[382px] h-[535px] relative">
          <div className="w-[382px] h-[469px] left-0 top-0 absolute">
            <div className="left-[146px] top-0 absolute text-slate-900 text-[34px] font-bold font-['Averta'] leading-[42px]">
              Login
            </div>
            <div className="w-[382px] h-12 left-0 top-[77px] absolute">
              <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] border-2 border-gray-300" />
              <div className="w-[198px] h-[23px] left-[93px] top-[13px] absolute">
                <div className="w-[18px] h-[18px] left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                <div className="w-[165px] left-[33px] top-0 absolute text-slate-900 text-base font-semibold font-['Averta'] leading-[23px] tracking-tight">
                  Continue with Google
                </div>
              </div>
            </div>
            <div className="w-[382px] h-12 left-0 top-[140px] absolute">
              <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] border-2 border-gray-300" />
              <div className="w-[175px] h-[23px] left-[107px] top-[13px] absolute">
                <div className="left-[32px] top-0 absolute text-slate-900 text-base font-semibold font-['Averta'] leading-[23px] tracking-tight">
                  Sign up with Apple
                </div>
              </div>
            </div>
            <div className="w-[382px] h-12 left-0 top-[421px] absolute">
              <div className="w-[382px] h-12 left-0 top-0 absolute bg-blue-600 rounded-[10px]" />
              <div className="left-[156px] top-[12px] absolute text-center text-neutral-50 text-base font-semibold font-['Averta'] leading-[23px] tracking-tight">
                Continue
              </div>
            </div>
            <div className="w-[382px] h-[74px] left-0 top-[228px] absolute">
              <div className="w-[380px] h-5 left-0 top-0 absolute text-slate-900 text-[13px] font-semibold font-['Averta'] leading-[17px] tracking-tight">
                EMAIL
              </div>
              <div className="w-[382px] h-12 left-0 top-[26px] absolute">
                <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] shadow border-2 border-blue-600" />
                <div className="left-[15px] top-[13px] absolute text-slate-800 text-base font-normal font-['Averta'] leading-[23px] tracking-tight">
                  reece08@gmail.com
                </div>
              </div>
            </div>
            <div className="w-[382px] h-[74px] left-0 top-[317px] absolute">
              <div className="w-[380px] h-5 left-0 top-0 absolute text-slate-900 text-[13px] font-semibold font-['Averta'] leading-[17px] tracking-tight">
                PASSWORD
              </div>
              <div className="w-[382px] h-12 left-0 top-[26px] absolute">
                <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] border-2 border-gray-300" />
                <div className="w-[352px] h-[18px] left-[15px] top-[15px] absolute">
                  <div className="w-[53px] h-1 left-0 top-[7px] absolute">
                    <div className="w-1 h-1 left-0 top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[7px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[14px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[21px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[28px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[35px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[42px] top-0 absolute bg-gray-500 rounded-full" />
                    <div className="w-1 h-1 left-[49px] top-0 absolute bg-gray-500 rounded-full" />
                  </div>
                  <div className="w-[18px] h-[18px] left-[334px] top-0 absolute flex-col justify-start items-start inline-flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="left-[87px] top-[489px] absolute text-center">
            <span className="text-gray-500 text-sm font-normal font-['Averta'] leading-[19px] tracking-tight">
              Don’t have an account?
            </span>
            <span className="text-gray-500 text-sm font-semibold font-['Averta'] leading-[19px] tracking-tight">
              {" "}
            </span>
            <span className="text-blue-600 text-sm font-semibold font-['Averta'] leading-[19px] tracking-tight">
              Sign up
            </span>
          </div>
          <div className="left-[136px] top-[516px] absolute text-center text-blue-600 text-sm font-semibold font-['Averta'] leading-[19px] tracking-tight">
            Forgot password
          </div>
        </div>
      </div>
    </div>
  );
}
