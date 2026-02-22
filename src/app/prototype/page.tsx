import { Metadata } from "next";
import PrototypeClient from "./PrototypeClient";

export const metadata: Metadata = {
    title: "MVP Studio | Chalkframe",
    description: "Stop drawing pictures. Start shipping real software. Get a fully functioning, coded web application MVP live in days to test with real users and raise funding.",
};

export default function PrototypePage() {
    return <PrototypeClient />;
}
