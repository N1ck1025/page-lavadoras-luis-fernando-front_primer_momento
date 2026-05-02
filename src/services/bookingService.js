export const getBookings = () => {
  const reservas = localStorage.getItem('reservasLavadoras');
  return reservas ? JSON.parse(reservas) : [];
};

export const saveBooking = (bookingData) => {
  const reservas = getBookings();
  reservas.push(bookingData);
  localStorage.setItem('reservasLavadoras', JSON.stringify(reservas));
  return bookingData;
};
