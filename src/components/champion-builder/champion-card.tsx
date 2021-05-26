import React from "react";
import { Button, Card, Dropdown, Grid } from "semantic-ui-react";
import { StatCell } from "./StatCell";
import { Props } from "../../champion-builder";

function serializeItems(items) {
  if (!items) {
    return [];
  }

  return Object.entries(items).map(([id, item]: any) => {
    return {
      id,
      value: id,
      text: item.name,
    };
  });
}

export class ChampionCard extends React.Component<Props> {
  render() {
    const itemsCollection = serializeItems(this.props.resources.items.data);

    return (
      <Card className="champion-card">
        <Card.Content>
          <Card.Description>
            <Grid className="champion-statistics">
              <div className="champion-stats-wrapper">
                {Array.from({ length: 22 }).map((i) => (
                  <StatCell />
                ))}
              </div>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="items-wrapper">
          <div className="add-item-wrapper">
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              search
              scrolling
              text="Add item"
              options={itemsCollection}
            />
          </div>
          <div className="add-item-wrapper">
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              search
              scrolling
              text="Add item"
              options={itemsCollection}
            />
          </div>
        </Card.Content>
      </Card>
    );
  }
}
