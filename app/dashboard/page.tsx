import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { lusitana } from "../ui/font";
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../lib/data";

export default async function page(){
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices
    } = await fetchCardData();

    return(
     <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            DashBoard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="collected" value={totalPaidInvoices} type="collected"/>
        <Card title="pending" value={totalPendingInvoices} type="pending"/>
        <Card title="total invoices" value={numberOfInvoices} type="invoices"/>
        <Card
           title="Total Customers"
           value={numberOfCustomers}
           type="customers"
           />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
           <RevenueChart revenue={revenue}/>
           <LatestInvoices latestInvoices={latestInvoices}/>
        </div>
     </main>
    )
}
