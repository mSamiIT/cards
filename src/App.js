import "./index.css";
import { Component } from "react";

const tag = [
  { name: "html", bg: "red" },
  { name: "css", bg: "green" },
  { name: "javascript", bg: "purple" },
  { name: "react", bg: "orange" },
];

function App() {
  return (
    <>
      <Card
        imgLink={
          "https://images.unsplash.com/photo-1635398517284-2f3c7fef7fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        }
        tag={tag}
      >
        <h1>asdfghjk</h1>
      </Card>
      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>

      <Card
        imgLink={
          "https://images.unsplash.com/photo-1633934243950-03a086c09e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        }
        tag={tag}
      >
        <p>This is a new Card</p>
      </Card>
    </>
  );
}

function Card({ imgLink, children, tag }) {
  return (
    <div className="card">
      <img src={imgLink} alt="img-here"></img>
      <div>{children}</div>
      {tag?.map((currentElement) => (
        <p className="spanDiff" style={{ backgroundColor: currentElement.bg }}>
          {currentElement.name}
        </p>
      ))}
    </div>
  );
}

export default App;
