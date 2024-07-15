import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table,Select } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import "../../../Css/Admin.css";

const { Option } = Select;
const data = [
  {
    key: "1",
    userid: "GYHDSG6543",
    ImageURL:
      "https://img.freepik.com/premium-photo/3d-close-up-portrait-smiling-man_175690-201.jpg?size=626&ext=jpg&ga=GA1.2.1238797824.1677935514&semt=ais",
    name: "John Brown",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "New York No. 1 Lake Park",
    date: "07 May 2021"
  },
  {
    key: "2",
    userid: "FUGESE8762",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-bearded-work-leadership_18591-5278.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jim Green",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "London No. 1 Lake Park",
    date: "23 April 2022"
  },
  {
    key: "3",
    userid: "KIUYTR9870",
    ImageURL:
      "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Joe Black",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",

    date: "24 Jan 2020"
  },
  {
    key: "4",
    userid: "LEOVQW5016",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jerome",
    email: "yyyy@gmail.com",
    productname: "Clothes",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "07 May 2021"
  },
  {
    key: "5",
    userid: "GYHDSG6543",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50585.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "John Brown",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "New York No. 1 Lake Park",
    date: "21 Sep 2023"
  },
  {
    key: "6",
    userid: "FUGESE8762",
    ImageURL:
      "https://img.freepik.com/premium-vector/3d-man-avatar-happy-smiling-face-icon-young-businessman-student-freelancer_313242-1219.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jim Green",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "London No. 1 Lake Park",  
    date: "09 Oct 2020"
  },
  
  {
    key: "7",
    userid: "KIUYTR9870",
    ImageURL:
      "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Joe Black",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "04 March 2023"
  },
  {
    key: "8",
    userid: "LEOVQW5016",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-worker-occupation-success_18591-5276.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jerome",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "18 June 2021"
  },
  {
    key: "9",
    userid: "GYHDSG6543",
    ImageURL:
      "https://img.freepik.com/premium-photo/3d-close-up-portrait-smiling-man_175690-201.jpg?size=626&ext=jpg&ga=GA1.2.1238797824.1677935514&semt=ais",
    name: "John Brown",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "New York No. 1 Lake Park",
    date: "07 May 2021"
  },
  {
    key: "10",
    userid: "FUGESE8762",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-bearded-work-leadership_18591-5278.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jim Green",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "London No. 1 Lake Park",
    date: "23 April 2022"
  },
  {
    key: "11",
    userid: "KIUYTR9870",
    ImageURL:
      "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Joe Black",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",

    date: "24 Jan 2020"
  },
  {
    key: "12",
    userid: "LEOVQW5016",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jerome",
    email: "yyyy@gmail.com",
    productname: "Clothes",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "07 May 2021"
  },
  {
    key: "13",
    userid: "GYHDSG6543",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50585.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "John Brown",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "New York No. 1 Lake Park",
    date: "21 Sep 2023"
  },
  {
    key: "14",
    userid: "FUGESE8762",
    ImageURL:
      "https://img.freepik.com/premium-vector/3d-man-avatar-happy-smiling-face-icon-young-businessman-student-freelancer_313242-1219.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jim Green",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "London No. 1 Lake Park",  
    date: "09 Oct 2020"
  },
  
  {
    key: "15",
    userid: "KIUYTR9870",
    ImageURL:
      "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Joe Black",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "04 March 2023"
  },
  {
    key: "16",
    userid: "LEOVQW5016",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-worker-occupation-success_18591-5276.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jerome",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "18 June 2021"
  },
  {
    key: "17",
    userid: "GYHDSG6543",
    ImageURL:
      "https://img.freepik.com/premium-photo/3d-close-up-portrait-smiling-man_175690-201.jpg?size=626&ext=jpg&ga=GA1.2.1238797824.1677935514&semt=ais",
    name: "John Brown",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "New York No. 1 Lake Park",
    date: "07 May 2021"
  },
  {
    key: "18",
    userid: "FUGESE8762",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-bearded-work-leadership_18591-5278.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jim Green",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "London No. 1 Lake Park",
    date: "23 April 2022"
  },
  {
    key: "19",
    userid: "KIUYTR9870",
    ImageURL:
      "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Joe Black",
    email: "yyyy@gmail.com",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",

    date: "24 Jan 2020"
  },
  {
    key: "20",
    userid: "LEOVQW5016",
    ImageURL:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&ext=jpg&ga=GA1.1.1238797824.1677935514&semt=ais",
    name: "Jerome",
    email: "yyyy@gmail.com",
    productname: "Clothes",
    mobile: "9876543210",
    address: "Sydney No. 1 Lake Park",
    date: "07 May 2021"
  },
];
const UserList = () => {
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
        <Input className="philosopher-font"
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
          <Button className="philosopher-font"
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
          <Button className="philosopher-font"
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button className="philosopher-font"
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
          <Button className="philosopher-font"
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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
      title: <span className="philosopher-font">User ID</span>,
      dataIndex: 'userid', // Use 'userid' from your data array
      key: 'userid',
      width: '10%',
      ...getColumnSearchProps('userid'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Profile</span>,
      dataIndex: 'ImageURL',
      key: 'ImageURL',
      render: (ImageURL) => (
        <img src={ImageURL} alt="" style={{ width: '60px', borderRadius: '50%' }} />
      ),
    },
    {
      title: <span className="philosopher-font">User Name</span>,
      dataIndex: 'name',
      width: '15%',
      ...getColumnSearchProps('name'),
      render: (text) => <span className="philosopher-font">{text}</span>,
    },    
    {
      title: <span className="philosopher-font">Email Id</span>,
      dataIndex: 'email',
      width: '15%',
      ...getColumnSearchProps('email'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Mobile No</span>,
      dataIndex: 'mobile',
      width: '13%',
      ...getColumnSearchProps('mobile'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Address</span>,
      dataIndex: 'address',
      key: 'address',
      width: '25%',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Join On</span>,
      dataIndex: 'date',
      width: '15%',
      ...getColumnSearchProps('date'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
  ];
  
  

  const [entryCount] = useState(data.length);
  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  return (
    <div className="philosopher-font"
      style={{
        overflowX: "scroll",
        overflowY: "hidden",
      }}
    >
      <h4 className="mt-3 mb-3">Users List</h4>
      <hr/>
      <div>
      
      <div>
        <h6 >Show&nbsp;
        <Select className="philosopher-font" value={pageSize} onChange={handlePageSizeChange}>
          <Option className="philosopher-font" value={10}>10</Option>
          <Option className="philosopher-font" value={20}>20</Option>
          <Option className="philosopher-font" value={30}>25</Option>
          <Option className="philosopher-font" value={40}>30</Option>
          <Option className="philosopher-font" value={50}>35</Option>
          <Option className="philosopher-font" value={60}>40</Option>
          <Option className="philosopher-font" value={70}>45</Option>
          <Option className="philosopher-font" value={80}>50</Option>
        </Select>&nbsp;
        Entries</h6>
        <h6 style={{textAlign:'end'}}>Total Entries: {entryCount}</h6>
      
        </div>
        <Table
          className="philosopher-font"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize }}
        />
      </div>
    </div>
  );
};
export default UserList;
