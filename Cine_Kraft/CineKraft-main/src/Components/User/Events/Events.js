import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Row, Col, Container, Card } from "react-bootstrap";


// Award shows / music concert / audio launch / pre-release events

const AwardShow = [
  {
    id: 1,
    title: "Stranger Things",
    genre: "Science Fiction",
    rating: 8.7,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Crown",
    genre: "Drama",
    rating: 8.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPIjEs8ExVQZCLJQxHwIdsm53CobGd-e1vMsH6isgJxoxuR6q",
  },
  {
    id: 3,
    title: "Breaking Bad",
    genre: "Crime",
    rating: 9.5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
  },
  {
    id: 4,
    title: "Guns & Gulaabs",
    genre: "Thriller",
    rating: 5.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3dw48hMSNDdNIRE4dO7S4ckVo8-01D_T464zMXw7XujkFhqKD",
  },
  {
    id: 5,
    title: "Never Have I Ever",
    genre: "Drama",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu",
  },
  {
    id: 6,
    title: "Peaky Blinders",
    genre: "Drama Crime",
    rating: 8.8,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
  },
  {
    id: 7,
    title: "Vilangu",
    genre: "Thriller",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSrY2aLjP2OnMMAVdsj68fscEn0Hga4cCW1XzOC8NxBV8Er9Af",
  },
  {
    id: 8,
    title: "Suzhal",
    genre: "Thriller",
    rating: 8.2,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtAR4z5x9BfV_RqicpyLV7zEPZAvBKQqkmD2uoTHk__J7KkoDE",
  },
  {
    id: 9,
    title: "Ayali",
    genre: "Family",
    rating: 8.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ayali.jpg",
  },
  {
    id: 10,
    title: "November Story",
    genre: "Thriller",
    rating: 7.6,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYFENJFn-ovkYJrTqJKt1YO3uiCkyCZJ9fPX2QXR6qBfo5Y69c",
  },
  {
    id: 11,
    title: "Mathagam",
    genre: "Action Crime",
    rating: 6.4,
    imageUrl:
      "https://images.ottplay.com/images/mathagam-273.jpg?impolicy=ottplay-20210210",
  },
  {
    id: 12,
    title: "Triples",
    genre: "Rom-com",
    rating: 7.3,
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/qOHDSLFWZrPxkKlgY5nZLt244oC.jpg",
  },
  {
    id: 13,
    title: "Sweet Tooth",
    genre: "Science Drama",
    rating: 7.5,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1LX6AFNu3eNbzZz0q8mbsa7jibYoewTmthOaIfHoL3R_lGbyW",
  },
  {
    id: 14,
    title: "Moon Knight",
    genre: "Action",
    rating: 7.3,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD9oofZigR9k8YOORO8Yf53EZ54emeUekyiTt5ohBQIYZM7M4q",
  },
  {
    id: 15,
    title: "Big Mouth",
    genre: "Crime Drama",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsPAc3a9VxdtqwjwO4V2HVJKA2xFuTD7hleRIbQ7br8ZQyBY0O",
  },
  {
    id: 16,
    title: "Iron Fist",
    genre: "Action Fiction",
    rating: 6.4,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbsedhjJSEs1JT_Rbjg06wi4avzej5XAn6E3m6l-BQjI-E_3Yn",
  },
  {
    id: 17,
    title: "Lucifer",
    genre: "Mystery",
    rating: 8.1,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGZN1_0pyEzJJ8DTE0LurQp6Fu6qeIg6AwvSe1WiKeHD7n4l21",
  },
  {
    id: 18,
    title: "Kerala Crime Files",
    genre: "Crime Drama",
    rating: 7.2,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTMzODk1ODAtY2I5MC00MmUyLWFhOTMtY2E1YTlkZTZlOGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  },
];

const MusicConcert = [
  {
    id: 1,
    title: "Vilangu",
    genre: "Thriller",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSrY2aLjP2OnMMAVdsj68fscEn0Hga4cCW1XzOC8NxBV8Er9Af",
  },
  {
    id: 2,
    title: "Suzhal",
    genre: "Thriller",
    rating: 8.2,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtAR4z5x9BfV_RqicpyLV7zEPZAvBKQqkmD2uoTHk__J7KkoDE",
  },
  {
    id: 3,
    title: "Ayali",
    genre: "Family",
    rating: 8.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ayali.jpg",
  },
  {
    id: 4,
    title: "November Story",
    genre: "Thriller",
    rating: 7.6,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYFENJFn-ovkYJrTqJKt1YO3uiCkyCZJ9fPX2QXR6qBfo5Y69c",
  },
  {
    id: 5,
    title: "Mathagam",
    genre: "Action Crime",
    rating: 6.4,
    imageUrl:
      "https://images.ottplay.com/images/mathagam-273.jpg?impolicy=ottplay-20210210",
  },
  {
    id: 6,
    title: "Triples",
    genre: "Rom-com",
    rating: 7.3,
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/qOHDSLFWZrPxkKlgY5nZLt244oC.jpg",
  },
  {
    id: 7,
    title: "Stranger Things",
    genre: "Science Fiction",
    rating: 8.7,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
  },
  {
    id: 8,
    title: "The Crown",
    genre: "Drama",
    rating: 8.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPIjEs8ExVQZCLJQxHwIdsm53CobGd-e1vMsH6isgJxoxuR6q",
  },
  {
    id: 9,
    title: "Breaking Bad",
    genre: "Crime",
    rating: 9.5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
  },
  {
    id: 10,
    title: "Guns & Gulaabs",
    genre: "Thriller",
    rating: 5.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3dw48hMSNDdNIRE4dO7S4ckVo8-01D_T464zMXw7XujkFhqKD",
  },
  {
    id: 11,
    title: "Never Have I Ever",
    genre: "Drama",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu",
  },
  {
    id: 12,
    title: "Peaky Blinders",
    genre: "Drama Crime",
    rating: 8.8,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
  },
  {
    id: 13,
    title: "Sweet Tooth",
    genre: "Science Drama",
    rating: 7.5,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1LX6AFNu3eNbzZz0q8mbsa7jibYoewTmthOaIfHoL3R_lGbyW",
  },
  {
    id: 14,
    title: "Moon Knight",
    genre: "Action",
    rating: 7.3,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD9oofZigR9k8YOORO8Yf53EZ54emeUekyiTt5ohBQIYZM7M4q",
  },
  {
    id: 15,
    title: "Big Mouth",
    genre: "Crime Drama",
    rating: 7.9,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsPAc3a9VxdtqwjwO4V2HVJKA2xFuTD7hleRIbQ7br8ZQyBY0O",
  },
  {
    id: 16,
    title: "Iron Fist",
    genre: "Action Fiction",
    rating: 6.4,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbsedhjJSEs1JT_Rbjg06wi4avzej5XAn6E3m6l-BQjI-E_3Yn",
  },
  {
    id: 17,
    title: "Lucifer",
    genre: "Mystery",
    rating: 8.1,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGZN1_0pyEzJJ8DTE0LurQp6Fu6qeIg6AwvSe1WiKeHD7n4l21",
  },
  {
    id: 18,
    title: "Kerala Crime Files",
    genre: "Crime Drama",
    rating: 7.2,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTMzODk1ODAtY2I5MC00MmUyLWFhOTMtY2E1YTlkZTZlOGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  },
];

const AudioLaunch = [
    {
      id: 1,
      title: "Stranger Things",
      genre: "Science Fiction",
      rating: 8.7,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    },
    {
      id: 2,
      title: "The Crown",
      genre: "Drama",
      rating: 8.7,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPIjEs8ExVQZCLJQxHwIdsm53CobGd-e1vMsH6isgJxoxuR6q",
    },
    {
      id: 3,
      title: "Breaking Bad",
      genre: "Crime",
      rating: 9.5,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
    },
    {
      id: 4,
      title: "Guns & Gulaabs",
      genre: "Thriller",
      rating: 5.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3dw48hMSNDdNIRE4dO7S4ckVo8-01D_T464zMXw7XujkFhqKD",
    },
    {
      id: 5,
      title: "Never Have I Ever",
      genre: "Drama",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu",
    },
    {
      id: 6,
      title: "Peaky Blinders",
      genre: "Drama Crime",
      rating: 8.8,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    },
    {
      id: 7,
      title: "Vilangu",
      genre: "Thriller",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSrY2aLjP2OnMMAVdsj68fscEn0Hga4cCW1XzOC8NxBV8Er9Af",
    },
    {
      id: 8,
      title: "Suzhal",
      genre: "Thriller",
      rating: 8.2,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtAR4z5x9BfV_RqicpyLV7zEPZAvBKQqkmD2uoTHk__J7KkoDE",
    },
    {
      id: 9,
      title: "Ayali",
      genre: "Family",
      rating: 8.6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ayali.jpg",
    },
    {
      id: 10,
      title: "November Story",
      genre: "Thriller",
      rating: 7.6,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYFENJFn-ovkYJrTqJKt1YO3uiCkyCZJ9fPX2QXR6qBfo5Y69c",
    },
    {
      id: 11,
      title: "Mathagam",
      genre: "Action Crime",
      rating: 6.4,
      imageUrl:
        "https://images.ottplay.com/images/mathagam-273.jpg?impolicy=ottplay-20210210",
    },
    {
      id: 12,
      title: "Triples",
      genre: "Rom-com",
      rating: 7.3,
      imageUrl:
        "https://www.themoviedb.org/t/p/w500/qOHDSLFWZrPxkKlgY5nZLt244oC.jpg",
    },
    {
      id: 13,
      title: "Sweet Tooth",
      genre: "Science Drama",
      rating: 7.5,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1LX6AFNu3eNbzZz0q8mbsa7jibYoewTmthOaIfHoL3R_lGbyW",
    },
    {
      id: 14,
      title: "Moon Knight",
      genre: "Action",
      rating: 7.3,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD9oofZigR9k8YOORO8Yf53EZ54emeUekyiTt5ohBQIYZM7M4q",
    },
    {
      id: 15,
      title: "Big Mouth",
      genre: "Crime Drama",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsPAc3a9VxdtqwjwO4V2HVJKA2xFuTD7hleRIbQ7br8ZQyBY0O",
    },
    {
      id: 16,
      title: "Iron Fist",
      genre: "Action Fiction",
      rating: 6.4,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbsedhjJSEs1JT_Rbjg06wi4avzej5XAn6E3m6l-BQjI-E_3Yn",
    },
    {
      id: 17,
      title: "Lucifer",
      genre: "Mystery",
      rating: 8.1,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGZN1_0pyEzJJ8DTE0LurQp6Fu6qeIg6AwvSe1WiKeHD7n4l21",
    },
    {
      id: 18,
      title: "Kerala Crime Files",
      genre: "Crime Drama",
      rating: 7.2,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTMzODk1ODAtY2I5MC00MmUyLWFhOTMtY2E1YTlkZTZlOGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },
  ];
  
  const PreRelease = [
    {
      id: 1,
      title: "Vilangu",
      genre: "Thriller",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSrY2aLjP2OnMMAVdsj68fscEn0Hga4cCW1XzOC8NxBV8Er9Af",
    },
    {
      id: 2,
      title: "Suzhal",
      genre: "Thriller",
      rating: 8.2,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtAR4z5x9BfV_RqicpyLV7zEPZAvBKQqkmD2uoTHk__J7KkoDE",
    },
    {
      id: 3,
      title: "Ayali",
      genre: "Family",
      rating: 8.6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ayali.jpg",
    },
    {
      id: 4,
      title: "November Story",
      genre: "Thriller",
      rating: 7.6,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYFENJFn-ovkYJrTqJKt1YO3uiCkyCZJ9fPX2QXR6qBfo5Y69c",
    },
    {
      id: 5,
      title: "Mathagam",
      genre: "Action Crime",
      rating: 6.4,
      imageUrl:
        "https://images.ottplay.com/images/mathagam-273.jpg?impolicy=ottplay-20210210",
    },
    {
      id: 6,
      title: "Triples",
      genre: "Rom-com",
      rating: 7.3,
      imageUrl:
        "https://www.themoviedb.org/t/p/w500/qOHDSLFWZrPxkKlgY5nZLt244oC.jpg",
    },
    {
      id: 7,
      title: "Stranger Things",
      genre: "Science Fiction",
      rating: 8.7,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    },
    {
      id: 8,
      title: "The Crown",
      genre: "Drama",
      rating: 8.7,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPIjEs8ExVQZCLJQxHwIdsm53CobGd-e1vMsH6isgJxoxuR6q",
    },
    {
      id: 9,
      title: "Breaking Bad",
      genre: "Crime",
      rating: 9.5,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
    },
    {
      id: 10,
      title: "Guns & Gulaabs",
      genre: "Thriller",
      rating: 5.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3dw48hMSNDdNIRE4dO7S4ckVo8-01D_T464zMXw7XujkFhqKD",
    },
    {
      id: 11,
      title: "Never Have I Ever",
      genre: "Drama",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu",
    },
    {
      id: 12,
      title: "Peaky Blinders",
      genre: "Drama Crime",
      rating: 8.8,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    },
    {
      id: 13,
      title: "Sweet Tooth",
      genre: "Science Drama",
      rating: 7.5,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1LX6AFNu3eNbzZz0q8mbsa7jibYoewTmthOaIfHoL3R_lGbyW",
    },
    {
      id: 14,
      title: "Moon Knight",
      genre: "Action",
      rating: 7.3,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD9oofZigR9k8YOORO8Yf53EZ54emeUekyiTt5ohBQIYZM7M4q",
    },
    {
      id: 15,
      title: "Big Mouth",
      genre: "Crime Drama",
      rating: 7.9,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsPAc3a9VxdtqwjwO4V2HVJKA2xFuTD7hleRIbQ7br8ZQyBY0O",
    },
    {
      id: 16,
      title: "Iron Fist",
      genre: "Action Fiction",
      rating: 6.4,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbsedhjJSEs1JT_Rbjg06wi4avzej5XAn6E3m6l-BQjI-E_3Yn",
    },
    {
      id: 17,
      title: "Lucifer",
      genre: "Mystery",
      rating: 8.1,
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGZN1_0pyEzJJ8DTE0LurQp6Fu6qeIg6AwvSe1WiKeHD7n4l21",
    },
    {
      id: 18,
      title: "Kerala Crime Files",
      genre: "Crime Drama",
      rating: 7.2,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTMzODk1ODAtY2I5MC00MmUyLWFhOTMtY2E1YTlkZTZlOGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },
  ];

function Events() {
  return (
    <div>
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "3%" }}>Events</h1>
          <div>
            <Row>
              <Col>
                <a
                  href="/"
                  style={{
                    color: "#4e4e85",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  Home
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="card">
        <TabView>
          <TabPanel header="Award Shows">
            <div>
              <Container>
                <Row>
                  {AwardShow.map((series) => (
                    <Col
                      style={{ paddingTop: "2%" }}
                      key={series.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={2}
                    >
                      <Card className="tv-show-card" style={{ width: "100%", marginBottom: "15px" }}>
                        <Card.Img
                          variant="top"
                          src={series.imageUrl}
                          style={{ width: "100%", height: "300px" }}
                        />
                        <Card.Body>
                          <Card.Title>{series.title}</Card.Title>
                          <Card.Text>Genre: {series.genre}</Card.Text>
                          <Card.Text>Rating: {series.rating}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </TabPanel>
          <TabPanel header="Music Concert">
            <div>
              <Container>
                <Row>
                  {MusicConcert.map((series) => (
                    <Col
                      style={{ paddingTop: "2%" }}
                      key={series.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={2}
                    >
                      <Card className="tv-show-card" style={{ width: "100%", marginBottom: "15px" }}>
                        <Card.Img
                          variant="top"
                          src={series.imageUrl}
                          style={{ width: "100%", height: "300px" }}
                        />
                        <Card.Body>
                          <Card.Title>{series.title}</Card.Title>
                          <Card.Text>Genre: {series.genre}</Card.Text>
                          <Card.Text>Rating: {series.rating}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </TabPanel>
          <TabPanel header="Audio Launch">
            <div>
              <Container>
                <Row>
                  {AudioLaunch.map((series) => (
                    <Col
                      style={{ paddingTop: "2%" }}
                      key={series.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={2}
                    >
                      <Card className="tv-show-card" style={{ width: "100%", marginBottom: "15px" }}>
                        <Card.Img
                          variant="top"
                          src={series.imageUrl}
                          style={{ width: "100%", height: "300px" }}
                        />
                        <Card.Body>
                          <Card.Title>{series.title}</Card.Title>
                          <Card.Text>Genre: {series.genre}</Card.Text>
                          <Card.Text>Rating: {series.rating}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </TabPanel>
          <TabPanel header="Pre-Release Events  ">
            <div>
              <Container>
                <Row>
                  {PreRelease.map((series) => (
                    <Col
                      style={{ paddingTop: "2%" }}
                      key={series.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={2}
                    >
                      <Card className="tv-show-card" style={{ width: "100%", marginBottom: "15px" }}>
                        <Card.Img
                          variant="top"
                          src={series.imageUrl}
                          style={{ width: "100%", height: "300px" }}
                        />
                        <Card.Body>
                          <Card.Title>{series.title}</Card.Title>
                          <Card.Text>Genre: {series.genre}</Card.Text>
                          <Card.Text>Rating: {series.rating}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default Events;
