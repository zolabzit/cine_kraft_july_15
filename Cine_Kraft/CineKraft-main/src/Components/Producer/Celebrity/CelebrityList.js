import React, { useRef, useState } from "react";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Tabs, Table, Tag } from 'antd';
import {Container} from "react-bootstrap";
import "../../../Css/Dashboard.scss";
import "../../../Css/Admin.css";

const { TabPane } = Tabs;

const CelebrityListTab = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default active tab

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

  // Sample celebrity data with additional information
  const celebrities = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/imborns?q=tbn:ANd9GcRGNR-8GyJUdLQ0YS-tQzID_Fzw5EVb79Qmuzz97t3s3d48qMUH",
      name: "Vijay",
      industry: "Kollywood",
      born: "22 Jun 1974 (age 49)",
      movies: ["Varisu", "Beast"],
      upcoming: ["Leo", "Thalapathy 68"],
      awards: ["Vikatan Favourite Hero", "Vijay Awards Favourite Hero"],
      spouse: "Sangeeta Sornalingam",
      childrens: ["Jason Sanjay", "Divya Saasha"],
      fullName: "Joseph Vijay Chandrasekhar",
      debut: "Naalaiya Theerpu (1992)",
      description:
        "Joseph Vijay Chandrasekhar, known professionally as Vijay, is an Indian actor and singer who works predominantly in Tamil cinema. He is among the highest paid actors in India and has featured in Forbes India's Celebrity 100 list on seven occasions.",
    },
    {
      id: 2,
      name: "Ravi Teja",
      industry: "Tollywood",
      born: "26 Jan 1968 (age 55)",
      movies: ["Ravanasura", "Ramarao on Duty"],
      upcoming: ["Tiger Nbornswara Rao"],
      awards: [
        "Nandi Special Jury Award 2004",
        "Nandi Award for Best Actor 2009 · Neninthe",
      ],
      spouse: "Kalyani Teja",
      childrens: ["Mokshadha Bhupatiraju","Mahadhan Bhupatiraju"],
      fullName: 'Ravi Shankar Raju Bhupatiraju',
      debut: "Ninne Pelladatha (1996)",
      description:
        "Bhupatiraju Ravi Shankar Raju, known professionally as Ravi Teja, is an Indian actor and film producer who mainly works in Telugu cinema. Known for his roles in action comedy films, he is popular by the moniker 'Mass Maharaja'.",
    },
    {
      id: 3,
      name: "Dr Shiva Rajkumar",
      industry: "Sandalwood",
      born: "12 Jul 1962 (age 61)",
      movies: ["Vedha", "Jailer"],
      upcoming: ["Ghost", "Captain Miller"],
      awards: [
        "SIIMA Award for Social Responsibility-2012 Honorary Award",
        "SIIMA Award for Best Actor-2017",
      ],
      spouse: " Geeta",
      childrens: [" Nirupama Rajkumar", "Niveditha Rajkumar"],
      fullName: "Nagaraju Shiva Puttaswamy",
      debut: "Anand (1986)",
      description:
        "Shiva Rajkumar is an Indian actor, film producer and television presenter, who predominantly works in Kannada cinema.",
    },
    {
      id: 4,
      name: "Mohanlal",
      industry: "Mollywood",
      born: "21 May 1960 (age 63)",
      movies: ["Alone", "Jailer"],
      upcoming: ["Malaikottai Vaaliban"],
      awards: [
        "National Award for Best Actor-1999 Vanaprastham",
        "2003-Best Performance In A Supporting Role (Male) Company",
      ],
      spouse: "Suchitra Mohanlal",
      childrens: ["Pranav Mohanlal", "Vismaya Mohanlal"],
      fullName: "Mohanlal Viswanathan Nair",
      debut: "Thiranottam (1978)",
      description:
        "Mohanlal Viswanathan is an Indian actor, film producer, playback singer, film distributor, and director who predominantly works in Malayalam film industry besides also having sporadically appeared in Tamil, Hindi, Telugu and Kannada films",
    },
    {
      id: 5 ,
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/08/08183840/rajinikanth-net-worth-2023.jpg",
      name: "Rajinkanth",
      industry: "Kollywood",
      born: "12 Dec 1950 (age 72)",
      movies: ["Annatha", "Jailer"],
      upcoming: ["Lal Salaam"],
      awards: ["Padma Bhushan-2000","Chevalier Sivaji Ganesan Award for Excellence in Indian Cinema-2010"],
      spouse: "Latha Rajinikanth",
      childrens: ["Aishwarya Rajinikanth","Soundarya Rajinikanth"],
      fullName: "Shivaji Rao Gaikwad",
      debut: "Apoorva Raagangal (1975)",
      description:
        "Shivaji Rao Gaikwad, known professionally as Superstar Rajinikanth, is an Indian actor who works mainly in Tamil cinema. In a career spanning over five decades, he has done 169 films that includes films in Tamil, Hindi, Telugu, Kannada, Bengali, and Malayalam.",
    },
    // Add more celebrities as needed
  ];

  // Define columns for the celebrity table
  const columns = [
    { title: <span className="philosopher-font">Name</span>, dataIndex: "name", key: "name",width:"10%",...getColumnSearchProps('name'),render: (text) => <span className='philosopher-font'>{text}</span>,},
    // { title: "Industry", dataIndex: "industry", key: "industry" },
    { title: <span className="philosopher-font">Born</span>, dataIndex: "born", key: "born" , width:"13%",...getColumnSearchProps('born'),render: (text) => <span className='philosopher-font'>{text}</span>,},
    { title: <span className="philosopher-font">FullName</span>, dataIndex: "fullName", key: "fullName", width:"10%",...getColumnSearchProps('funnName'),render: (text) => <span className='philosopher-font'>{text}</span>,},
    { title: <span className="philosopher-font">Debut</span>, dataIndex: "debut", key: "debut", width:"10%",...getColumnSearchProps('debut'),render: (text) => <span className='philosopher-font'>{text}</span>,},
    {
      title: <span className="philosopher-font">Movies</span>,
      dataIndex: "movies",
      key: "movies",
      width:"15%",
      ...getColumnSearchProps('movies'),
      render: (movies) => (
        <ul>
          {movies.map((movie, index) => (
            <Tag className="philosopher-font" key={index}>{movie}</Tag>
          ))}
        </ul>
      ),
    },
    {
      title: <span className="philosopher-font">Upcoming Movies</span>,
      dataIndex: "upcoming",
      key: "upcoming",
      width:"15%",
      ...getColumnSearchProps('upcoming'),
      render: (upcoming) => (
        <ul>
          {upcoming.map((upcoming, index) => (
            <Tag className="philosopher-font" key={index}>{upcoming}</Tag>
          ))}
        </ul>
      ),
    },
    {
      title: <span className="philosopher-font">Awards</span>,
      dataIndex: "awards",
      key: "awards",
      width:"20%",
      ...getColumnSearchProps('awards'),
      render: (awards) => (
        <ul>
          {awards.map((award, index) => (
            <Tag className="philosopher-font" key={index}>{award}</Tag>
          ))}
        </ul>
      ),
    },
    {
      title: <span className="philosopher-font">Spouse</span>,
      dataIndex: "spouse",
      key: "spouse",
      width: "10%",
      ...getColumnSearchProps('spouse'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">Childrens</span>,
      dataIndex: "childrens",
      key: "childrens",
      width:"20%",
      ...getColumnSearchProps('childrens'),
      render: (childrens) => (
        <ul>
          {childrens.map((children, index) => (
           <Tag className="philosopher-font" key={index}>{children}</Tag>
          ))}
        </ul>
      ),
    },
    // { title: "Description", dataIndex: "description", key: "description" },
  ];

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  // Filter celebrities based on the active tab
  const filteredCelebrities =
    activeTab === "all"
      ? celebrities
      : celebrities.filter((celebrity) => celebrity.industry === activeTab);

  return (
    <Container>
      <div>
        <h4 className="mt-3 mb-3">Celebrities List</h4>
        <hr />
        <Tabs defaultActiveKey={activeTab} onChange={handleTabChange} style={{fontFamily:"'Philosopher',sans-serif"}}>
          <TabPane tab="All Celebrities" key="all" style={{fontFamily:"'Philosopher',sans-serif"}}>
            <Table
              dataSource={filteredCelebrities}
              columns={columns}
              scroll={{ x: "max-content" }} style={{fontFamily:"'Philosopher',sans-serif"}} // Enable horizontal scrolling
 // Enable horizontal scrolling
            />
          </TabPane>
          <TabPane tab="Kollywood" key="Kollywood">
            <Table
              dataSource={filteredCelebrities}
              columns={columns}
              scroll={{ x: "max-content" }} // Enable horizontal scrolling
            />
          </TabPane>
          <TabPane tab="Tollywood" key="Tollywood">
            <Table
              dataSource={filteredCelebrities}
              columns={columns}
              scroll={{ x: "max-content" }} // Enable horizontal scrolling
            />
          </TabPane>
          <TabPane tab="Mollywood" key="Mollywood">
            <Table
              dataSource={filteredCelebrities}
              columns={columns}
              scroll={{ x: "max-content" }} // Enable horizontal scrolling
            />
          </TabPane>
          <TabPane tab="Sandalwood" key="Sandalwood">
            <Table
              dataSource={filteredCelebrities}
              columns={columns}
              scroll={{ x: "max-content" }} style={{}}// Enable horizontal scrolling
            />
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
};

export default CelebrityListTab;
