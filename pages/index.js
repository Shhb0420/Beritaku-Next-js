import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import { fetchArticles } from "../utils/redux/actions/articles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { API_URL } from "../utils/reqData";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { articles: stateArticles, isPending } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    document.title = "Beritaku | Tulisan yang dirindukan!";
  }, []);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/carousel1.jpg"
            alt="First slide"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/carousel2.jpg"
            alt="Second slide"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/carousel3.jpg"
            alt="Third slide"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
      </Carousel>
      <div
        className="container"
        style={{ width: "70%", justifyContent: "center" }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginTop: "155px" }}
        >
          <div>
            <p className={styles.berita}>Berita Terbaru</p>
          </div>

          <div className={styles.lihat}>Lihat Selengkapnya</div>
        </div>

        <div className={styles.kartu}>
          {stateArticles &&
            stateArticles.map((post, index) => {
              return (
                <div className={styles.card1} key={index}>
                  <div>
                    <Link href="/articles/[id]" as={`/articles/${post.id}`}>
                      <a className={styles.pers}>{post.judul}</a>
                    </Link>
                    <p>{`${new Date(post.created_at)
                      .getFullYear()
                      .toString()}-${new Date(post.created_at)
                      .getMonth()
                      .toString()}-${new Date(post.created_at)
                      .getDate()
                      .toString()}  Posted by Kemenparekraf/ Baparekraf RI`}</p>
                  </div>
                  <div>
                    <img
                      src={API_URL + JSON.parse(post.article_photo).shift()}
                      style={{
                        width: "100%",
                        height: "500px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <p className={styles.kata}>{post.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
