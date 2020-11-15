import React, { useState, useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';

// import flags from '../../Data/flags';
import people from '../../Data/people';

import '@inovua/reactdatagrid-community/index.css';
import '@inovua/reactdatagrid-community/theme/green-light.css';

/* STYLING: must import the <THEME.css> AND change theme const. possible themes:
"amber-light"
"amber-dark"
"blue-light"
"blue-dark"
"default-light"
"default-dark"
"green-light"
"green-dark"
"pink-light"
"pink-dark"
*/

const gridStyle = { minHeight: 550 };
const theme = 'green-light'; //ships w default-light; manually change font color if using dark theme

const Rdgio = () => {

    const [gridRef, setGridRef] = useState(null)
    const [dataSource, setDataSource] = useState(people);

    const cellDOMProps = (cellProps) => {
        return {
            onClick: () => {
                gridRef.current.startEdit({ columnId: cellProps.id, rowIndex: cellProps.rowIndex })
            }
        }
    }

  const columns = [
      { name: 'id', header: 'Id', defaultVisible: false, minWidth: 100, type: 'number', cellDOMProps },
      { name: 'name', header: 'Name', defaultFlex: 1, minWidth: 250, cellDOMProps },
      { name: 'country', header: 'Country', defaultFlex: 1, minWidth: 100, cellDOMProps },
      { name: 'city', header: 'City', defaultFlex: 1, minWidth: 250, cellDOMProps },
      { name: 'age', header: 'Age', minWidth: 150, type: 'number', cellDOMProps }
  ];

    const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
        const data = [...dataSource];
        data[rowIndex][columnId] = value;

        setDataSource(data);
    }, [dataSource])

    return (
        <div>
            <h3>Grid with custom inline edit - on single click</h3>
            <ReactDataGrid
                onReady={setGridRef}
        idProperty="id"
                style={gridStyle}
                onEditComplete={onEditComplete}
                editable={true}
        columns={columns}
                dataSource={dataSource}
                theme={theme}
      />
        </div>
    );
}

export default () => <Rdgio />