import { useState, useEffect } from "react";
import Dog from "./components/Dog";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>perai</p>;

  console.log(data.message);

  return (
    <div>
      {Object.keys(data.message).map((key) => {
        return <Dog key={key} dogName={key} variations={data.message[key]} />;
      })}
    </div>
  );
}
