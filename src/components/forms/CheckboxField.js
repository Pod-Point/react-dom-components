import React, { PureComponent } from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import * as styles from './styles';

class InputField extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const { checked } = this.state;

        this.setState({
            checked: !checked,
        });
    }

    render() {
        const {
            label,
            error,
            classList,
        } = this.props;

        const { checked } = this.state;

        const checkboxClasses = classNames(
            'form-checkbox',
            styles.inputBaseStyles,
            styles.checkboxFieldBaseStyles,
            classList,
            error && 'text-red-primary',
        );

        return (
            <div class="flex">
                <input
                    type="checkbox"
                    class={ checkboxClasses }
                    onChange={ this.handleChange }
                    checked={ checked }
                />
                <FieldLabel
                    text={ label }
                    classList="flex-1"
                    error={ error }
                />
            </div>
        );
    }
}

export default InputField;
