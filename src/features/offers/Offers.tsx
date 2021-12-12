import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../common/hooks";
import { getOffers } from "./offerSlice";
import { OfferCard, Pagination } from "../../components";
import { SingleOffer } from "../../models/singleOffer";
import logo from "../../assets/images/logo.gif"
export function Counter() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offer.offers);
  const loading = useAppSelector((state) => state.offer.loading);
  const [offersPerPage, setOffersPerPage] = useState<number>(12);
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
      <Row className="my-4 m-auto">
        <Col>
        <div className="d-flex align-items-center">
          <h1 className="text-uppercase logo-heading">O<span className="">ff</span>ers</h1>
        <img src={logo} width={100} alt="Christmas Offers"/>

        </div>
        </Col>
      </Row>
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
          currentOffers.map((offer: any) => {
            return (
              <Col className="my-2" xs={12} md={3} >
                <OfferCard offer={offer}></OfferCard>
              </Col>
            );
          })}
        {!loading && currentOffers.length === 0 && (
          <h3 className="m-auto text-center">No Offers Found</h3>
        )}
        {loading && (
          <h3 className="m-auto text-center">
            Loading Offers
            <Spinner animation="border" className="mx-3" />
          </h3>
        )}
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
