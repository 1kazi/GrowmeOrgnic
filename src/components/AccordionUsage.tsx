import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface State {
  [key: string]: boolean;
}

type Department = {
  department: string;
  sub_departments: string[];
};

const departmentData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const initialState = departmentData.reduce((acc: any, item: any) => {
  acc[item.department] = false;
  item.sub_departments.forEach((subDep: any) => {
    acc[subDep] = false;
  });
  return acc;
}, {});

export default function AccordionUsage() {
  const [selected, setSelected] = useState<State>(initialState);

 
  const handleSelect = (key: string, isDepartment: boolean) => {
    setSelected((prevSelected: any) => {
      let updatedSelection = { ...prevSelected, [key]: !prevSelected[key] };

      if (isDepartment) {
        // If the selected item is a department, update its sub-departments
        departmentData.find((item) => item.department === key)?.sub_departments.forEach(
          (subDep: string) => {
            updatedSelection = { ...updatedSelection, [subDep]: !prevSelected[key] };
          }
        );
      }

      return updatedSelection;
    });
  };

  return (
    <div>
      {departmentData?.map((item: any, i) => (
        <Accordion className="customs-acc-dropdown" key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="d-flex align-items-center"
            onClick={() => handleSelect(item.department, true)}
          >
            <input
              type="checkbox"
              className="cursoer_nong"
              name=""
              id="first"
              checked={selected[item.department]}
              onChange={() => handleSelect(item.department, true)}
            />
            &nbsp;&nbsp;&nbsp; {item.department}
          </AccordionSummary>
          <AccordionDetails className="pb-0">
            <ul>
              {item?.sub_departments?.map((subDep: string, j:any) => (
                <li className="d-flex align-items-center gap-2 mb-3 pointer" key={j} onClick={() => handleSelect(subDep, false)}>
                  {" "}
                  -
                  <input
                    type="checkbox"
                    className="cursoer_nong"
                    name=""
                    id=""
                    checked={selected[subDep]}
                    onChange={() => handleSelect(subDep, false)}
                  />
                  {subDep}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
