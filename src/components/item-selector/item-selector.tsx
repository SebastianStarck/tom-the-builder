import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

interface Props {
  items: any[];
}

interface State {}

export class ItemSelector extends React.Component<Props, State> {
  render() {
    const { items } = this.props;

    return (
      <div className="add-item-wrapper">
        <Dropdown
          button
          className="icon"
          floating
          labeled
          icon="world"
          scrolling
          text="Add item"
          search
        >
          <Dropdown.Menu>
            <Dropdown.Header>
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
              <Image
                link
                src="icons/Ability_power_icon.webp"
                onClick={(ev) => {
                  ev.preventDefault();
                  console.log("first clicked");
                }}
              />
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Menu scrolling>
              {items.map((option) => (
                <Dropdown.Item {...option} />
              ))}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
