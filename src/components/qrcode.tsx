import QRCode from "react-qr-code";

const PaymentQRCode: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const mentorName = searchParams.get('mentor');
  const amount = searchParams.get('amount');

  // Replace with actual logic to generate the payment URL
  const paymentUrl = `https://paymentgateway.com/pay?mentor=${mentorName}&amount=${amount}`;

  return (
    <div className="qr-page">
      <h2>Scan the QR code to make payment</h2>
      <QRCode value={paymentUrl} />
      <p>Please scan the QR code or click the link to complete the payment.</p>
    </div>
  );
};

export default PaymentQRCode;
