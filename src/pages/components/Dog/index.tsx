import React from "react";
import { Dog } from "./styles";

type propsType = {
  dogName: string;
  variations: Array<string>;
};

const index = ({ dogName, variations }: propsType) => {
  console.log(variations);
  return (
    <Dog>
      <h1>{dogName}</h1>
      {variations.length > 0 && 
        <ul>
          {variations.map((variation) => (
            <li>{variation}</li>
          ))}
        </ul>
      }
    </Dog>
  );
};

export default index;
