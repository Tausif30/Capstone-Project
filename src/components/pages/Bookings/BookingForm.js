import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import FormField from './FormField';
import './BookingForm.css';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const navigate = useNavigate();
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidNumberOfGuestsErrorMessage =
    'Please enter a number between 1 and 10';

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  
  const isNameValid = () => name !== '';
  const isPhoneValid = () => phone !== '';
  const isEmailValid = () => email !== '';
  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';

  const areAllFieldsValid = () =>
    isNameValid()
    && isPhoneValid()
    && isEmailValid() 
    && isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid();
  
  const handleNameChange = e => setName(e.target.value);
  const handlePhoneChange = e => setPhone(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };
  const handleTimeChange = e => setTime(e.target.value);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_koiah3o', 'template_nh0jz2d', form.current, '4Ardkd_hx9HFNnSue')
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/confirmation');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <FormField label="Name" htmlFor="booking-name">
        <input
          type="text"
          id="booking-name"
          name="booking-name"
          value={name}
          placeholder='Name'
          required={true}
          onChange={handleNameChange}
        />
      </FormField>
      <FormField label="Phone Number" htmlFor="booking-number">
        <input
          type="tel"
          id="booking-number"
          name="booking-number"
          placeholder='Phone Number'
          value={phone}
          required={true}
          onChange={handlePhoneChange}
        />
      </FormField>
      <FormField label="E-Mail Address" htmlFor="booking-email">
        <input
          type="email"
          id="booking-email"
          name="booking-email"
          placeholder='Email Address'
          value={email}
          required={true}
          onChange={handleEmailChange}
        />
      </FormField>
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option key={times} value={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
