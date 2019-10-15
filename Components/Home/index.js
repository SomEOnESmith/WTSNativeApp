import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container } from "native-base";

// Style
import styles from "./styles";

// Actions
import { getCryptos } from "../../redux/actions/cryptosActions";
import AppContainer from "../../Navigation";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCryptos();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCryptos: () => dispatch(getCryptos())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
