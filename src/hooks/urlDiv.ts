import { useEffect, useState } from "react";

function useURLDiv(url: string) {
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    const urlNumber = url.split("/");
    setUrlId(urlNumber[5]);
}, [url]);

  return urlId;
}

export default useURLDiv;