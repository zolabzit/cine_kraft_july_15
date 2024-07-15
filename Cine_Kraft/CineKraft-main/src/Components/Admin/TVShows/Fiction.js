import React, { useRef, useState } from "react";
import { Select, Table, Space, Button, Input } from "antd";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";

const Fiction = [
  {
    key: "1",
    FictionImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE5IGVtPm4r5jG-dlf9tQ2Ymc8wu-CgsiaVu2M9VL4_3s0XJd8",
    title: "The Mandalorian",
    directorName:
      " Jon Favreau, Deborah Chow",
      // , Taika Waititi, Rick Famuyiwa, Bryce Dallas Howard, Dave Filoni",
    writerName:
      " Jon Favreau, Dave Filoni, Rick Famuyiwa, George Lucas, Christopher Yost",
    cast: "Pedro Pascal, Gina Garano, Carl Weathers, Giancarlo Esposito, Dave Filoni, Rasario Dawson",
    musicDirector: "Ludwig Göransson",
    dop: "Dean Cundey",
    editor:
      "Eisen, ACE, Jeff Seibenick, Dana Glauberman, ACE, and Dylan Firshein.",
    productionCmpny: "Lucasfilm Fairview Entertainment Golem Creations  ",
    yearofRelease: "12 November 2019",
    genre: "Action | Adventure | Fantasy",
    Episodes: " 350 Episodes",
    Budget: "$360 million.",
    description:
      "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.",
    ratings: "8.7",
  },
  {
    key: "2",
    FictionImage:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    title: "Stranger Things",
    directorName: " Matt Duffer, Ross Duffer",
    writerName:
      "Jessie Nickson-Lopez, Justin Doble, Kate Trefry, Paul Dichter, Jessica Mecklenburg",
    cast: "Milli Bobby Brown,Finn Wolfhard, Noah Schnapp,Caleb McLaughlin,Sadie Sink, Gaten Matarazzo",
    musicDirector: "Kyle Dixon & Michael Stein ",
    dop: "Tim Ives",
    editor: "Dean Zimmerman",
    productionCmpny: " Monkey Massacre Productions & 21 Laps Entertainment, ",
    yearofRelease: "15 July 2016",
    genre: "Science Fiction | Horror | Mystery | Drama",
    Episodes: "400 Episodes",
    Budget: "$270 million (season 4)",
    description:
      "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    ratings: "8.7",
  },
  {
    key: "3",
    FictionImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFCumqCVMfau0D5190VoNjQnaibQoc-ksyHQhYA5uiboLYCglm",
    title: "Loki",
    directorName: "Kate Herron",
    writerName: "Michael Waldron, Tom Kauffman, Bisha K.Ali, Jack Kirby",
    cast: "Tom Hiddleston, Sophia Di Martino, Jonathan Majors, Owen Wilson, Tara Strong",
    musicDirector: "Natalie Holt",
    dop: "	Autumn Durald Arkapaw (season 1) Isaac Bauman (season 2)",
    editor: "Paul Zucker Calum Ross Emma McCleave",
    productionCmpny: "Marvel Studios",
    yearofRelease: "9 June 2021 ",
    genre: "Action | Adventure | Fantasy | Crime | Thriller | Science Fiction",
    Episodes: " 200 Episodes",
    Budget: "$141 million",
    description:
      "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
    ratings: "8.2",
  },
  {
    key: "4",
    FictionImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMS7oahS942ONrJCZjnticmZvLokM74iwjtT3HLamyxsQNsLuU",
    title: "Lost in Space",
    directorName: "Stephen Hopkins",
    writerName: "Zac Estrin",
    cast: "Maxwell Jenkins, Mina Sundwall, Toby Stephens, Molly Parker, Taylor Russell",
    musicDirector: "Bruce Broughton",
    dop: "Peter Levy",
    editor: "Ray Lovejoy",
    productionCmpny: "New Line Cinema Prelude Pictures Saltire Entertainment",
    yearofRelease: "13 April 2018",
    genre: "Adventure | Family Drama | Science Fiction",
    Episodes: " 300 Episodes",
    Budget: "8 crores USD",
    description:
      "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
    ratings: "7.3",
  },
  //   {
  //     key: "5",
  //     FictionImage:
  //       "",
  //     title: "",
  //     directorName: "",
  //     writerName: "",
  //     cast: "",
  //     musicDirector: "",
  //     dop: "",
  //     editor: "",
  //     productionCmpny: "",
  //     yearofRelease: "",
  //     genre: "Action | Adventure | Fantasy | Crime | Thriller | Science Fiction",
  //     Episodes: " 2 Episodes",
  //     Budget: "$141 million",
  //     description: "",
  //     ratings: "",
  //   },
];

const FictionTvShows = () => {
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
    //   title: "Image",
    //   dataIndex: "FictionImage",
    //   key: "fictionImage",
    //   width: "1%",
    //   render: (fictionImage) => (
    //     <img
    //       src={fictionImage}
    //       alt=""
    //       style={{ width: "80px", height: "80px", borderRadius: "50%" }}
    //     />
    //   ),
    // },
    {
      title: <span className="philosopher-font">Title</span>,
      dataIndex: "title",
      key: "title",
      width: "1%",
      ...getColumnSearchProps("title"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Director</span>,
      dataIndex: "directorName",
      key: "directorName",
      width: "2%",
      ...getColumnSearchProps("directorName"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Writer",
    //   dataIndex: "writerName",
    //   key: "writerName",
    //   width: "2%",
    //   ...getColumnSearchProps("writerName"),
    // },
    // {
    //   title: "Cast",
    //   dataIndex: "cast",
    //   key: "cast",
    //   width: "3%",
    //   ...getColumnSearchProps("cast"),
    // },
    {
      title: <span className="philosopher-font">Released On</span>,
      dataIndex: "yearofRelease",
      key: "yearofRelease",
      width: "1%",
      ...getColumnSearchProps("yearofRelease"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Genre",
    //   dataIndex: "genre",
    //   key: "genre",
    //   width: "2%",
    //   ...getColumnSearchProps("genre"),
    // },
    {
      title: <span className="philosopher-font">Episodes</span>,
      dataIndex: "Episodes",
      key: "Episodes",
      width: "1%",
      ...getColumnSearchProps("Episodes"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Music By",
    //   dataIndex: "musicDirector",
    //   key: "musicDirector",
    //   width: "1%",
    //   ...getColumnSearchProps("musicDirector"),
    // },
    // {
    //   title: "DOP",
    //   dataIndex: "dop",
    //   key: "dop",
    //   width: "2%",
    //   ...getColumnSearchProps("dop"),
    // },
    // {
    //   title: "Edited By",
    //   dataIndex: "editor",
    //   key: "editor",
    //   width: "2%",
    //   ...getColumnSearchProps("editor"),
    // },
    // {
    //   title: "Production",
    //   dataIndex: "productionCmpny",
    //   key: "productionCmpny",
    //   width: "2%",
    //   ...getColumnSearchProps("productionCmpny"),
    // },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    //   width: "3%",
    //   ...getColumnSearchProps("description"),
    // },
    {
      title: <span className="philosopher-font">Ratings</span>,
      dataIndex: "ratings",
      key: "ratings",
      width: "1%",
      ...getColumnSearchProps("ratings"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Actions</span>,
      key: "actions",
      width: "1%", // Let it adjust automatically
      render: (text, record) => (
        <span>
          <Button type="primary" danger className="philosopher-font">
            Edit
          </Button>&nbsp;&nbsp;
          <Button type="primary" danger className="philosopher-font">
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const totalEntries = Fiction.length;

  return (
    <Container>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <h4 className="mt-3 mb-3">Fictional Tv Shows</h4>
        <hr />
        <div>
          <div>
            <h6 style={{ textAlign: "end" }}>
              Show&nbsp;
              <Select value={pageSize} onChange={handlePageSizeChange}>
                {/* ... your options ... */}
              </Select>
            </h6>
            <p style={{textAlign:"end"}}><strong>Total Entries : {totalEntries}</strong></p>
          </div>
          <Table
            columns={columns}
            dataSource={Fiction}
            // scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default FictionTvShows;
