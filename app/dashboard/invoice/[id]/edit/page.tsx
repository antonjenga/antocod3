import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";


export default async function page({params} : {params: {id: string}}) {

    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])

    return (
        <main>
            <Breadcrumbs
             breadcrumbs={[
                { label : 'invoices', href: '/dashboard/invoice'},
                {
                    label: ' Edit Invoices',
                    href : `/dashboard/invoice/${id}/edit`,
                    active : true,
                },
             ]}
            /> 
            <Form  invoice={invoice} customers={customers}/> 
        </main>
    )
}