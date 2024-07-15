import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Select, Row,Col,Modal} from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import AddBannerForm from "./AddBanner";

const { Option } = Select;

const BannerData = [
  {
    key: "1",
    companyName: "Cinekraft",
    website: "www.cinekraft.com",
    startDate: "09/10/2023",
    endDate: "16/10/2023",
    price: "300",
    paymentMode: "upi",
    paymentDate: "09/10/2023",
  },
  {
    key: "2",
    companyName: "VR Technology",
    website: "www.vrservice.com",
    startDate: "23/06/2023",
    endDate: "30/06/2023",
    price: "200",
    paymentMode: "upi",
    paymentDate: "23/06/2023",
  },
  {
    key: "3",
    companyName: "PRM Caravan",
    website: "www.prmcaravanservice.com",
    startDate: "04/04/2023",
    endDate: "11/04/2023",
    price: "250",
    paymentMode: "upi",
    paymentDate: "04/04/2023",
  },
  {
    key: "4",
    companyName: "LightGen",
    website: "www.lightgen.com",
    startDate: "18/05/2023",
    endDate: "25/05/2023",
    price: "400",
    paymentMode: "upi",
    paymentDate: "18/05/2023",
  },
];

const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Add your logic here for handling the "Add" action
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      title: <span className="philosopher-font"> No.</span>,
      dataIndex: "key",
      key: "key",
      width: "5%",
      ...getColumnSearchProps("key"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Company Name</span>,
      dataIndex: "companyName",
      key: "companyName",
      width: "12%",
      ...getColumnSearchProps("companyName"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Website</span>,
      dataIndex: "website",
      key: "website",
      width: "10%",
      ...getColumnSearchProps("website"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Start Date</span>,
      dataIndex: "startDate",
      key: "startDate",
      width: "10%",
      ...getColumnSearchProps("startDate"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">End Date</span>,
      dataIndex: "endDate",
      key: "endDate",
      width: "10%",
      ...getColumnSearchProps("endDate"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Price</span>,
      dataIndex: "price",
      key: "price",
      width: "5%",
      ...getColumnSearchProps("price"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Payment Mode</span>,
      dataIndex: "paymentMode",
      key: "paymentMode",
      width: "8%",
      ...getColumnSearchProps("paymentMode"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Payment Date</span>,
      dataIndex: "paymentDate",
      key: "paymentDate",
      width: "10%",
      ...getColumnSearchProps("paymentDate"),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },
    {
      title: <span className="philosopher-font">Actions</span>,
      key: "actions",
      width: "8%", // Let it adjust automatically
      render: (text, record) => (
        <span>
          <Button
            type="primary"
            danger
            className="philosopher-font"
            icon={<CheckOutlined />}
          ></Button>
          &nbsp;&nbsp;
          <Button
            type="primary"
            danger
            className="philosopher-font"
            icon={<DeleteOutlined />}
          ></Button>
        </span>
      ),
    },
  ];

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };
  const totalEntries = BannerData.length; // Get the total number of entries
  return (
    <Container>
      <div
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        <h4 className="mt-3 mb-3">Banner List</h4>
        <hr />
        <div>
          <div>
            <Row style={{display:"flex", justifyContent:"flex-end"}}>
              <Col>
              <div>
      <Button className="philosopher-font" style={{ backgroundColor: "#022135", color: "white" }} onClick={showModal}>
        Add
      </Button>
      <Modal
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
      >
     <AddBannerForm/>
      </Modal>
    </div>
        
            </Col>
            <Col>
            <h6 className="philosopher-font" style={{ textAlign: "end" }}>
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
            <p className="philosopher-font" style={{ textAlign: "end" }}>
             Total Entries : {totalEntries}            </p>
            </Col>
            </Row>
           
          </div>

          <Table
            columns={columns}
            dataSource={BannerData}
            pagination={{ pageSize }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
