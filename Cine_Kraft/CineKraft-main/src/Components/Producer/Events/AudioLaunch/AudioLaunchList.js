import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";


const { Option } = Select;

const AudioLaunchData = [
  {eventid: "1",
    eventName: "Varisu Audio Launch",
    date: "24 December 2022",
    location: " Jawaharlal Nehru Stadium - Chennai",
    host: "Raju Jeyamohan & Ramya",
    movieCast: "Vijay, Rashmika Mandana,Prakash Raj, Sarathkumar, Sangeetha, Jayasudha, Meka Srinath, S.J. Suryah",
    movieCrew: "Vamshi Padipally, Vivek, S. Thaman, Karthik Palani, Dil Raju",
    performances: ["Thaman & Jonita Live performance", "Ranjithamae Song Performance"],
    specialMoments: ["30 Years of Vijay Tribute Performance to Vijay"],
    organizers: ["Sri Venkateswara Creations"],
    sponsors: ["Dil Raju & Lalit Kumar"],
    ticket: "₹7000",
    productionBanner: "Sri Venkateswara Creations",
    broadcastInfo: {
      channel: "Sun Tv",
      time: "6.30Pm",
    },
    images: [
    "https://i.ytimg.com/vi/_Q-WrXKzIM8/maxresdefault.jpg" 
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=_Q-WrXKzIM8",
    },
    description: "Thalapathy Vijay's fans are waiting with bated breath for his speech at the Varisu audio launch. The event is scheduled to take place on December 24 at Nehru Stadium in Chennai. Ahead of the audio launch, passes are being distributed to the fans across Tamil Nadu.",
  },
  {eventid: "2",
  eventName: "Jailer Audio Launch",
  date: "28th July 2023",
  location: "Nehru Indoor Stadium - Chennai",
  host: "Kavin & Ramya",
  movieCast: "Rajinikanth, Ramya Krishnan, Vinayakan, Mohanlal, Dr. Shiva Rajkumar, Mirna Menon, Vasanth Ravi",
  movieCrew: "Nelson Dilipkumar, Anirudh Ravichander, Vijay Karthik Kannan, R.Nirmal, Raja Sridhar",
  performances: ["Tamannah Bhatia Dance performance & Anirudh Live Song"],
  specialMoments: [""],
  organizers: ["Sun Pictures"],
  sponsors: ["Kalanithi Maaran"],
  ticket: "₹1000",
  productionBanner: "Sun Pictures",
  broadcastInfo: {
    channel: "Sun Tv",
    time: "6.30Pm",
  },
  images: [
  "https://www.sarkariexam.com/wp-content/uploads/2023/07/Jailer-Audio-Launch-tickets-booking-date-other-details.jpg" 
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=zvzzqzOIUlY",
  },
  description: "Mohanlal, Shivarajkumar, Jackie Shroff, Ramya Krishnan, Tamannaah Bhatia and Sunil are some of the big names who will grace the occasion with their presence. The music of Jailer is composed by Anirudh Ravichander, who has delivered some chartbusters for Rajinikanth.",
},
{eventid: "3",
    eventName: "Jawan Audio Launch",
    date: "30 August 2023",
    location: "Sri Sai Ram Engineering College - Chennai",
    host: "VJ Vijay & Bhaavana",
    movieCast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Sanya Malhotra, Priyamani, Riddhi Dogra",
    movieCrew: "Atlee Kumar, Anirudh Ravichandran, Gauri Khan, G.k. Vishnu, Ruben, T. Muthuraj",
    performances: ["Anirudh Live Performance"],
    specialMoments: [""],
    organizers: ["Red Chillies Entertainment"],
    sponsors: ["Gauri Khan, Gaurav Varma"],
    ticket: "₹1500",
    productionBanner: "Red Chillies Entertainment",
    broadcastInfo: {
      channel: "Sun Tv",
      time: "6.30Pm",
    },
    images: [
    "https://i.ytimg.com/vi/ZLNeLC4t4jw/maxresdefault.jpg" 
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=ZLNeLC4t4jw",
    },
    description: "The actors and makers of the 2023 Pan Indian film 'Jawan' gather to officially launch the soundtrack of the movie and share their experiences of working on the project.",
  },
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
    //   title: "Host",
    //   dataIndex: "host",
    //   key: "host",
    //   width: "200",
    //   ...getColumnSearchProps("host"),
    // },
    // {
    //   title: "Performances",
    //   dataIndex: "performances",
    //   key: "performances",
    //   width: "300",
    //   render: (performances) => performances.join(", "),
    // },
    // {
    //   title: 'Special Moments',
    //   dataIndex: 'specialMoments',
    //   key: 'specialMoments',
    //   width: '250',
    //   render: (specialMoments) => specialMoments.join(', '),
    // },
    {
      title: <span className='philosopher-font'>Organizers</span>,
      dataIndex: 'organizers',
      key: 'organizers',
      width: '150',
      ...getColumnSearchProps('organizers'),
      render: (organizers) => (
        <span className='philosopher-font'>{organizers.join(', ')}</span>
      ),
    },
    {
      title: <span className='philosopher-font'>Sponsors</span>,
      dataIndex: 'sponsors',
      key: 'sponsors',
      width: '150',
      ...getColumnSearchProps('sponsors'),
      render: (sponsors) => (
        <span className='philosopher-font'>{sponsors.join(', ')}</span>
      ),
    },
    {
      title: <span style={{ fontFamily: 'Philosopher, sans-serif' }}>Broadcast Info</span>,
      dataIndex: "broadcastInfo",
      key: "broadcastInfo",
      width: "100",
      ...getColumnSearchProps('broadcastInfo'),
      render: (broadcastInfo) => (
        <span style={{ fontFamily: 'Philosopher, sans-serif' }}>
          {`${broadcastInfo.channel} at ${broadcastInfo.time}`}
        </span>
      ),
    }
    
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

  const totalEntries = AudioLaunchData.length; // Get the total number of entries

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
            dataSource={AudioLaunchData}
            pagination={{ pageSize }} 
            // scroll={{ x: "max-content" }}
          />
        </div>
      </div>

  );
};

export default MusicConcertsList;