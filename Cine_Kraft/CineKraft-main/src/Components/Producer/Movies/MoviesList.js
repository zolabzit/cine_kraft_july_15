import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Select } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Container } from "react-bootstrap";

const { Option } = Select;

const MovieData = [
    // {
    //   key: "1",
    //   movieImage:
    //     "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    //   movieName: "Stranger Things",
    //   directorName: " Matt Duffer, Ross Duffer",
    //   writerName: "Jessie Nickson-Lopez, Justin Doble, Kate Trefry, Paul Dichter, Jessica Mecklenburg",
    //   castAndCrew: "Milli Bobby Brown,Finn Wolfhard, Noah Schnapp,Caleb McLaughlin,Sadie Sink, Gaten Matarazzo",
    //   musicDirector: "Kyle Dixon & Michael Stein ",
    //   dop: 'Tim Ives',
    //   editor: "Dean Zimmerman",
    //   productionCmpny: " Monkey Massacre Productions & 21 Laps Entertainment, ",
    //   yearofRelease: "15 Jul 2016",
    //   genre: "Sci-fic | Horror | Mystery | Drama",
    //   runtime: "4 Seasons",
    //   Budget: "$270 million (season 4)",
    //   description: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    // },
    {
      key: "2",
      movieImage:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/5466/1115466-v-6c7716c884a1",
      movieName: "Hridayam",
      directorName: "Vineeth Sreenivasan",
      castAndCrew: "Pranav Mohanlal, Kalyani Priyadarshan, Darshana Rajendran",
      musicDirector: "Hesham Abdul Wahab",
      dop: "Viswajith Odukkathil",
      editor: "Ranjan Abraham",
      productionCmpny: "Merryland Studio, Big Bang Entertainments",
      yearofRelease: "21 Jan 2022",
      genre: "Romance | Drama",
      runtime: "2h 51m",
      Budget: "₹10 Crores",
      description: "Arun, a young man, enrols in an engineering college but falls prey to bad habits. As he grows up, he decides to turn over a new leaf and become a responsible adult.",
    },
    {
        key: "3",
        movieImage:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqK3_nPn_8UHFtyOFgDtrx1d_DfmngcZ3qbTLHZq7vbIrrllSx",
        movieName: "Jailer",
        directorName: "Nelson Dilipkumar",
        writerName: "Nelson Dilipkumar",
        castAndCrew: "Rajinikanth,Mirna Menon,Shiva Rajkumar,Vinayakan,Ramya Krishnan",
        musicDirector: "Anirudh Ravichander",
        dop: "Vijay Kartik Kannan",
        editor: "R. Nirmal",
        productionCmpny: "Sun Pictures",
        yearofRelease: "9 Aug 2023",
        genre: "Action | Crime",
        runtime: "2h 48m",
        Budget: "₹225 Crores",
        description: "Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison."
      },
      {
        key: "4",
        movieImage:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTobt5rDPMm3kIxUkaVe05bemxSDdpkJsDJdAK0FVwg0XgESJZd",
        movieName: "Kick",
        directorName: "Prashant Raj",
        writerName: "Prashant Raj",
        castAndCrew: "Santhanam,Tanya Hope,Ragini Dwivedi",
        musicDirector: "Arjun Janya",
        dop: "Sudhakar S. Raj",
        editor: "Nagooran Ramachandran",
        productionCmpny: "Fortune Films",
        yearofRelease: "01 Sep 2023",
        genre: "Action | Rom-Com | Drama | Family",
        runtime: "2h 14min",
        Budget: "₹8 Crore",
        description: "A young advertisement director suddenly has the chance to take over a global corporation by masquerading as the fake son of the CEO. While being chased out by angry investors, he pursues a woman and keeps her, mainly because of his humorous nature."
      },
      {
        key: "5",
        movieImage:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoCPy8MIP8YMbP79WINRs_JDpfHxcz6eUAgix_GXGBOfX4I_U2",
        movieName: "Chandramukhi 2",
        directorName: "P. Vasu",
        writerName: "P. Vasu",
        castAndCrew: "Kangana Ranaut,Raghava Lawrence,Mahima Nambiar,Lakshmi Menon,Vadivel,Radhika Sarathkumar",
        musicDirector: "M. M. Keeravani",
        dop: "R. D. Rajasekhar",
        editor: "Anthony",
        productionCmpny: "Lyca Production",
        yearofRelease: "28 Sep 2023",
        genre: "Horror | Drama",
        runtime: "2h 51m",
        Budget: "₹60 Crores",
        description: "A woman suffers from dissociative identity disorder, which impacts her family. A psychiatrist plans to solve the case, but it puts his life in danger."
      },
      // {
      //   key: "6",
      //   movieImage:
      //     "",
      //   movieName: "",
      //   directorName: "",
      //   writerName: "",
      //   castAndCrew: "",
      //   musicDirector: "",
      //   dop: "",
      //   editor: "",
      //   productionCmpny: "",
      //   yearofRelease: "",
      //   genre: "",
      //   runtime: "",
      //   Budget: "",
      //   description: ""
      // },
    
  ];
  

  const MovieList = () => {
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
    //   dataIndex: 'movieImage',
    //   key: 'movieImage',
    //   render: (movieImage) => (
    //     <img src={movieImage} alt="" style={{ width: '80px',height: '80px', borderRadius: '50%' }} />
    //   ),
    //   width: '10%',
    // },
    {
      title: <span className="philosopher-font">Movie Name</span>,
      dataIndex: 'movieName',
      key: 'movieName',
      width: '15%',
      ...getColumnSearchProps('movieName'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Director Name</span>,
      dataIndex: 'directorName',
      key: 'directorName',
      width: '15%',
      ...getColumnSearchProps('directorName'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    // {
    //   title: 'Cast and Crew',
    //   dataIndex: 'castAndCrew',
    //   key: 'castAndCrew',
    //   width: '15%',
    //   ...getColumnSearchProps('castAndCrew'),
    // },
    {
      title: <span className="philosopher-font">Released On</span>,
      dataIndex: 'yearofRelease',
      key: 'yearofRelease',
      width: '10%',
      ...getColumnSearchProps('yearofRelease'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
      title: <span className="philosopher-font">Genre</span>,
      dataIndex: 'genre',
      key: 'genre',
      width: '15%',
      ...getColumnSearchProps('genre'),
      render: (text) => <span className='philosopher-font'>{text}</span>,
    },
    {
        title: <span className="philosopher-font">RunTime</span>,
        dataIndex: 'runtime',
        key: 'runtime',
        width: '10%',
        ...getColumnSearchProps('runtime'),
        render: (text) => <span className='philosopher-font'>{text}</span>,
      },
      {
        title: <span className="philosopher-font">Actions</span>,
        key: "actions",
        width: "10%", // Let it adjust automatically
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
  const totalEntries = MovieData.length; // Get the total number of entries
  return (
    <Container>
      <div
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        <h4 className="mt-3 mb-3">Movies List</h4>
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
            <p style={{textAlign:"end"}}><strong>Total Entries : {totalEntries}</strong></p>
          </div>

          <Table columns={columns} dataSource={MovieData} pagination={{ pageSize }} />
        </div>
      </div>
    </Container>
  );
};

export default MovieList;
