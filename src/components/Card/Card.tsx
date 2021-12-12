import React from "react";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { SingleOffer } from "../../models/singleOffer";
import fallback from "../../assets/images/fallback.jpg";

interface Props {
  offer: SingleOffer;
}
const OfferCard: React.FC<Props> = ({ offer }) => {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {offer.name}
    </Tooltip>
  );
  return (
    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={offer.image ? offer.image : fallback} className="w-100" />
      <Card.Body>
        <OverlayTrigger
          placement="top-start"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Card.Title className="heading-text-ellipsis">
            {offer.name}
          </Card.Title>
        </OverlayTrigger>
        <span className="text-primary h2">{offer.price} <sup>€</sup></span>
      </Card.Body>
    </Card>
  );
};

export default OfferCard;
