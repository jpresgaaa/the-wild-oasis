import styled from "styled-components";

// import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";

import { useMoveBack } from "../../hooks/useMoveBack";
import ButtonText from "../../ui/ButtonText";
import ButtonGroup from "../../ui/ButtonGroup";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { status = "unconfirmed" } = booking ?? {};
  const navigate = useNavigate();

  const { isDeleting, deleteBooking } = useDeleteBooking();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isPending) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  return (
    <>
      <Modal>
        <Row $type="horizontal">
          <HeadingGroup>
            <Heading as="h1">Booking #{booking?.id}</Heading>
            <Tag $type={statusToTagName[status]}>
              {status.replace("-", " ")}
            </Tag>
          </HeadingGroup>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>

        <BookingDataBox booking={booking} />

        <ButtonGroup>
          <Modal.Open opens="booking">
            <Button $variation="danger">Delete</Button>
          </Modal.Open>
          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${booking?.id}`)}>
              Check In
            </Button>
          )}
          {status === "checked-in" && (
            <Button
              onClick={() => checkout(booking?.id)}
              disabled={isCheckingOut}
            >
              Check Out
            </Button>
          )}
          <Modal.Window name="booking">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => {
                deleteBooking(booking?.id, {
                  onSettled: () => navigate(-1),
                });
              }}
            />
          </Modal.Window>
          <Button $variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </Modal>
    </>
  );
}

export default BookingDetail;
