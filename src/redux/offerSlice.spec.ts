import offerReducer, { getOffers, OffersState } from "./offerSlice";
import { SingleOffer } from "../models/Offer";

const mockOffers: SingleOffer[] = [
  {
    name: "Audi A3 Sedan",
    image:
      "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
    price: "209,96",
    id: "1",
  },
];
describe("offer reducer async actions", () => {
  const initialState: OffersState = {
    loading: false,
    offers: [],
    message: undefined,
  };

  it('Should set offers fetched', async () => {
    const action = { type: getOffers.fulfilled.type, payload: mockOffers };
    const state = offerReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      offers: mockOffers,
      loading: false,
    });
  });

  it("should set loading to true", async () => {
    const action = { type: getOffers.pending.type };
    const state = offerReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set error message', async () => {
    const action = {
      type: getOffers.rejected.type,
      error:{message:"An error is occured"}
    };
    const state = offerReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      message: "An error is occured",
      loading: false,
    });
  });
});
