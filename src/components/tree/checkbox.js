import React,{ Component } from 'react';

export default class Checkbox extends Component {
    click(event) {
        // Define our default handler
        let handler = () => {
            this.props.node.toggleCheck();
        };

        // Emit an event with our forwarded MouseEvent, node, and default handler
        //this.props.dom._tree.emit('node.click', event, this.props.node, handler);

        // Unless default is prevented, auto call our default handler
        if (!event.treeDefaultPrevented) {
            handler();
        }
    }

    render() {
        return (<input
            checked={this.props.checked}
            indeterminate={this.props.indeterminate}
            onClick={this.click.bind(this)}
            type='checkbox' />);
    }
}
