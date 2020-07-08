import React, { useState } from 'react';
import {Treebeard} from 'react-treebeard';





export default function TreeExample() {

    let data2 = {
        name: 'root',
        toggled: true,
        children: [
            {
                name: 'parent',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'loading parent',
                loading: true,
                children: []
            },
            {
                name: 'parent',
                children: [
                    {
                        name: 'nested parent',
                        children: [
                            { name: 'nested child 1' },
                            { name: 'nested child 2' }
                        ]
                    }
                ]
            }
        ]
    };
    const [data, setData] = useState(data2);
    const [cursor, setCursor] = useState(false);

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        console.log(node)
        console.log(toggled)
        setCursor(node);
        // let tmp = data
        // tmp.children[1].children = [{ name: 'child2' }]
        // setData(Object.assign({}, tmp))
        setData(Object.assign({}, data3))
    }

    return (
        <Treebeard data={data} onToggle={onToggle} />
    )
}



let data3 = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: false,
            children: [{name: 'fuck'}]
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};