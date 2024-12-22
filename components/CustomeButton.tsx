/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CustomeButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

function CustomeButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: CustomeButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomeButton;
