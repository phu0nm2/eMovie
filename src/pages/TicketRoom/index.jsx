import { Button } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LoadingSpin from "../../components/LoadingSpin";
import SeatRow from "../../components/SeatRow";
import { splitSeatArray } from "../../helpers/splitSeatArray";
import Layout from "../../HOCs/Layout";
import { getShowtimeById, postBookTicket } from "../../store/actions/movie";
import "./style.scss";

const TicketRoom = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, bookingTicket } = useSelector(
    (state) => state.movieList
  );
  const [seatArray, setSeatArray] = useState([]);

  useEffect(() => {
    dispatch(getShowtimeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!!selectedMovie?.danhSachGhe) {
      setSeatArray(splitSeatArray(selectedMovie.danhSachGhe));
    }
  }, [selectedMovie]);

  const { tenPhim, ngayChieu, gioChieu, tenCumRap, tenRap } =
    selectedMovie?.thongTinPhim || {};

  const handleSubmit = () => {
    // console.log(bookingTicket);
    const newBookingTicketList = bookingTicket.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    dispatch(
      postBookTicket({
        danhSachVe: newBookingTicketList,
        maLichChieu: id,
      })
    );

    dispatch(getShowtimeById(id));
  };

  if (loading) return <LoadingSpin />;

  return (
    <Layout>
      <div className="ticketroom">
        <div className="grid grid-cols-6 2xl:grid-cols-12 ">
          <div className="col-span-12 2xl:text-center lg:text-center">
            {!!seatArray &&
              seatArray.map((seats, index) => (
                <SeatRow key={index} seatPerRow={seats} />
              ))}
          </div>

          <div className="col-span-12 xl:col-span-8 2xl:col-span-12 2xl:w-3/6 2xl:ml-96 ">
            <div className="ticketroom__left ">
              <div className="">
                <div className="ticketroom__left_infoSeat ">
                  <div className="bg-yellow-600 ticketroom__left_infoSeat-a"></div>
                  <p className="yel">Ghế Vip</p>
                </div>

                <div className="ticketroom__left_infoSeat ">
                  <div className="bg-gray-500 ticketroom__left_infoSeat-a"></div>
                  <p className="yel">Ghế chưa đặt</p>
                </div>

                <div className="ticketroom__left_infoSeat ">
                  <div className="bg-green-600 ticketroom__left_infoSeat-a"></div>
                  <p className="yel">Ghế đang đặt</p>
                </div>

                <div className="ticketroom__left_infoSeat ">
                  <div className="bg-red-400 ticketroom__left_infoSeat-a"></div>
                  <p className="yel">Ghế đã đặt</p>
                </div>
              </div>

              <div className="w-3/6">
                <div className="ticketroom__left-title">{tenPhim}</div>
                <hr />
                <div className="ticketroom__left-times">
                  <div>Ngày khởi chiếu: {ngayChieu} </div>
                  <div>{gioChieu}</div>
                </div>
                <hr />
                <div className="ticketroom__left-cinema">
                  <div>{tenCumRap}</div>
                  <div>{tenRap}</div>
                </div>
                <hr />

                <div className="ticketroom__left-chair">
                  {_.sortBy(bookingTicket, ["stt"]).map((seat, index) => {
                    return (
                      <table
                        className="table-auto ticketroom__left-chair-table"
                        key={index}
                      >
                        <thead>
                          <tr>
                            <td>Ghế số: {seat.tenGhe}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{seat.giaVe}đ</td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                </div>
                <hr />
                <div className="ticketroom__left-total">
                  <div>Tổng tiền:</div>
                  <div>
                    {bookingTicket
                      .reduce((total, seat) => {
                        return (total += seat.giaVe);
                      }, 0)
                      .toLocaleString()}
                    đ
                  </div>
                </div>
                <hr />
                <div className="ticketroom__left-btn">
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    type="button"
                  >
                    BOOKING TICKET
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TicketRoom;
