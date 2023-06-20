import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";


export default function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const formattedData = await incomingData.json();
      setBlogs(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1><center>Blogs</center></h1>
      <Container>
      <div className="card-list">
        {blogs.slice(0, 10).map((blog, index) => (
          <Card key={blog.id} style={{ width: '70rem' }} className="mb-4">
            <Card.Body>
              <Card.Title> Blog  {index + 1}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{blog.title}</Card.Subtitle>
              <Card.Text>{blog.body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
    </div>
  );
}
