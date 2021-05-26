import React from "react";
import {
  Button,
  Card,
  Dropdown,
  Grid,
  Icon,
  Image,
  Input,
} from "semantic-ui-react";
import { Props } from "../../champion-builder";
import statLists from "../stats/stats";
import { ItemSelector } from "../item-selector/item-selector";
import { StatCell } from "../stats/stat-cell";

function serializeItems(items) {
  if (!items) {
    return [];
  }

  return Object.entries(items).map(([id, item]: any) => {
    return {
      id,
      value: id,
      text: item.name,
      image: {
        avatar: true,
        src: `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${id}.png`,
      },
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
                {statLists.map(({ name }) => (
                  <StatCell name={name} />
                ))}
              </div>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="items-wrapper">
          <ItemSelector items={itemsCollection} />
          <ItemSelector items={itemsCollection} />
        </Card.Content>
      </Card>
    );
  }
}
