import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Select } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";
import { CheckOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const VendorsData = [
   {
key: "1", name:"Trimatis", mobile: "6383038921", subCategory: "Digital Marketing", category: "Marketing", city: "Bangalore"
   },
   {
    key: "2", name:"Aroganam", mobile: "8956412356", subCategory: "VFX Graphic Design", category: "Production", city: "Chennai"
       },
       {
        key: "3", name:"Trident", mobile: "6932148574", subCategory: "Theme based promotion", category: "Marketing", city: "Bangalore"
           },
           {
            key: "4", name:"Cognex", mobile: "7569320890", subCategory: "Censor certificate support", category: "Post Production", city: "Chennai"
               },
  ];
  

  const VendorsList = () => {
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

  const columns = [
    // {
    //     title: <span className="philosopher-font"> No.</span>,
    //     dataIndex: 'key',
    //     key: 'key',
    //     width: '5%',
    //     ...getColumnSearchProps('key'),
    //     render: (text) => <span className='philosopher-font'>{text}</span>,
    //   },
    {
      title: <span className="philosopher-font">Company Name</span>,
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      ...getColumnSearchProps('name'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Mobile</span>,
      dataIndex: 'mobile',
      key: 'mobile',
      width: '10%',
      ...getColumnSearchProps('mobile'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Category</span>,
      dataIndex: 'category',
      key: 'category',
      width: '15%',
      ...getColumnSearchProps('category'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Sub Category</span>,
      dataIndex: 'subCategory',
      key: 'subCategory',
      width: '20%',
      ...getColumnSearchProps('subCategory'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
  
      {
        title: <span className="philosopher-font">City</span>,
        dataIndex: 'city',
        key: 'city',
        width: '10%',
        ...getColumnSearchProps('city'),
        render: (text) => <span className='philosopher-font'>{text}</span>,
      },
      {
        title: <span className="philosopher-font">Advertisement</span>,
        key: "advertisement",
        width: "10%", // Let it adjust automatically
        render: (text, record) => (

          <span>
            <Button type="primary" danger className="philosopher-font" icon={<CheckOutlined />}>
              
            </Button>&nbsp;&nbsp;    
            <Button type="primary" danger className="philosopher-font" icon={<EditOutlined />}>
              
            </Button>&nbsp;&nbsp;
            <Button type="primary" danger className="philosopher-font" icon={<DeleteOutlined />}>
              
            </Button>
          </span>
        ),
      },
      {
        title: <span className="philosopher-font">Actions</span>,
        key: "actions",
        width: "10%", // Let it adjust automatically
        render: (text, record) => (
          <span>
            <Button type="primary" danger className="philosopher-font" icon={<CheckOutlined />}>
              
            </Button>&nbsp;&nbsp;
            <Button type="primary" danger className="philosopher-font" icon={<DeleteOutlined />}>
              
            </Button>
          </span>
        ),
      },
  ];
  
  

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };
  const totalEntries = VendorsData.length; // Get the total number of entries
  return (
    <Container>
      <div
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        <h4 className="mt-3 mb-3">Vendors List</h4>
        <hr />
        <div>
          <div>
            <h6 style={{ textAlign: "end" }}>
              Show&nbsp;
              <Select value={pageSize} onChange={handlePageSizeChange}>
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={30}>25</Option>
                <Option value={40}>30</Option>
                <Option value={50}>35</Option>
                <Option value={60}>40</Option>
                <Option value={70}>45</Option>
                <Option value={80}>50</Option>
              </Select>
            </h6>
            <p style={{textAlign:"end"}}><strong>Total Entries : {totalEntries}</strong></p>
          </div>

          <Table columns={columns} dataSource={VendorsData} pagination={{ pageSize }} />
        </div>
      </div>
    </Container>
  );
};

export default VendorsList;
