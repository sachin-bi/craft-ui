// import React from "react";

export default function ComponentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="p-5">{children}</div>;
}
