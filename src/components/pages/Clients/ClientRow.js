import React from 'react';

const ClientRow = (props) => {
  const { name, surname, loyaltyTypeText, genderTypeText, cardNumber } = props.client;

  return (
    <div className="client__row">
      <div className="client__сell">Имя: {`${name} , ${surname}`}</div>
      <div className="client__сell">Метод: {loyaltyTypeText}</div>
      <div className="client__сell">Номер карты: {cardNumber}</div>
      <div className="client__сell">Пол: {genderTypeText}</div>
    </div>
  )
}

export default ClientRow;