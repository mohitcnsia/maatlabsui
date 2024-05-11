import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Eobert t.kiyosaki",
    title: "Rich Dad Poor Dad",
    img: "https://m.media-amazon.com/images/I/41RMd71K3SL._AC_UF226,226_FMjpg_.jpg",
  },
  {
    author: "Joseph Nguyen",
    title: "Don't Believe Everything You Think",
    img: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY218_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">

      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input 
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0'}}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
