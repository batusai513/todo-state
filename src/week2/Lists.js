import React from 'react';

const list = [
    {
        lastName: "amigdala"
    },
    {
        name: "pablo",
        lastName: "amigdala"
    },
    {
        name: "erlinis",
        lastName: "amigdala"
    },
    {
        name: "diana",
        lastName: "amigdala"
    }
];

export default function List(){
    return (
        React.createElement(
            'ul',
            {},
            list.map((person) =>
                React
                .createElement(ListItem, Object.assign({}, {
                    key: person.name
                }, person)))
            )
    );
}

function ListItem(props) {
    return (
        React.createElement('li', {}, props.name + ' ' + props.lastName)
    );
}

ListItem.propTypes = {
    name: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired
};

ListItem.defaultProps = {
    name: 'John'
}