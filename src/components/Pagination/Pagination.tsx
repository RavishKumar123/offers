import React from "react";
import { Pagination as BootPagination } from "react-bootstrap";

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <BootPagination>
      {page !== 1 && (
        <BootPagination.Prev onClick={() => handlePagination(page - 1)} />
      )}
      <BootPagination.Item
        onClick={() => handlePagination(1)}
        active={page === 1}
      >
        {1}
      </BootPagination.Item>
      {page > 3 && <BootPagination.Ellipsis />}
      {page === totalPages && totalPages > 3 && (
        <BootPagination.Item onClick={() => handlePagination(page - 2)}>
          {page - 2}
        </BootPagination.Item>
      )}
      {page !== 1 && page !== totalPages && (
        <BootPagination.Item onClick={() => handlePagination(page)} active>
          {page}
        </BootPagination.Item>
      )}
      {page < totalPages - 1 && (
        <BootPagination.Item onClick={() => handlePagination(page + 1)}>
          {page + 1}
        </BootPagination.Item>
      )}
      {page === 1 && totalPages > 3 && (
        <BootPagination.Item onClick={() => handlePagination(page + 2)}>
          {page + 2}
        </BootPagination.Item>
      )}
      {page < totalPages - 2 && <BootPagination.Ellipsis />}
      <BootPagination.Item
        onClick={() => handlePagination(totalPages)}
        active={page === totalPages}
      >
        {totalPages}
      </BootPagination.Item>
      {page !== totalPages && (
        <BootPagination.Next onClick={() => handlePagination(page + 1)} />
      )}
    </BootPagination>
  );
};

export default Pagination;
