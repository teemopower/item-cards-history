import React from "react";
import "../styles/Layout.css";
import { Header } from "./Header";
import { Main } from "./Main";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNextImage, getImg, getAllFurniture } from "../../store/actions";

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log("hi", props);
  }

  componentDidMount() {
    const { getAllFurniture } = this.props;
    getAllFurniture();
  }

  componentDidUpdate() {
    console.log("payload", this.props.cards.payload);
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <div>
          <Header data={cards.payload} />
        </div>
        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // getNextImage,
      // getImg,
      getAllFurniture
    },
    dispatch
  );
}

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
