import React from "react";
import { Grid } from "semantic-ui-react";
import { ChampionCard } from "./components/champion-builder/champion-card";

export interface Props {
  resources: {
    items: any;
    champions: any[];
  };
}

export class ChampionBuilder extends React.Component<Props> {
  render() {

    return (
      <Grid stretched divided>
        <Grid.Row stretched>
          <Grid.Column stretched width={6}>
            <div className="champion-builder-wrapper">
              <ChampionCard resources={this.props.resources}/>
            </div>
          </Grid.Column>
          <Grid.Column stretched width={4}>
            2
          </Grid.Column>
          <Grid.Column stretched width={6}>
            3
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
