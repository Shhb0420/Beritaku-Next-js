import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import Styles from "./Navbar.module.css";
import Link from "next/link";
import classname from "../../helpers/classJoiner";
import styles from "../../styles/Home.module.css";

export default function index() {
  return (
    <>
      <div>
        <Navbar>
          <Navbar.Brand href="/">
            <img
              src="/beritaku.png"
              style={{ width: "100%", height: "100px" }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Article</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className={Styles.daftar}>
            Daftar
          </Button>
          <Button variant="outline-primary">
            <Link href="/login">
              <a className={classname(Styles.masuk)}>Masuk</a>
            </Link>
          </Button>
        </Navbar>
      </div>
    </>
  );
}
