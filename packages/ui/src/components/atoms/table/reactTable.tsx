import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

export const ReactTableUI = () => {
  type Data = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
  };

  const data: Data[] = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 29,
      visits: 100,
      status: "Married",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 34,
      visits: 200,
      status: "Single",
    },
  ];

  const colHelper = createColumnHelper<Data>();

  const cols = [
    colHelper.accessor("firstName", {
      header: "First Name",
      cell: (row) => <div>{row.getValue()}</div>,
    }),
    colHelper.accessor("lastName", {
      header: "Last Name",
      cell: (row) => <div>{row.getValue()}</div>,
    }),
    colHelper.accessor("age", {
      header: "Age",
      cell: (row) => <div>{row.getValue()}</div>,
    }),
    colHelper.accessor("visits", {
      header: "Visits",
      cell: (row) => <div>{row.getValue()}</div>,
    }),
    colHelper.accessor("status", {
      header: "Status",
      cell: (row) => <div>{row.getValue()}</div>,
    }),
  ];

  const table = useReactTable({
    data,
    columns: cols,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {" "}
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
