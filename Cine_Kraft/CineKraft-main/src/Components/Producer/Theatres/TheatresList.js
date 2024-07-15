import React, { useRef, useState } from "react";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Tabs, Table, Tag, Rate } from 'antd';
import {Container} from "react-bootstrap";
import "../../../Css/Dashboard.scss";
import "../../../Css/Admin.css";

const { TabPane } = Tabs;

const TheaterListTab = () => {
  const [activeTab, setActiveTab] = useState('all'); // Default active tab

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // Sample theater data
  const theaters = [
    {
      id: 1,
      name: 'Sri Venkateswara',
      location: 'Bangalore',
      capacity: 200,
      showTimes: ['10:00 AM', '2:00 PM', '6:00 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['Dolby Atmos', '3D Projection'],
      amenities: ['Concessions Stand', 'Comfortable Seating'],
      description: 'A modern theater in the heart of Bangalore.',
      rating: 3,
    },
    {
      id: 2,
      name: 'AGS Cinemas',
      location: 'TamilNadu',
      capacity: 300,
      showTimes: ['11:00 AM', '3:00 PM', '7:00 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['IMAX', 'VIP Seating'],
      amenities: ['Concessions Stand', 'In-Seat Food Service'],
      description: 'Enjoy the latest movies in TamilNadu.',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'PVR Multiplex',
      location: 'Karnataka',
      capacity: 180,
      showTimes: ['9:30 AM', '1:30 PM', '5:30 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['4D Experience', 'Reserved Seating'],
      amenities: ['Concessions Stand', 'Game Arcade'],
      description: 'The best cinema experience in Karnataka.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Koramangala IMAX',
      location: 'Bangalore',
      capacity: 150,
      showTimes: ['10:30 AM', '1:30 PM', '4:30 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['Dolby Atmos', '3D Projection'],
      amenities: ['Concessions Stand', 'Comfortable Seating'],
      description: 'A modern theater in the heart of Bangalore.',
      rating: 3,
    },
    {
      id: 4,
      name: 'Rohini Silver Screen',
      location: 'TamilNadu',
      capacity: 400,
      showTimes: ['11:00 AM', '3:00 PM', '7:00 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['IMAX', 'VIP Seating'],
      amenities: ['Concessions Stand', 'In-Seat Food Service'],
      description: 'Enjoy the latest movies in TamilNadu.',
      rating: 4.2,
    },
    {
      id: 5,
      name: 'Sathya 4K Dolby Cinema',
      location: 'Karnataka',
      capacity: 250,
      showTimes: ['9:30 AM', '1:30 PM', '5:30 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['4D Experience', 'Reserved Seating'],
      amenities: ['Concessions Stand', 'Game Arcade'],
      description: 'The best cinema experience in Karnataka.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Ram Cinemas',
      location: 'TamilNadu',
      capacity: 500,
      showTimes: ['10:30 AM', '1:30 PM', '4:30 PM'],
      ticketPrice: ['60', '100', '150', '200', '300'],
      facilities: ['Dolby Atmos', '3D Projection'],
      amenities: ['Concessions Stand', 'Comfortable Seating'],
      description: 'A modern theater in the heart of Bangalore.',
      rating: 4,
    },
    // Add more theaters as needed
  ];

  // Define columns for the theater table
 

const columns = [
  { title: <span className='philosopher-font'>Name</span>, dataIndex:'name', key: 'name', width: '12%',...getColumnSearchProps('name'),render: (text) => <span className='philosopher-font'>{text}</span>,},
  { title: <span className='philosopher-font'>Location</span>, dataIndex: 'location', key: 'location', width: '8%',...getColumnSearchProps('location'),render: (text) => <span className='philosopher-font'>{text}</span>, },
  { title: <span className='philosopher-font'>Capacity</span>, dataIndex: 'capacity', key: 'capacity', width: '5%',...getColumnSearchProps('capacity'),render: (text) => <span className='philosopher-font'>{text}</span>, },
  {
    title: <span className='philosopher-font'>Facilities</span>,
    dataIndex: 'facilities',
    key: 'facilities',
    width: '10%',
    ...getColumnSearchProps('facilities'),
    render: (facilities) => (
    
        <div>
          {facilities.map((facility) => (
            <Tag className='philosopher-font' key={facility}>{facility}</Tag>
          ))}
        </div>
 
    ),
  },
  {
    title: <span className='philosopher-font'>Amenities</span>,
    dataIndex: 'amenities',
    key: 'amenities',
    width: '10%',
    ...getColumnSearchProps('amenities'),
    render: (amenities) => (
    
        <div >
          {amenities.map((amenity) => (
            <Tag className='philosopher-font' key={amenity}>{amenity}</Tag>
          ))}
        </div>

    ),
  },
  {
    title: <span className='philosopher-font'>Rating</span>,
    dataIndex: 'rating',
    key: 'rating',
    width: '15%',
    ...getColumnSearchProps('rating'),
    render: (rating) => (
    
        <Rate className='philosopher-font' disabled defaultValue={rating} />

    ),
  },
];

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  // Filter theaters based on the active tab
  const filteredTheaters =
    activeTab === 'all' ? theaters : theaters.filter((theater) => theater.location === activeTab);

  return (
  <Container>
      <div >
        <h4 className="mt-3 mb-3">Theatres List</h4>
        <hr />
      <Tabs className='philosopher-font' defaultActiveKey={activeTab} onChange={handleTabChange} style={{paddingTop:"2%"}}  >
        <TabPane  tab="All Theaters" key="all">
          <Table  dataSource={filteredTheaters} columns={columns} />
        </TabPane>
        {/* You can add more tabs for different locations */}
        <TabPane  tab="Bangalore" key="Bangalore">
          <Table  dataSource={filteredTheaters} columns={columns}  />
        </TabPane>
        <TabPane  tab="TamilNadu" key="TamilNadu">
          <Table  dataSource={filteredTheaters} columns={columns} />
        </TabPane>
        <TabPane  tab="Karnataka" key="Karnataka">
          <Table  dataSource={filteredTheaters} columns={columns} />
        </TabPane>
        {/* Add more location tabs as needed */}
      </Tabs>
    </div>
  </Container>
  );
};

export default TheaterListTab;
