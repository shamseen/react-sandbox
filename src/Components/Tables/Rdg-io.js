import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

// import flags from '../../Data/flags';
import people from '../../Data/people';


const gridStyle = { minHeight: 550 };

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
      />
        </div>
    );

    // return (
    //     <div>hfdksjf</div>
    // );
}

export default () => <Rdgio />