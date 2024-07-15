import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Select } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";

const NonFictionalTvShows = () => {
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
    //   dataIndex: "NonFictionImage",
    //   key: "nonfictionImage",
    //   width: "1%",
    //   render: (nonfictionImage) => (
    //     <img
    //       src={nonfictionImage}
    //       alt=""
    //       style={{ width: "80px", height: "80px", borderRadius: "50%" }}
    //     />
    //   ),
    // },
    {
      title: <span className="philosopher-font">Title</span>,
      dataIndex: "title",
      key: "title",
      width: 150,
      ...getColumnSearchProps("title"),
      render: (text) => <span className="philosopher-font">{text}</span>
        },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    //   width: 400,
    //   ...getColumnSearchProps("description"),
    // },
    {
      title: <span className="philosopher-font">Director</span>,
      dataIndex: "director",
      key: "director",
      width: 150,
      ...getColumnSearchProps("director"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Host",
    //   dataIndex: "host",
    //   key: "host",
    //   width: 200,
    //   ...getColumnSearchProps("host"),
    // },
    {
      title: <span className="philosopher-font">Genre</span>,
      dataIndex: "genre",
      key: "genre",
      width: 150,
      ...getColumnSearchProps("genre"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Language</span>,
      dataIndex: "language",
      key: "language",
      width: 100,
      ...getColumnSearchProps("language"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Channel</span>,
      dataIndex: "channel",
      key: "channel",
      width: 100,
      ...getColumnSearchProps("channel"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Judges",
    //   dataIndex: "judges",
    //   key: "judges",
    //   width: 300,
    //   ...getColumnSearchProps("judges"),
    // },
    // {
    //   title: "Cast / Contestants",
    //   dataIndex: "cast",
    //   key: "cast",
    //   width: 400,
    //   ...getColumnSearchProps("cast"),
    // },
    {
      title: <span className="philosopher-font">Ratings</span>,
      dataIndex: "ratings",
      key: "ratings",
      width: 80,
      ...getColumnSearchProps("ratings"),
      render: (text) => <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Actions</span>,
      key: "actions",
      width: 150, // Let it adjust automatically
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
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   key: "actions",
    //   width: "1%",
    //   render: (_, record) => (
    //     <Space>
    //       <a href={`edit/${record.key}`}>Edit</a>{" "}
    //       {/* Replace with your edit link */}|
    //       <a href={`delete/${record.key}`}>Delete</a>{" "}
    //       {/* Replace with your delete link */}
    //     </Space>
    //   ),
    // },
  ];

  const NonFictionalTvShowsData = [
    {
      NonFictionImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbikwqRjEYsWrZjqmPDySWnihU6GfJ9FCTw&usqp=CAU",
      title: "Neeya Naana",
      description:
        "A talk show featuring debates on social, cultural, and contemporary issues.",
      director: "Anthony Thirunelveli",
      host: "Gopinath Chandran",
      genre: "Reality Show",
      language: "Tamil",
      channel: "Star Vijay",
      judges: "Gopinath Chandran",
      cast: "TBA",
      editor: "Aravinth Raghuraman",
      production: "Series Anthony",
      seasons: "23 Seasons",
      ratings: "8.8/10",
    },
    {
      NonFictionImage: "https://i.ytimg.com/vi/6HEFvyAdCbI/maxresdefault.jpg",
      title: "Super Singer",
      description:
        "Participants from different parts of the country showcase their singing talent to impress a panel of eminent judges and win the contest.",
      director: "	Ranjit Roy and Sangit Tiwari",
      host: "Priyanka Deshpande, Ma Ka Pa Anand",
      genre: "Singing | Music",
      language: "Tamil",
      channel: "Star Vijay",
      judges:
        "Anuradha Sriram, Benny Dayal, P. Unnikrishnan, Chitra, Shweta Mohan",
      cast: "Mookithi Murugan, Sivaangi Krishnakumar, Sai Sharan, Ajesh, Kalpana Raghavendran",
      editor: "Jaganathan, Aravinth, Sridhar, Raghuraman, Bala",
      production: "Vijay TV",
      seasons: "10 Seasons",
      ratings: "8.6/10",
    },
    {
      NonFictionImage:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3798/1563798-h-a08f4910fe7b",
      title: "Cooku with Comali",
      description:
        "The host invites various personalities from the entertainment industry who team up with comedians and prepare delicious dishes to impress the judges.",
      director: "Parthiv Mani",
      host: "VJ Rakshan",
      genre: "Comedy | Cooking",
      language: "Tamil",
      channel: "Star Vijay",
      judges: "K. Damodharan, Venkatesh Bhat",
      cast: "Pugazh, Sivaangi Krishnakumar, Manimegalai, Sunita Gogoi, KPY Bala, Mohamed Kuraishi",
      editor: "Jaganathan, Aravinth, Sridhar, Raghuraman, Bala",
      production: "Media Masons",
      seasons: "4 Seasons",
      ratings: "9.3/10",
    },
    {
      NonFictionImage:
        "https://upload.wikimedia.org/wikipedia/en/6/6b/Kodeeswari.png",
      title: "Kodeeswari",
      description:
        "A quiz show hosted by women, based on the format of 'Who Wants to Be a Millionaire.'",
      director: "TBA",
      host: "Radhika Sarathkumar",
      genre: "Quiz show | Game ",
      language: "Tamil",
      channel: "Colors Tamil",
      judges: "Radhika Sarathkumar",
      cast: "Aishwarya Rajesh, Varalaxmi, Radha, Ramya Krishnan, Meena, Poornima, K. Bhagyaraj",
      editor: "Jaganathan",
      production: "Media Masons",
      seasons: "1 Season",
      ratings: "5.7/10",
    },
    {
      NonFictionImage:
        "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-4z5190052/list/1170x658withlogoae88792d9f6b4459ba9389b6e55bf61a.jpg",
      title: "Dance Jodi Dance",
      description:
        "A dance competition show that features talented dancers and celebrity judges.",
      director: " Kaushik. R.",
      host: "Deepak Dinkar",
      genre: "Dance Show",
      language: "Tamil",
      channel: "Zee Tamil",
      judges: "Baba Bhaskar, Sneha and Sangeetha Krish",
      cast: "Meesha & Jeevan, Yuthan & Nancy, Ruth & Rinish Raj, Krishnamoorthy & Raveena, Vaishnavi & Avinash, Dominic & Preetha",
      editor: "TBA",
      production: "Monk Studios",
      seasons: "4 Seasons",
      ratings: "7.9/10",
    },
    {
      NonFictionImage:
        "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-1469/list/1170x658withlogo0bc0066490e74889b7eb9632b15f698d.jpg",
      title: "Junior Super Stars",
      description:
        "A talent hunt show for young kids to showcase their talents in various categories.",
      director: "Praveen G",
      host: "Kiki Vijay (Season 1,2 & 4) Kamal Dhandapani (Season 3) Anjana Rangan (Season 3)",
      genre: "Talent show Reality",
      language: "Tamil",
      channel: "Zee Tamil",
      judges:
        "K. Bhagyaraj (Season 1,2 & 4) Khushbu (Season 1) Archana Chandhoke (Season 1) Devayani Rajakumaran (Season 3) Rachitha Mahalakshmi (Season 3) Sneha (Season 4) Mirchi Senthil (Season 4) Samyuktha Shanmughanathan (Season 4)",
      cast: "Ashwanth Ashokkumar, Bhavass, Elantamizh",
      editor: "TBA",
      production: "ZEE5",
      seasons: "4 Seasons",
      ratings: "8.2/10",
    },
    {
      NonFictionImage:
        "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-2189/list/062189list.jpg",
      title: "Super Mom",
      description:
        "A reality show that celebrates the skills and talents of mothers.",
      director: "Parthiv Mani",
      host: "Archana Chandhoke (S1-S3),Zaara Vineet (S1-S3),VJ Vijay (Super Mom Reunion),Poornitha (Super Mom Reunion)",
      genre: "Children Reality Talent show",
      language: "Tamil",
      channel: "Zee Tamil",
      judges: "Priya Raman (Super Mom Reunion); Khushbu (Season 3)",
      cast: "Pugazh, Sivaangi Krishnakumar, Manimegalai, Sunita Gogoi, KPY Bala, Mohamed Kuraishi",
      editor: "Jaganathan, Aravinth, Sridhar, Raghuraman, Bala",
      production: "Media Masons",
      seasons: "3 Seasons",
      ratings: "9.3/10",
    },
  ];

  const { Option } = Select;

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const totalEntries = NonFictionalTvShowsData.length; // Get the total number of entries

  return (
    <Container>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
          
        <h4 className="mt-3 mb-3">Non-Fictional TV Shows</h4>
        <hr />
        <div>
            <h6 style={{ textAlign: 'end' }}>
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
            <p style={{textAlign:"end"}}><strong>Total Entries: {totalEntries}</strong></p> {/* Display the total number of entries */}
          </div>
        <div style={{ paddingTop: "3%" }}>
          <Table
            columns={columns}
            dataSource={NonFictionalTvShowsData}
            // scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default NonFictionalTvShows;
