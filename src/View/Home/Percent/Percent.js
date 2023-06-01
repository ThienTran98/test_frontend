import React from "react";
import CountUp, { useCountUp } from "react-countup";

export default function Percent() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 3000,
  });
  return (
    <div className="px-[147px] ">
      <div className="text-white bg-color-2 rounded-2xl">
        <h2 className="text-[60px] font-bold text-center pt-[98px] mb-[70px]">
          Journey of our Success
        </h2>

        <div className="px-[120px] grid grid-cols-3 gap-40 pb-[98px]">
          <div>
            <h1 className="text-[60px] font-semibold ">
              <CountUp
                className="underline-offset-4 underline"
                end={85}
                enableScrollSpy
              />
              %
            </h1>
            <p>manage communication more efficiently</p>
          </div>
          <div>
            <h1 className="text-[60px] font-semibold ">
              <CountUp
                className="underline-offset-4 underline"
                end={95}
                enableScrollSpy
              />
              %
            </h1>
            <p>improve communication with customers and clients</p>
          </div>
          <div>
            <h1 className="text-[60px] font-semibold ">
              <CountUp
                className="underline-offset-4 underline"
                end={75}
                enableScrollSpy
              />
              %
            </h1>
            <p>average improvement in team efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
