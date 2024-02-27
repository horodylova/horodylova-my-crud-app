import React, { useState } from 'react';
import { Button, Input, Table, Th, Td } from './TableComponent.styled';


const TableComponent = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' }
    ]);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        const newItem = {
            id: data.length + 1,
            name: formData.name,
            description: formData.description
        };
        setData([...data, newItem]);
        setFormData({ id: '', name: '', description: '' });
    };

    const handleEdit = (id) => {
        const itemToEdit = data.find(item => item.id === id);
        if (itemToEdit) {
            setFormData(itemToEdit);
            handleDelete(id);
        }
    };

    const handleUpdate = () => {
        const updatedData = data.map(item =>
            item.id === formData.id ? { ...formData } : item
        );
        setData(updatedData);
        setFormData({ id: '', name: '', description: '' });
    };

    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    return (
        <div>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <Input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
            />
            <Button onClick={handleAdd}>Add</Button>
            <Button onClick={handleUpdate}>Update</Button>
            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Actions</Th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.description}</Td>
                            <Td>
                                <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;


