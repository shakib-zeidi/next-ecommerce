import type { ReactNode } from "react";
import StoreProvider from "./StoreProvider";
import "./styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Next Ecommerce',
  }

interface Props {
	readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<StoreProvider>
			<html lang="en">
				<body>{children}</body>
			</html>
		</StoreProvider>
	);
}
