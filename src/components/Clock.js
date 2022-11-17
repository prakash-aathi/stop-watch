import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
const Clock = () => {
  const [button, setButton] = useState(false);
  const [timer, setTimer] = useState({ hr: 0, m: 0, s: 0, ms: 0 });
  const [inter, setInter] = useState();

  var uphr = timer.hr,
    upm = timer.m,
    ups = timer.s,
    upms = timer.ms;

  const start = () => {
    setButton(!button);
    run();
    setInter(setInterval(run, 10));
  };

  const run = () => {
    if (upms === 99) {
      upms = 0;
      ups++;
    }
    if (ups === 60) {
      ups = 0;
      upm++;
    }
    if (upm === 60) {
      upm = 0;
      uphr++;
    }
    upms++;
    console.log(upms, ups, upm);

    return setTimer({ hr: uphr, m: upm, s: ups, ms: upms });
  };

  const stop = () => {
    setButton(!button);
    clearInterval(inter);
  };

  const reset = () => {
    clearInterval(inter);
    setTimer({ hr: 0, m: 0, s: 0, ms: 0 });
    setButton(!button);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="px-6  text-6xl border-2 mt-12 bg-white border-black rounded">
          <Display timer={timer} />
        </div>
      </div>

      <div className="flex justify-center">
        {!button && <Button value="Start" action={start} />}
        {button && (
          <div>
            <Button value="stop" action={stop} />
            <Button value="reset" action={reset} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
