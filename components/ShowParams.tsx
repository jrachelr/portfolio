"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ShowKeyValueParams() {
  const searchParams = useSearchParams();

  const key = searchParams.get("key");
  const value = searchParams.get("value");

  if (key && value) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "queryParamsPushed",
      key: key,
      value: value,
    });
  }

  return (
    <>
      <div>
        key: {key}
        value: {value}
      </div>
    </>
  );
}
