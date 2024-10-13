"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
declare const window: Window & { dataLayer: Record<string, unknown>[] };
interface DataLayerValues {
  key: string;
  value: string;
}

export default function EventButton() {
  const searchParams = useSearchParams();
  const [dataLayerValues, setDataLayerValues] =
    useState<DataLayerValues | null>(null);

  useEffect(() => {
    const key = searchParams.get("key");
    const value = searchParams.get("value");

    if (key && value) {
      window.dataLayer = window.dataLayer || [];
      setDataLayerValues({ key, value });
      window.dataLayer.push({
        event: "queryParamsPushed",
        key: key,
        value: value,
      });
    }
  }, [searchParams]);

  const handleClick = async (): Promise<void> => {
    if (dataLayerValues) {
      const { key, value } = dataLayerValues;
      try {
        const response = await fetch(`https://httpbin.org/get?${key}=${value}`);
        const data = await response.json();
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error making API call:", error);
      }
    } else {
      console.log("No data layer values available");
    }
  };

  return (
    <>
      <div>key: {searchParams.get("key")}</div>
      <div>value: {searchParams.get("value")}</div>
      <button onClick={handleClick}>Send request</button>
    </>
  );
}
