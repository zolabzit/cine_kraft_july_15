import React, { useRef, useState } from 'react';
import { Button, Input, Space, Table, Rate } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
// import {Modal, Form, Input,} from "antd";
import "../../../Css/Dashboard.scss";
import "../../../Css/Admin.css";

const AdminTopRatedMovies = () => {

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
  // Sample movie data
//   const [movies, setMovies] = useState([
  const [movies] = useState([
    {
      id: 1,
      title: "Jailer",
      rating: 5,
      director: "Nelson Dilipkumar",
      description: "Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison.",
      released:"14 Aug 2023",
      genre: "Action Crime Thriller",
      runtime: "2hr 51min",
      language:"Tamil"
    },
    {
      id: 2,
      title: "Chandramukhi 2",
      rating: 4.0,
      director: "P. Vasu",
      description: "A woman suffers from dissociative identity disorder, which impacts her family. A psychiatrist plans to solve the case, but it puts his life in danger.",
      released:"01 Oct 2023",
      genre: "Horror Thriller Drama",
      runtime: "2hr 38min",
      language:"Tamil"
    },
    {
      id: 3,
      title: "Mark Antony",
      rating: 5,
      director: "Vignesh K",
      description: "Gangsters Mark and Antony acquire a mobile phone that has the ability to time travel.",
      released:"24 Sep 2023",
      genre: "Action Crime Sci-fic",
      runtime: "2hr 45min",
      language:"Tamil"
    },
    {
        id: 4,
        title: "Chithha",
        rating: 5,
        director: "Sidharth",
        description: "A man is raising his niece like his own daughter, and everything appears normal in their life until the little girl goes missing.",
        released:"15 Oct 2023",
      genre: "Drama Crime Thriller",
      runtime: "2hr 13min",
      language:"Tamil"
      },
      {
        id: 5,
        title: "Ratham",
        rating: 5,
        director: "Amudhan CS",
        description: "An aloof editor of publication who is forced to comback to his old workplace when a friend gets murdered by a crazy fan.",
        released:"14 Sep 2023",
        genre: "Action Drama Crime ",
        runtime: "2hr 28min",
        language:"Tamil"
      },
      {
        id: 6,
        title: "The Road",
        rating: 4,
        director: "Lokesh kanagaraj",
        description: "How a national highway becomes a primary conflict in the lives of Meera, a journalist, and Maya, a college professor, and makes their life upside down.",
        released:"10 Oct 2023",
        genre: "Drama Crime Thriller",
        runtime: "2hr 37min",
        language:"Tamil"
      },
  ]);

  const columns = [
    {
      title: <span className="philosopher-font">Movie Title</span>,
      dataIndex: "title",
      key: "title",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('title'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">Rating</span>,
      dataIndex: "rating",
      key: "rating",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('rating'),
      render: (rating) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>
          <Rate disabled defaultValue={rating} />
        </span>
      ),
    },
    {
      title: <span className="philosopher-font">Director</span>,
      dataIndex: "director",
      key: "director",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('director'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">Released On</span>,
      dataIndex: "released",
      key: "released",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('released'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">Genre</span>,
      dataIndex: "genre",
      key: "genre",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('genre'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">RunTime</span>,
      dataIndex: "runtime",
      key: "runtime",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('runtime'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
    {
      title: <span className="philosopher-font">Language</span>,
      dataIndex: "language",
      key: "language",
      width: "auto", // Let it adjust automatically
      ...getColumnSearchProps('language'),
      render: (text) => (
        <span style={{ fontFamily: "'Philosopher', sans-serif" }}>{text}</span>
      ),
    },
   
    {
      title: <span className="philosopher-font">Actions</span>,
      key: "actions",
      width: "auto", // Let it adjust automatically
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
  
  

  return (
    <div style={{ fontFamily: "'Philosopher', sans-serif" }}>
      <h4 className="mt-3 mb-3">Top Rated Movies</h4>
      <Table columns={columns} dataSource={movies} />
    </div>
  );
};

export default AdminTopRatedMovies;
