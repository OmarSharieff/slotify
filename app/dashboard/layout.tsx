import { ReactNode } from "react";

export default function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <h1>Hello from the dashboard layout</h1>
      {children}
    </div>
  );
}
