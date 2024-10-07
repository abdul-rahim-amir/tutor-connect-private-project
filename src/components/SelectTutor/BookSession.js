import React, { useState } from 'react';
import jazzcash from '../../assets/jazzcash.png';
import easypaisa from '../../assets/easypaisa.png';
import oneLink from '../../assets/1link.png';

function BookSession() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    if (phoneNumber && selectedPaymentMethod) {
      // Simulate payment process
      setTimeout(() => {
        setPaymentStatus('success');
        alert(`Payment successful! A receipt has been sent to your number ${phoneNumber}`);
      }, 2000);
    } else {
      setPaymentStatus('error');
      alert('Please select a payment method and enter your phone number.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Book a Session</h2>

        {/* Payment Methods */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Select Payment Method</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <button
              onClick={() => setSelectedPaymentMethod('JazzCash')}
              className={`py-3 px-6 rounded-lg border ${
                selectedPaymentMethod === 'JazzCash'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-indigo-100 focus:outline-none flex items-center justify-center`}
            >
              <img src={jazzcash} alt="JazzCash" className="h-6 mr-2" />
              JazzCash
            </button>
            <button
              onClick={() => setSelectedPaymentMethod('Easypaisa')}
              className={`py-3 px-6 rounded-lg border ${
                selectedPaymentMethod === 'Easypaisa'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-indigo-100 focus:outline-none flex items-center justify-center`}
            >
              <img src={easypaisa} alt="Easypaisa" className="h-6 mr-2" />
              Easypaisa
            </button>
            <button
              onClick={() => setSelectedPaymentMethod('1Link')}
              className={`py-3 px-6 rounded-lg border ${
                selectedPaymentMethod === '1Link'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-indigo-100 focus:outline-none flex items-center justify-center`}
            >
              <img src={oneLink} alt="1Link" className="h-6 mr-2" />
              1Link
            </button>
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Enter Your Phone Number</h3>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Payment Status */}
        {paymentStatus === 'error' && (
          <div className="mb-4 text-red-600">
            Please select a payment method and enter a valid phone number.
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handlePayment}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none"
          >
            Complete Payment
          </button>
        </div>

        {/* Payment Confirmation */}
        {paymentStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Payment successful! A receipt has been sent to your phone number.
          </div>
        )}
      </div>
    </div>
  );
}

export default BookSession;
