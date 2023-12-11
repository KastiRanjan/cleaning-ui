import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="w-[1440px] h-[900px] pt-[60px] pb-[372px] bg-white shadow flex-col justify-start items-center gap-[105px] inline-flex">
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
        <div className="w-[382px] h-[318px] relative">
          <div className="w-[382px] h-[74px] left-0 top-[77px] absolute">
            <div className="w-[380px] h-5 left-0 top-0 absolute text-gray-400 text-sm font-semibold font-['Averta'] uppercase leading-[17px] tracking-tight">
              Enter new password
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
          <div className="w-[382px] h-[74px] left-0 top-[166px] absolute">
            <div className="w-[380px] h-5 left-0 top-0 absolute text-gray-400 text-sm font-semibold font-['Averta'] uppercase leading-[17px] tracking-tight">
              Confirm new password
            </div>
            <div className="w-[382px] h-12 left-0 top-[26px] absolute">
              <div className="w-[382px] h-12 left-0 top-0 absolute bg-white rounded-[10px] border-2 border-zinc-300" />
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
          <div className="w-[382px] left-0 top-0 absolute text-center text-slate-900 text-[34px] font-bold font-['Averta'] leading-[42px]">
            Reset your password
          </div>
          <div className="w-[382px] h-12 left-0 top-[270px] absolute">
            <div className="w-[382px] h-12 left-0 top-0 absolute bg-blue-600 rounded-[10px]" />
            <div className="left-[107px] top-[13px] absolute text-center text-neutral-50 text-base font-bold font-['Averta'] leading-[23px] tracking-tight">
              Save password & login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
