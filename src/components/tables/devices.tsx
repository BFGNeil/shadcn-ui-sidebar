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
  
  const assets = [
    {
      id: 1,
        name: "T1000 Tracker",
        type: "Tracker",
        asset: "Asset 1",
        last_seen: "2021-09-01",
        status: "Active",
        },
    {
        id: 2,
            name: "T1000 Tracker",
            type: "Tracker",
            asset: "Asset 2",
            last_seen: "2021-09-02",
            status: "Active",
            },


  ]
  export function DevicesTable() {
    return (
      <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Device Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Asset</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>Status</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}
            >
              <TableCell className="font-medium">{asset.name}</TableCell>
                <TableCell>{asset.type}</TableCell>
                <TableCell>{asset.asset}</TableCell>
                <TableCell>{asset.last_seen}</TableCell>
                <TableCell>{asset.status}</TableCell>
            </TableRow>

          ))}
        </TableBody>
       
      </Table>
      </CardContent>
      </Card>
    )
  }
  