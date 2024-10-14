/* eslint-disable react/prop-types */
const ItemList = ({ items }) => {
    return (
        <>
            {items.length === 0
                ? <p>No user found</p>
                : <ul>
                    {items.map(item => <li key={item.id}>{item.id} - {item.firstName}</li>)}
                </ul>
            }
        </>
    )
}

export default ItemList