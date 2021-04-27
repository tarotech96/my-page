import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Grid, Button } from "@material-ui/core";
import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "redux/actions/postAction";
import ModalCreatePost from "./createPost/ModalCreatePost";

function Blog() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllPosts);
  const [isShowModal, setIsShowModal] = useState(false);

  //ComponentDidMount
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <div className="bl__container">
      <Grid>
        {isShowModal && (
          <ModalCreatePost
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
          />
        )}
        <Grid item xs={12} sm={12}>
          <Grid container justify="center">
            {data && data.length
              ? data.map((item, index) => <BlogItem key={index} item={item} />)
              : ""}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={() => setIsShowModal(true)} className="bl__btn-add">
        <i className="fas fa-plus-circle"></i>
      </Button>
    </div>
  );
}

export default Blog;
