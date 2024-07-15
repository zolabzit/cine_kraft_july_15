import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Select,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "../../../Css/Admin.css";

const { Option } = Select;

const AddMovieForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [formData, setFormData] = useState({
    movieName: "",
    genre: [],
    description: "",
    });

  // Custom request function for file upload
  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]);
      setUploadedImages([
        ...uploadedImages,
        {
          file,
          url: URL.createObjectURL(file),
        },
      ]);
    }, 1000);
  };

  // Function to handle form submission
  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/api/movies", values, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Response:", response.data);
      alert("Movie added successfully!");
      form.resetFields();
      setFormData({ movieName: "", genre: [], description: "" });
    } catch (error) {
      console.error("Error while posting data:", error);
      alert("Failed to add movie. Please try again.");
    }
  };
  // Function to handle removing uploaded image
  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);
    const updatedImages = uploadedImages.filter(
      (image) => image.file !== fileToRemove
    );
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  // Render function
  return (
    <div style={{ padding: "1%" }}>
      <h2 className="mt-3 mb-3">Add Movies</h2>
      <hr />

      <Form
        form={form}
        onFinish={handleFormSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Row gutter={16}>
          <Col md={12} lg={12}>
            <Form.Item
              label={<span className="philosopher-font">Movie Title</span>}
              name="movieName"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="philosopher-font">
                      Please enter the movie name
                    </span>
                  ),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span className="philosopher-font">Genre</span>}
              name="genre"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="philosopher-font">
                      Please select at least one genre
                    </span>
                  ),
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select genre(s)"
                className="philosopher-font"
              >
                <Option value="Action">Action</Option>
                <Option value="Drama">Drama</Option>
                <Option value="Comedy">Comedy</Option>
                <Option value="Horror">Horror</Option>
                <Option value="Romance">Romance</Option>
                <Option value="Science Fiction">Science Fiction</Option>
                <Option value="Adventure">Adventure</Option>
                <Option value="Fantasy">Fantasy</Option>
                <Option value="Documentary">Documentary</Option>
                <Option value="Thriller">Thriller</Option>
                <Option value="Crime">Crime</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Animation">Animation</Option>
                <Option value="War">War</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={12} lg={12}>
            {/* Add other form fields here */}
            <Form.Item
              label={<span className="philosopher-font">Description</span>}
              name="description"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="philosopher-font">
                      Please enter the movie description
                    </span>
                  ),
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2%",
          }}
        >
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 8,
              style: { textAlign: "center", paddingTop: "3%" },
            }}
          >
            <Button
              style={{ backgroundColor: "#022135", color: "white" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Uploaded images */}
      <div className="picture-wall">
        {uploadedImages.map((image, index) => (
          <div key={index} className="uploaded-image">
            <img src={image.url} alt={`Uploaded ${index}`} />
            <Button
              className="remove-btn"
              onClick={() => removeImage(image.file)}
              icon={<DeleteOutlined />}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMovieForm;
