import { ReactNode } from 'react';

export default async function Page() {
  const data: ReactNode = await new Promise((resolve) =>
    setTimeout(() => resolve('Invoices Page'), 2000),
  );
  return <p>{data}</p>;
}
