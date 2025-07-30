import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const BellaFair = Bellefair({
    variable: "--font-bellefair",
    subsets: ["latin"],
    weight: "400",
});
const BarlowCondensed = Barlow_Condensed({
    variable: "--font-barlow-condensed",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Space Travel",
    description: "Your Space Tour Guide",
    icons: "/assets/favicon-32x32.png",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${BellaFair.variable} ${BarlowCondensed.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
