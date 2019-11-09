import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import App from "../../components/App";
import playerData from "../../../__mocks__/players";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(cleanup);

describe("App component tests", () => {
  it("renders without crashing", () => {
    render(<App />, container);
  });

  it("Shows a list of users", async () => {
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const response = {
        json: () => Promise.resolve(playerData),
      };

      return Promise.resolve(response);
    });

    await act(async () => {
      const { getByTestId } = render(<App />, container);
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
