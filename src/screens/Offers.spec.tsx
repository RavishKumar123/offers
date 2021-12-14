import React from "react";
import { shallow, configure } from "enzyme";
import Offers from "./Offers";
import { store } from "../redux/store";
import { Provider } from "react-redux";

describe("App", () => {
  it("Renders Offers correctly", () => {
    shallow(
      <Provider store={store}>
        <Offers />
      </Provider>
    );
  });
});
