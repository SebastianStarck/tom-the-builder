import React from "react";
import { Card, Dimmer, Grid, Loader, Segment } from "semantic-ui-react";
import { LoaderWithProgressBar } from "./loader-with-progress-bar/loader-with-progress-bar";

interface AppState {
  isBootingUp: boolean;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    isBootingUp: true,
  };

  async componentDidMount() {}

  render() {
    return (
      <main>
        <LoaderWithProgressBar progress={3} total={10} />
      </main>
    );
  }
}
