import React from "react";
import { Card, Dimmer, Grid, Loader, Segment } from "semantic-ui-react";
import { LoaderWithProgressBar } from "./components/loader-with-progress-bar/loader-with-progress-bar";
import { AppResources, Item } from "./types";
// import { RequestService } from "./common/RequestService";
import { Champion, DDdragonAssetCollection } from "./common/types";
import { ChampionBuilder } from "./champion-builder";
import * as RequestService from "./services/RequestService";

interface AppState {
  isBootingUp: boolean;
  resources: AppResources;
  error?: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    isBootingUp: true,
    resources: {
      champions: [],
      items: [],
    },
  };

  async componentDidMount() {
    try {
      await Promise.all([this.loadChampions(), this.loadItems()]);
    } catch (error) {
      this.setState({
        error: "Something went wrong",
      });
    }

    this.setState({
      isBootingUp: true,
    });
  }

  async loadChampions() {
    const champions: Champion[] =
      await RequestService.getDDragonAssetCollection<Champion>(
        DDdragonAssetCollection.CHAMPIONS
      );

    this.setState({
      resources: {
        ...this.state.resources,
        champions,
      },
    });
  }

  async loadItems() {
    const items: Item[] =
      await RequestService.getDDragonAssetCollection<Champion>(
        DDdragonAssetCollection.ITEMS
      );

    this.setState({
      resources: {
        ...this.state.resources,
        items,
      },
    });
  }

  getContent() {
    if (!this.state.isBootingUp) {
      return <LoaderWithProgressBar progress={3} total={10} />;
    }

    return <ChampionBuilder resources={this.state.resources} />;
  }

  render() {
    return <main>{this.getContent()}</main>;
  }
}
