import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";


const { Option } = Select;

const AwardShowsData = [
  {eventid: "1",
    eventName: "Pre-release event of 'Iraivan'",
    date: "September 24, 2023",
    location: "Chennai",
    host: "VJ Paaru",
    movieCast: "Jayam Ravi, Nayanthara, Rahul Bose, Ashish Vidyarthi, Vijayalakshmi, Narain",
    movieCrew: "I. Ahmed,",
    musicDirector: "Yuvan Shankar Raja",
    productionBanner: "Passion Studios",
    specialGuest: [""],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    organizers: ["Sudhan, Jayaram G."],
    broadcastInfo: {
      channel: "",
      time: "",
    },
    images: [
    "https://i.ytimg.com/vi/9sX1L1poAwU/maxresdefault.jpg"  
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=rO5W4fhbB28",
    },
  },
  {eventid: "2",
  eventName: "Ratham Press Meet",
  date: "September 29, 2023",
  location: "Chennai",
  host: "Unknown",
  movieCast: "Vijay Antony, Mahima Nambiyar, Nanditha Swetha, Remya Nambeesan, Jegan Krishna",
  movieCrew: "C.S. Amudhan, Thozhar Aathi, Athisha, Senthilraghavan, T.S. Suresh",
  musicDirector: "Kannan Narayanan	",
  productionBanner: "Infiniti Film Venture",
  specialGuest: [""],
  contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
  organizers: ["G. Dhananjayan."],
  broadcastInfo: {
    channel: "",
    time: "",
  },
  images: [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2Gae8Mz7NHIe-EB2r-k3cACSNzk0JqdE7DDKj0r2OQkPV69PHjJdWCoAswl0lSyB2oM&usqp=CAU"  
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=rXHVi0qdKvk",
  },
},
{eventid: "3",
  eventName: "Don Pre Release Trailer Launch Event",
  date: "May 04, 2022",
  location: "Chennai",
  host: "RJ Vijay & VJ Anjana",
  movieCast: "Sivakarthikeyan, Priyanka Mohan, S.J. Suryah, Samuthirakani, RJ Vijay, Soori",
  movieCrew: "Cibi Chakaravarthi, K. M. Bhaskaran, A. Sreekar Prasad, K. Udaya Kumar, Vicky",
  musicDirector: "Anirudh Ravichander",
  productionBanner: "Lyca Productions & Sivakarthikeyan Productions",
  specialGuest: [""],
  contactInfo: "Address: No 9/3, B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
  organizers: ["Lyca Productions"],
  broadcastInfo: {
    channel: "Sun Tv",
    time: "6.30PM",
  },
  images: [
    "https://i.ytimg.com/vi/sJnda3-QsII/maxresdefault.jpg"
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=BMC6ZFkTVuc",
  },
}
];

const MusicConcertsList = () => {
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
    //   title: 'Image',
    //   dataIndex: 'images',
    //   key: 'images',
    //   render: (images) => (
    //     <img src={images} alt="" style={{ width: '80px',height: '80px', borderRadius: '50%' }} />
    //   ),
    //   width: '10%',
    // },
    {
      title: <span className='philosopher-font'>Event Name</span>,
      dataIndex: 'eventName',
      key: 'eventName',
      width: '300',
      ...getColumnSearchProps('eventName'),
      render: (text) => <span className='philosopher-font'>{text}</span>
    },
    {
      title: <span className='philosopher-font'>Date</span>,
      dataIndex: 'date',
      key: 'date',
      width: '200',
      ...getColumnSearchProps('date'),
      render: (text) => <span className='philosopher-font'>{text}</span>
    },
    {
      title: <span className='philosopher-font'>Location</span>,
      dataIndex: 'location',
      key: 'location',
      width: '300',
      ...getColumnSearchProps('location'),
      render: (text) => <span className='philosopher-font'>{text}</span>
    },
    // {
    //   title: "Host",
    //   dataIndex: "host",
    //   key: "host",
    //   width: "200",
    //   ...getColumnSearchProps("host"),
    // },
    // {
    //   title: "Movie Cast",
    //   dataIndex: "movieCast",
    //   key: "movieCast",
    //   width: "200",
    //   ...getColumnSearchProps("movieCast"),
    // },
    // {
    //   title: "Movie Crew",
    //   dataIndex: "movieCrew",
    //   key: "movieCrew",
    //   width: "200",
    //   ...getColumnSearchProps("movieCrew"),
    // },
    // {
    //   title: "Music Director",
    //   dataIndex: "musicDirector",
    //   key: "musicDirector",
    //   width: "200",
    //   ...getColumnSearchProps("musicDirector"),
    // },

    {
      title: <span style={{ fontFamily: 'Philosopher, sans-serif' }}>Production Company</span>,
      dataIndex: "productionBanner",
      key: "productionBanner",
      width: "150",
      ...getColumnSearchProps('productionBanner'),
      render: (productionBanner) => (
        <span style={{ fontFamily: 'Philosopher, sans-serif' }}>
          {Array.isArray(productionBanner) ? productionBanner.join(", ") : productionBanner}
        </span>
      ),
    },
    {
      title: <span className="philosopher-font">Event Organizer</span>,
      dataIndex: "organizers",
      key: "organizers",
      width: "200",
      ...getColumnSearchProps("organizers"),
      render: (text) => <span className='philosopher-font'>{text}</span>
    },
    // {
    //   title: "Contact Info",
    //   dataIndex: "contactInfo",
    //   key: "contactInfo",
    //   width: "200",
    //   ...getColumnSearchProps("contactInfo"),
    // },
    // {
    //   title: "Media Links",
    //   dataIndex: "MediaLinks",
    //   key: "MediaLinks",
    //   width: "200",
    //   render: (MediaLinks) => (
    //     <ul>
    //       {Object.entries(MediaLinks).map(([platform, link]) => (
    //         <li key={platform}>
    //           {platform}:{" "}
    //           <a href={link} target="_blank" rel="noopener noreferrer">
    //             {link}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   ),
    // },

   
  ];

  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const totalEntries = AwardShowsData.length; // Get the total number of entries

  return (
  
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
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
            <p style={{ textAlign: "end" }}>
              <strong>Total Entries: {totalEntries}</strong>
            </p>{" "}
            {/* Display the total number of entries */}
          </div>

          <Table
            columns={columns}
            dataSource={AwardShowsData}
            pagination={{ pageSize }} 
            // scroll={{ x: "max-content" }}
          />
        </div>
      </div>

  );
};

export default MusicConcertsList;