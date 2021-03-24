import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "../../utils/reqData";

export default function articles() {
  const [article, setArticle] = useState({});
  const [img, setImg] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getArticle = async () => {
    await axios
      .get(`${API_URL}/articles/${id}`)
      .then(({ data }) => {
        const articles = data.data;
        const image = data.data.article_photo;
        const images = JSON.parse(image);
        setImg(images);
        setArticle(articles);
        console.log("laka", articles);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  useEffect(() => {
    getArticle(id);
    document.title = `Beritaku | ${article.judul}`;
  }, [id]);

  // useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <img
          src={API_URL + img[0]}
          style={{ width: "100%", height: "500px", borderRadius: "10px" }}
          className="img-fluid rounded mt-2"
        />
        <div className={styles.detail}>
          <p className={styles.persD}>{article.judul}</p>
          <div className="d-flex">
            <p className={styles.subD}>
              {`${new Date(article.created_at)
                .getFullYear()
                .toString()}-${new Date(article.created_at)
                .getMonth()
                .toString()}-${new Date(article.created_at)
                .getDate()
                .toString()}`}
            </p>
            <p>Posted by Kemenparekraf/ Baparekraf RI</p>
          </div>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
}
