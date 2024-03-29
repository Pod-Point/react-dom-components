import React, { PureComponent } from 'react';
import { TableProps, TableState } from '../../interfaces/components/tables/Table';
import _ from 'lodash';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends PureComponent<TableProps, TableState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            selectedId: null,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Handles the click event.
     */
    public handleClick(id: number) {
        this.setState({
            selectedId: id,
        });
    }

    public render() {
        const {
            headings,
            rowData,
            classList,
        } = this.props;

        const { selectedId } = this.state;

        const baseClasses = (
            'w-full'
        );

        const classes = classNames(
            baseClasses,
            classList,
        );

        return (
            <table className={ classes }>
                {
                    headings && (
                        <TableHeader headings={ headings } />
                    )
                }
                <tbody>
                    {
                        rowData.map((data, index) => <TableRow
                            key={ _.uniqueId() }
                            rowData={ data }
                            handleClick={ () => this.handleClick(index) }
                            selected={ index === selectedId }
                        />)
                    }
                </tbody>
            </table>
        );

    }
}

export default Table;
