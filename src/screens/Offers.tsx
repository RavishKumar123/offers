import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../common/hooks";
import { getOffers } from "../redux/offerSlice";
import { OfferCard, Pagination, Loader } from "../components";
import { SingleOffer } from "../models/Offer";
export default function Offers() {
  const dispatch = useAppDispatch();
  const offersPerPage: number = 12;
  const offers: SingleOffer[] = useAppSelector((state) => state.offer.offers);
  const loading: boolean = useAppSelector((state) => state.offer.loading);
  const message: string | undefined = useAppSelector(
    (state) => state.offer.message
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentOffers, setcurrentOffers] = useState<SingleOffer[]>([]);
  const pageNumbers: number[] = [];
  for (let i: number = 1; i <= Math.ceil(offers.length / offersPerPage); i++) {
    pageNumbers.push(i);
  }
  const changePage = (number: number): void => {
    setCurrentPage(number);
    const indexOfLastOffer: number = number * offersPerPage;
    const indexOfFisrtOffer: number = indexOfLastOffer - offersPerPage;
    setcurrentOffers(offers.slice(indexOfFisrtOffer, indexOfLastOffer));
  };
  const handlePages = (updatePage: number): void => {
    if (updatePage >= 0 && updatePage <= pageNumbers.length) {
      changePage(updatePage);
    }
  };
  useEffect(() => {
    dispatch(getOffers());
  }, []);

  useEffect(() => {
    changePage(1);
  }, [offers]);

  return (
    <Container>
      <Row>
        <Col className="text-end">
          <div className="w-auto float-end">
            <Pagination
              page={currentPage}
              totalPages={pageNumbers.length}
              handlePagination={handlePages}
            />
          </div>
        </Col>
      </Row>
      <Row>
        {!loading &&
          currentOffers.map((offer: any, index: number) => {
            return (
              <Col className="my-2" xs={12} sm={6} md={4} lg={3} key={index}>
                <OfferCard offer={offer}></OfferCard>
              </Col>
            );
          })}
        {!message && !loading && currentOffers.length === 0 && (
          <h3 className="m-auto text-center">No Offers Found</h3>
        )}
        {message && <h3 className="text-center text-danger">{message}</h3>}
        {loading && <Loader message="Loading Offers" />}
      </Row>
      <Row className="my-4 m-auto">
        <Col className="text-end">
          <div className="w-auto float-end">
            <Pagination
              page={currentPage}
              totalPages={pageNumbers.length}
              handlePagination={handlePages}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
