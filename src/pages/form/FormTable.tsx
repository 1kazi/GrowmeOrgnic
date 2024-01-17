import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { getCommonApi } from "../../server/api/Api";
import AccordionUsage from "../../components/AccordionUsage";



export const FormTable: React.FC = () => {
  const navigate = useNavigate();
  const [tabledata, setTabledata] = useState([]);
  async function fetchData() {
    const res = await getCommonApi(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(res)
    setTabledata(res.data);
  }
  useEffect(() => {
    const chekdata = localStorage.getItem("ApplicationData");
    //  console.log(chekdata)
    if (!chekdata) {
      toast.error("Pleace Enter your details.");
      navigate("/");
    } else {
      fetchData();
    }
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },

    {
      field: "body",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 260,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.title || ""}`,
    },
  ];


  return (
    <section className="form-table-section">
      <div className="container">
        <h3 className="fs-24-20 py-5">Componet 1 Table :-</h3>
        <DataGrid
          rows={tabledata}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <div className="accordion-frame">
        <h3 className="fs-24-20 py-5">Componet 2 Department & Sub-department : </h3>
          <AccordionUsage/>
        </div>
      </div>
    </section>
  );
};
