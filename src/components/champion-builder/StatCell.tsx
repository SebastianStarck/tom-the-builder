import React from "react";
import { Icon } from "semantic-ui-react";

interface Props {
  name?: string;
}

export const StatCell = ({}: Props) => {
  return (
    <div className="stat-cell">
      <Icon name="user" title="stat-name" />
      <span>100</span>
    </div>
  );
};
