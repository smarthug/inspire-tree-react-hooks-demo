import React, { Component } from 'react';
import InspireTree from 'inspire-tree/dist/inspire-tree';
import 'inspire-tree-dom/dist/inspire-tree-light.css';
import TreeNodes from './tree-nodes';

import data from '../../full.json'

let sample = data;


let count = 0;
// An example Tree component which wraps InspireTree's core.
// We've excluded the default DOM code so we can implement native React rendering.
class Tree extends Component {
    // Accept an array of nodes

    // Initial state
    state = {
        nodes: []
    }

    // Instance of the tree
    tree = false

    // When this component mounts, instatiate inspire tree
    componentWillMount() {
        // this.tree = new InspireTree({
        //     deferredLoading : true,
        //     selection: {
        //         mode: 'checkbox'
        //     },
        //     data: this.props.nodes
        // });

        this.tree = new InspireTree({
            allowLoadEvents: true,
            deferredLoading: true,
            selection: {
                mode: 'checkbox'
            },
            data: (node, resolve, reject) => {
                console.log(node);
                console.log('ddff');
                count++;
                sample.push({ "text": count });
                return resolve(sample)
            }
        });


        // this.tree = new InspireTree({
        //     selection: {
        //         mode: 'checkbox'
        //     },
        //     data:function(node, resolve, reject) {
        //         var id = node ? node.id : 'root';
        //         return {};
        //     }
        // });

        // Set state once the tree has fully loaded our data
        this.tree.on('model.loaded', this.syncNodes.bind(this));
        this.tree.on('changes.applied', this.syncNodes.bind(this));
    }

    // Update the state when changes have been made to our nodes
    syncNodes() {
        this.setState({
            nodes: this.tree.nodes()
        });
    }

    load = () =>{
        console.log('load')
        this.tree.load((node, resolve, reject) => {
            console.log(node);
            console.log('ddff');
            count++;
            sample.push({ "text": count });
            return resolve([{ "text": count , children:[]}])
        })
    }

    // Renders the wrapping div and root OL
    render() {
        return (
            <div className="inspire-tree">
                <button onClick={this.load}>Load</button>
                <TreeNodes nodes={this.state.nodes} />
            </div>
        );
    }
}

export default Tree;
