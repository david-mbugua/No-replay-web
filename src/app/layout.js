import "../styles/globals.css";

export const metadata = {
  title: "NoReplay - Enhance Your Musical Experience",
  description:
    "NoReplay prevents song repetition at events, ensuring a diverse and dynamic playlist for an unforgettable experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
