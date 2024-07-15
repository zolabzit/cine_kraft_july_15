import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";


const { Option } = Select;

const MusicConcertsData = [
  {eventid: "1",
    eventName: " Good Devil Vijay Antony Live Concert",
    dateTime: "September 9 | Gates to the venue opens at 4PM | Event starts between 5 PM and 5:30 PM",
    location: "YMCA Ground, Nandanam, Chennai",
    musicDirector: "Vijay Antony",
    performances: ["Live Singing"],
    specialMoments: ["Puli Urumbuthu & Pacha thanni Song vibe"],
    ticket: "₹499 onwards (Inclusive of GST)",
    organizers: ["Noise And Grains"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1692518176%2Fuzsewrmzjn8zxr8psceo.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "GV Prakash kumar's AAYIRATHIL ORUVAN",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/vijay-antony-live-in-concert-chennai-sep9-2023/event",
    },
  },
  {eventid: "2",
    eventName: "GV Prakash kumar's AAYIRATHIL ORUVAN",
    dateTime: "May 27 | 6:30PM",
    location: "Codissia Ground, Coimbatore",
    musicDirector: "GV Prakash kumar",
    performances: ["Live Singing & Instrumental"],
    specialMoments: ["Aauirathil Oruvan & Pookal Pookum tharunam Song"],
    ticket: "₹299 onwards (Incluisve of GST)",
    organizers: ["MK Entertainment"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1683545827%2Fgwhcmobqegzjyyqgbnyn.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "Ar Rahman Marakuma Nenjam",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/gv-prakash-kumar-live-in-aayorathil-oruvan-may27-2023/event",
    },
  },
  {eventid: "3",
    eventName: "Rock On Harrish Live Concert",
    dateTime: "October 27 | Gate Opens - 5:30 PM | Event starts - 7:30 PM",
    location: "YMCA Ground, Nandanam, Chennai",
    musicDirector: "Harrish Jayaraj",
    performances: ["Live Singing"],
    specialMoments: ["TBA"],
    ticket: "₹999 onwards (Inclusive of GST)",
    organizers: ["The Route & NG"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1692940232%2Fwez4epu3zae72ti2yiiy.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "GV Prakash kumar's AAYIRATHIL ORUVAN",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/vijay-antony-live-in-concert-chennai-sep9-2023/event",
    },
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
      title: <span className="philosopher-font">Event Name</span>,
      dataIndex: "eventName",
      key: "eventName",
      width: "300",
      ...getColumnSearchProps("eventName"),
      render: (text)=> <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Date & Time</span>,
      dataIndex: "dateTime",
      key: "dateTime",
      width: "200",
      ...getColumnSearchProps("dateTime"),
      render: (text)=> <span className="philosopher-font">{text}</span>
    },
    {
      title: <span className="philosopher-font">Location</span>,
      dataIndex: "location",
      key: "location",
      width: "300",
      ...getColumnSearchProps("location"),
      render: (text)=> <span className="philosopher-font">{text}</span>
      
    },
    {
      title: <span className="philosopher-font">Music Director</span>,
      dataIndex: "musicDirector",
      key: "musicDirector",
      width: "300",
      ...getColumnSearchProps("musicDirector"),
      render: (text)=> <span className="philosopher-font">{text}</span>
    },
    // {
    //   title: "Performances",
    //   dataIndex: "performances",
    //   key: "performances",
    //   width: "300",
    //   render: (performances) => performances.join(", "),
    //   ...getColumnSearchProps("performances"),
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
      title: <span className="philosopher-font">Ticket Price</span>,
      dataIndex: "ticket",
      key: "ticket",
      width: "150",
      render: (ticket) => (
        <span className="philosopher-font">{ticket}</span>
      ),
      ...getColumnSearchProps("ticket"),
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
    // {
    //   title: "Contact Info",
    //   dataIndex: "contactInfo",
    //   key: "contactInfo",
    //   width: "150",
    //   render: (contactInfo) => contactInfo,
    // },
    
    // {
    //   title: 'Previous Editions',
    //   dataIndex: 'previousEditions',
    //   key: 'previousEditions',
    //   width: '400',
    //   render: (previousEditions) => (
    //     <ul>
    //       {previousEditions.map((edition) => (
    //         <li key={edition.year}>
    //           Year: {edition.year}, Location: {edition.location}, Date : {edition.date}, organized By : {edition.organizedBy}
    //           {/* Link : {edition.link} */}
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

  const totalEntries = MusicConcertsData.length; // Get the total number of entries

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
            dataSource={MusicConcertsData}
            pagination={{ pageSize }} 
            //  scroll={{ x: "max-content" }}
          />
        </div>
      </div>
 
  );
};

export default MusicConcertsList;