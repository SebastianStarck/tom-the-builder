import React from "react";
import { Dimmer, Icon, Loader } from "semantic-ui-react";

interface Props {
  progress: number;
  total: number;
}

export const LoaderWithProgressBar = ({ progress, total }: Props) => {
  const progressPercentage = (progress * 100) / total;
  return (
    <div className="loader-wrapper">
      <Icon.Group size="huge">
        <Icon loading size="big" name="circle notch" />
        <Icon name="cog" />
      </Icon.Group>
      <p>Loading </p>
      <div className="progress-bar">
        <span>%{progressPercentage}</span>
        <div className="progress" style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
};
