import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { capitalize } from "lodash";

interface Props {
  name?: string;
}

export const StatCell = ({ name }: Props) => {
  if (!name) {
    return <div className="stat-cell" />;
  }

  return (
    <div className="stat-cell">
      <Image src={`icons/${capitalize(name)}_icon.webp`} alt={`${name} icon`} />
      <span>0</span>
    </div>
  );
};
