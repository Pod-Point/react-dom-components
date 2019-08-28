import React, { PureComponent } from 'react';
import classNames from 'classnames';

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

        const columnBaseClasses = (
            'py-2 text-left cursor-pointer'
        );

        const classes = classNames(
            columnBaseClasses,
            selected && 'bg-grey-4'
        );

        return (
            <tr class="w-full" onClick={ this.handleRowSelect }>
                {
                    rowData.map(data => <td class={ classes }>{ data }</td>)
                }
            </tr>
        );
    }
}

export default TableRow;
