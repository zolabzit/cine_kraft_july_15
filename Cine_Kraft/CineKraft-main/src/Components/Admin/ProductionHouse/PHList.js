import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Select } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";
import { CheckOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const productionHouses = [
  {
      key: "1", 
      name: "Sun Pictures", 
      producer: "Kalanithi Maran", 
      founder: "Kalanithi Maran", 
      establishedYear: "2000", 
      socialLinks: "https://www.sunpictures.in/", 
      language: ["Tamil"], 
      city: "Chennai"
  },
  {
      key: "2", 
      name: "Lyca Productions", 
      producer: "A Subaskaran", 
      founder: "A Subaskaran", 
      establishedYear: "2014", 
      language: ["Tamil"], 
      city: "Chennai"
  },
  {
      key: "3", 
      name: "Super Good Films", 
      producer: "R B Choudary", 
      founder: "R B Choudary", 
      establishedYear: "1988", 
      language: ["Tamil", "Telugu"], 
      city: "Chennai"
  },
];

const ProductionHouseLists = () => {
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
    {
      title: <span className="philosopher-font">Company Name</span>,
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      ...getColumnSearchProps('name'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Producer</span>,
      dataIndex: 'producer',
      key: 'producer',
      width: '10%',
      ...getColumnSearchProps('producer'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Established</span>,
      dataIndex: 'establishedYear',
      key: 'establishedYear',
      width: '10%',
      ...getColumnSearchProps('establishedYear'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Language</span>,
      dataIndex: 'language',
      key: 'language',
      width: '10%',
      ...getColumnSearchProps('language'),
      render: (languages) => <span className='philosopher-font'>{languages.join(", ")}</span>,
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
      title: <span className="philosopher-font">Actions</span>,
      key: "actions",
      width: "10%",
      render: (text, record) => (
        <span>
          <Button type="primary" danger className="philosopher-font" icon={<CheckOutlined />}></Button>&nbsp;&nbsp;
          <Button type="primary" danger className="philosopher-font" icon={<EditOutlined />}></Button>&nbsp;&nbsp;
          <Button type="primary" danger className="philosopher-font" icon={<DeleteOutlined />}></Button>
        </span>
      ),
    },
  ];

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const totalEntries = productionHouses.length;

  return (
    <Container>
      <div
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        <h4 className="mt-3 mb-3">Production House List</h4>
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
            <p style={{ textAlign: "end" }}><strong>Total Entries : {totalEntries}</strong></p>
          </div>
          <Table columns={columns} dataSource={productionHouses} pagination={{ pageSize }} />
        </div>
      </div>
    </Container>
  );
};

export default ProductionHouseLists;
