"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center h-[250px] items-center flex-col">
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} value={value}
        onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="mt-4">
        {value && <p>{value}</p>}
      </div>
    </div>
  );
}