"use client";
import React from "react";

const MDMessage: React.FC<any> = ({ data }) => {
  return (
    <div className="mb-[50px]">
        <h2 className="vo-heading mb-[40px]">{data?.title}</h2>
        {data?.desc?.map((description: any, index: number) => (
            <p
                key={index}
                className={`vo-paragraph ${
                    index !== data.desc.length - 1 ? "mb-[20px]" : ""
                }`}
            >
                {description}
            </p>
        ))}
    </div>
  );
};

export default MDMessage;
