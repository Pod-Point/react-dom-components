import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TableColumn from './TableColumn';

class TableRow extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
        };

        this.handleRowSelect = this.handleRowSelect.bind(this);
    }

    handleRowSelect() {
        const { selected } = this.state;

        this.setState({
            selected: !selected,
        });
    }

    render() {
        const { selected } = this.state;
        const { rowData } = this.props;

        const classes = classNames(
            selected && 'bg-grey-4'
        );

        return (
            <tr class="w-full cursor-pointer" onClick={ this.handleRowSelect }>
                {
                    rowData.map(data => <TableColumn classList={ classes }>{ data }</TableColumn>)
                }
            </tr>
        );
    }
}

export default TableRow;
