import React, { useState } from 'react';
import { Form, Input, Select, Upload, Button, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddMovies = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        productionCompany: '',
        producer: '',
        languages: '',
        runtime: '',
        budget: '',
        awards: '',
        description: '',
        speciality: '',
        inspiredBy: '',
        certificate: '',
        oldName: '',
        images: '', // For storing image URLs or paths
        rating: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/movies', formData);
            console.log('Movie saved successfully:', response.data);
            message.success('Movie saved successfully!');
            // Clear form fields after successful submission (if needed)
            setFormData({
                title: '',
                genre: '',
                productionCompany: '',
                producer: '',
                languages: '',
                runtime: '',
                budget: '',
                awards: '',
                description: '',
                speciality: '',
                inspiredBy: '',
                certificate: '',
                oldName: '',
                images: '',
                rating: ''
            });
        } catch (error) {
            console.error('Error saving movie:', error);
            message.error('Error saving movie. Please try again later.');
        }
    };

    return (
        <Form layout="vertical">
            <Form.Item label="Title">
                <Input name="title" value={formData.title} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Genre">
                <Select name="genre" value={formData.genre} onChange={(value) => handleInputChange({ target: { name: 'genre', value } })}>
                    <Option value="Action">Action</Option>
                    <Option value="Comedy">Comedy</Option>
                    <Option value="Drama">Drama</Option>
                    {/* Add more genres as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="Production Company">
                <Select name="productionCompany" value={formData.productionCompany} onChange={(value) => handleInputChange({ target: { name: 'productionCompany', value } })}>
                    <Option value="Company A">Company A</Option>
                    <Option value="Company B">Company B</Option>
                    <Option value="Company C">Company C</Option>
                    {/* Add more production companies as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="Producer">
                <Input name="producer" value={formData.producer} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Languages">
                <Input name="languages" value={formData.languages} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Runtime">
                <Input name="runtime" value={formData.runtime} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Budget">
                <Input name="budget" value={formData.budget} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Awards">
                <Select name="awards" value={formData.awards} onChange={(value) => handleInputChange({ target: { name: 'awards', value } })}>
                    <Option value="Award A">Award A</Option>
                    <Option value="Award B">Award B</Option>
                    <Option value="Award C">Award C</Option>
                    {/* Add more award options as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="Description">
                <Input.TextArea name="description" value={formData.description} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Speciality">
                <Input name="speciality" value={formData.speciality} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Inspired By">
                <Input name="inspiredBy" value={formData.inspiredBy} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Certificate">
                <Select name="certificate" value={formData.certificate} onChange={(value) => handleInputChange({ target: { name: 'certificate', value } })}>
                    <Option value="Certificate A">Certificate A</Option>
                    <Option value="Certificate B">Certificate B</Option>
                    <Option value="Certificate C">Certificate C</Option>
                    {/* Add more certificate options as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="Old Name">
                <Input name="oldName" value={formData.oldName} onChange={handleInputChange} />
            </Form.Item>
            {/* Image upload field */}
            <Form.Item label="Images">
                <Upload
                    accept="image/*"
                    multiple
                    onChange={(info) => {
                        console.log(info);
                        // Logic to handle image file upload
                        // Update formData.images with uploaded file URLs or paths
                    }}
                >
                    <Button>Click to Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Rating">
                <Input name="rating" value={formData.rating} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddMovies;
