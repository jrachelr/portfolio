"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
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
    <Suspense>
      {dataLayerValues ? (
        <div className=" dark:text-white mx-2">
          <p className="py-2">
            Data Layer Values: {JSON.stringify(dataLayerValues)}
          </p>
          <div className="glass dark:bg-blue-950/75 dark:hover:bg-indigo-800 hover:bg-fuchsia-300 hover:text-neutral-800 dark:hover:text-neutral-200 rounded-2xl border-solid border-gray-200 purple-shadow my-2">
            <button onClick={handleClick}>Send request</button>
          </div>
        </div>
      ) : null}
    </Suspense>
  );
}
