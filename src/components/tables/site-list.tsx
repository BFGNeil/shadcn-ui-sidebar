import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent } from "../ui/card"
import Link from "next/link";
  
  const sites = [
    {
      id: 1,
      name: "Site 1",
      trackedItems: 10,
      
    },
    {
      id: 2,
      name: "Site 2",
      trackedItems: 20,
    },

    {
      id: 3,
      name: "Site 3",
      trackedItems: 30,
    },
    {
      id: 4,
      name: "Site 4",
      trackedItems: 40,
    }

  ];
  
  export function SiteListTable() {
    return (
      <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Site Name</TableHead>
            <TableHead>Assigned Assets</TableHead>
            <TableHead>Options</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sites.map((site) => (
            <TableRow key={site.id}>
              <TableCell className="font-medium">
                <Link href={`/sites/${site.id}`}>
                  
               {//show sitename, on hover, underline and color blue 
               }
                <p className="hover:underline hover:text-blue-500">{site.name}</p>
                </Link></TableCell>
              <TableCell>{site.trackedItems}</TableCell>
              <TableCell className="flex space-x-2">
              <Link href={`/sites/${site.id}`}>
                <p className="text-blue-500 hover:underline">View</p>
                </Link>
               <Link href={`/sites/${site.id}/edit`}>
                <p className="text-blue-500 hover:underline">Edit</p>
                </Link>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      </CardContent>
      </Card>
    )
  }
  