import React from 'react';
import { Form, Input, Select, DatePicker, Button, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddPageForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Add your logic here for form submission
    console.log('Received values:', values);
  };

  return (
    <div>
      <h1 className='philosopher-font' style={{fontSize:"24px", fontWeight:"bold"}}>Add Page</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
            
              name="companyName"
              label={<span className='philosopher-font'>Company Name</span>}
              rules={[{ required: true, message: 'Please select company name!' }]}
            >
              <Select className='philosopher-font' placeholder={<span className='philosopher-font'>Select Company</span>}>
                {/* Add options for company names */}
                <Option className='philosopher-font' value="company1">Cinekraft</Option>
                <Option className='philosopher-font' value="company2">VR Technology</Option>
                <Option className='philosopher-font' value="company3">PRM Caravan</Option>
                <Option className='philosopher-font' value="company4">LightGen</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="websiteUrl"
              label={<span className='philosopher-font'>Website URL</span>}
              rules={[{ required: true, message: 'Please input website URL!' }]}
            >
              <Input className='philosopher-font'/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
           
              name="advertisementImage"
              label={<span className='philosopher-font'>Advertisement Image</span>}
              valuePropName="fileList"
              getValueFromEvent={(e) => e && e.fileList}
              rules={[{ required: true, message: 'Please upload advertisement image!' }]}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button className='philosopher-font' icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
 
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="startDate"
              label={<span className='philosopher-font'>Start Date</span>}
              rules={[{ required: true, message: 'Please select start date!' }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="expiryDate"
              label="Expiry Date"
              rules={[{ required: true, message: 'Please select expiry date!' }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input price!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="paymentMode"
              label="Payment Mode"
              rules={[{ required: true, message: 'Please select payment mode!' }]}
            >
              <Select placeholder="Select Payment Mode">
                {/* Add options for payment modes */}
                <Option value="mode1">UPI</Option>
                <Option value="mode2">Google Pay</Option>
                <Option value="Mode3">NEFT</Option>
                <Option value="mode4">Cash</Option>

              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="paymentDate"
              label="Payment Date"
              rules={[{ required: true, message: 'Please select payment date!' }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{textAlign:"center"}}>
          <Button className='philosopher-font' style={{backgroundColor:"#022135", color:"white"}} value="submit">Upload</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPageForm;
