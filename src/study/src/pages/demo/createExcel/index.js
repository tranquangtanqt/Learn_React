import React, { useState } from "react";

import MasterLayout from "../../../themes/masterLayout";
import ExportExcel from "../../../components/modules/exportExcel";

const CreateExel = () => {
    // eslint-disable-next-line
    const [customers, setCustomers] = useState(customersData());

  function customersData() {
    const custs = [];
    custs[0] = {
        level: `Level`,
        item_name: `Item name`,
        type: `Type`,
        digit: `Digit`,
        null: `Null (y/n)`,
        default: `Default`,
        japanese: `Japanese`,
    }
    
    return custs;
  }

  const wscols = [
    //width column
    { wch: Math.max(...customers.map(customer => customer.level.length)) },
    { wch: Math.max(...customers.map(customer => customer.item_name.length)) },
    { wch: Math.max(...customers.map(customer => customer.type.length)) },
    { wch: Math.max(...customers.map(customer => customer.null.length)) },
    { wch: Math.max(...customers.map(customer => customer.default.length)) },
    { wch: Math.max(...customers.map(customer => customer.japanese.length)) }
  ];

  return <MasterLayout>
        <ExportExcel
            csvData={customers}
            fileName="Demo"
            wscols={wscols}
          />
  </MasterLayout>;
};

export default CreateExel;