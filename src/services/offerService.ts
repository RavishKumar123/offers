import Axios from "../common/utils/Axios";
import { AxiosResponse } from "axios";
import { SingleOffer } from "../models/singleOffer";
import axios from "axios";

/**
 * Gets all offers
 * @function fetchOffers
 */
export const fetchOffers = async (): Promise<SingleOffer[] | any> => {
  try {
    const response: AxiosResponse<any> = await Axios.get<any>(`/offers.json`);
    return response.data.offers.map(
      (offer: any) => <SingleOffer>({
        name: offer.carGroupInfo.modelExample.name,
        price: offer.prices.totalPrice.amount.display,
        image: offer.carGroupInfo.modelExample.imageUrl,
      })
    );
  } catch (err: any) {
    throw new Error(`A ${err.message} occured while fetching offers`);
  }
};
