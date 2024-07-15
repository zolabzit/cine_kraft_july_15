import React, { useRef, useState } from 'react';
import { Button, Input, Space, Table, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import "../../../../Css/Admin.css";

const { Option } = Select;

const AwardShowsData = [
  {
    eventid: "1",
    eventName: "SIIMA - South Indian International Movie Awards",
    date: "September 15th to 16th, 2023",
    location: "Dubai World Trade Center",
    host: "Sathish (Tamil) | Akul Balaji (Kannada)",
    categories: [
      {
        categoryName: "Best Film(Tamil)",
        nominees: ["Love Today", "PS 1", "Rocketry: The Nambi Effect", "Tiruchitrambalam", "Vikram"],
        winners: ["PS 1"],
      },
      {
        categoryName: "Best Director(Tamil)",
        nominees: ["Gautham Ramachandran for Gargi", "Lokesh Kanagaraj for Vikram", "Manikandan for Kaidaisi Vivasayi", "Maniratnam for Ps"],
        winners: ["Lokesh Kanagaraj for Vikram"],
      },
    ],
    performances: ["GV Prakash Live Singing", "Mrunal Thakur Dance"],
    specialMoments: ["", ""],
    organizers: ["Vibri Media Group"],
    sponsors: ["Nexa"],
    broadcastInfo: {
      channel: "Sun Tv",
      time: "6.30Pm",
    },
    images: [
      "https://cdn.platinumlist.net/upload/event/siima_2023_south_indian_international_mo_2023_sep_16_trade_center_arena_dubai_world_trade_centre_87903-full-en1693638260.png",
      "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/whatsapp_image_2023-08-01_at_7.55.40_pm.jpeg?VersionId=t3QAP1MYFRfWIwTJHQdAagm6CCrV5o8F",
    ],
    previousEditions: [
      {
        year: "SIIMA - 2022",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2022",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s"
      },
      {
        year: "SIIMA - 2021",
        location: "Hyderabad International Convention Center (HICC), Hyderabad, India",
        date: "18-19 September 2021",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
       Link : "https://www.youtube.com/watch?v=w2R5vaTJs3s"
    },
  },
  {
    eventid: "2",
    eventName: "8th Annual BehindWoods Gold Medal Awards",
    date: "May 15 2022 ",
    location: "Chennai",
    host: "Priyanka Deshpande & KPY Dheena",
    categories: [
      {
        categoryName: "Best Film(Tamil)",
        nominees: ["Love Today", "PS 1", "Rocketry: The Nambi Effect", "Tiruchitrambalam", "Vikram"],
        winners: ["PS 1"],
      },
      {
        categoryName: "Best Director(Tamil)",
        nominees: ["Gautham Ramachandran for Gargi", "Lokesh Kanagaraj for Vikram", "Manikandan for Kaidaisi Vivasayi", "Maniratnam for Ps"],
        winners: ["Lokesh Kanagaraj for Vikram"],
      },
    ],
    performances: ["GV Prakash Live Singing", "Mrunal Thakur Dance"],
    specialMoments: ["", ""],
    organizers: ["Behindwoods"],
    sponsors: ["Dazller Eterna"],
    broadcastInfo: {
      channel: "Colors Tv",
      time: "10.00Am",
    },
    images: [
      "https://images.hindustantimes.com/kannada/img/2023/09/15/1600x900/F6E2pN3bAAAvF5A_1694792242145_1694792251969.jfif",
      "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/whatsapp_image_2023-08-01_at_7.55.40_pm.jpeg?VersionId=t3QAP1MYFRfWIwTJHQdAagm6CCrV5o8F",
    ],
    previousEditions: [
      {
        year: "SIIMA - 2022",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2022",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s"
      },
      {
        year: "SIIMA - 2021",
        location: "Hyderabad International Convention Center (HICC), Hyderabad, India",
        date: "18-19 September 2021",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
       Link : "https://www.youtube.com/watch?v=IoeLXB26bC4"
    },
  },
  {
    eventid: "3",
    eventName: "Vijay Awards-10th edition",
    date: "May 2018",
    location: "Chennai",
    host: "DD Neelakandan & Gopinath",
    categories: [
      {
        categoryName: "Best Film(Tamil)",
        nominees: ["Love Today", "PS 1", "Rocketry: The Nambi Effect", "Tiruchitrambalam", "Vikram"],
        winners: ["PS 1"],
      },
      {
        categoryName: "Best Director(Tamil)",
        nominees: ["Gautham Ramachandran for Gargi", "Lokesh Kanagaraj for Vikram", "Manikandan for Kaidaisi Vivasayi", "Maniratnam for Ps"],
        winners: ["Lokesh Kanagaraj for Vikram"],
      },
    ],
    performances: ["Yuvan Live Song","Live Piano Performance"],
    specialMoments: ["", ""],
    organizers: ["Vijay Television"],
    sponsors: [" Reliance Mobile"],
    broadcastInfo: {
      channel: "STAR VIJAY",
      time: "07.00Pm",
    },
    images: [
      "https://images.hindustantimes.com/kannada/img/2023/09/15/1600x900/F6E2pN3bAAAvF5A_1694792242145_1694792251969.jfif",
      "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/whatsapp_image_2023-08-01_at_7.55.40_pm.jpeg?VersionId=t3QAP1MYFRfWIwTJHQdAagm6CCrV5o8F",
    ],
    previousEditions: [
      {
        year: "SIIMA - 2022",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2022",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s"
      },
      {
        year: "SIIMA - 2021",
        location: "Hyderabad International Convention Center (HICC), Hyderabad, India",
        date: "18-19 September 2021",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
       Link : "https://www.youtube.com/watch?v=0fefmxozuts"
    },
  },
];


const AwardShowsList = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
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
        className='philosopher-font'
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
          className='philosopher-font'
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
          className='philosopher-font'
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
          className='philosopher-font'
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
          className='philosopher-font'
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
          color: filtered ? '#1890ff' : undefined,
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
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
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
    //   title: 'Host',
    //   dataIndex: 'host',
    //   key: 'host',
    //   width: '200',
    //   ...getColumnSearchProps('host'),
    // },    
    // {
    //   title: 'Performances',
    //   dataIndex: 'performances',
    //   key: 'performances',
    //   width: '300',
    //   render: (performances) => performances.join(', '),
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
      title: <span className='philosopher-font'>Broadcast Info</span>,
      dataIndex: 'broadcastInfo',
      key: 'broadcastInfo',
      width: '100',
      ...getColumnSearchProps('broadcastInfo'),
      render: (broadcastInfo) => (
        <span className='philosopher-font'>
          {`${broadcastInfo.channel} at ${broadcastInfo.time}`}
        </span>
      ),
    },
    
   
    // {
    //   title: 'Media Links',
    //   dataIndex: 'MediaLinks',
    //   key: 'MediaLinks',
    //   width: '200',
    //   render: (MediaLinks) => (
    //     <ul>
    //       {Object.entries(MediaLinks).map(([platform, link]) => (
    //         <li key={platform}>
    //           {platform}: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    //         </li>
    //       ))}
    //     </ul>
    //   ),
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
    // {
    //   title: 'Categories',
    //   dataIndex: 'categories',
    //   key: 'categories',
    //   width: '400',
    //   render: (categories) => {
    //     if (categories && Array.isArray(categories)) {
    //       return (
    //         <ul>
    //           {categories.map((category) => (
    //             <li key={category.categoryName}>
    //               {category.categoryName}
    //               <ul>
    //                 <li>Nominees: {category.nominees ? category.nominees.join(', ') : 'N/A'}</li>
    //                 <li>Winners: {category.winners ? category.winners.join(', ') : 'N/A'}</li>
    //               </ul>
    //             </li>
    //           ))}
    //         </ul>
    //       );
    //     } else {
    //       return 'N/A';
    //     }
    //   },
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
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        <div>
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

          <Table columns={columns} dataSource={AwardShowsData}    
          // scroll={{ x: "max-content" }}
          />
        </div>
      </div>

  );
};

export default AwardShowsList;
