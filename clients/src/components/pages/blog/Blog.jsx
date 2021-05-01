import React, { useEffect } from "react";
import "./Blog.css";
import { Grid, Button } from "@material-ui/core";
import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import ModalCreatePost from "./createPost/ModalCreatePost";
import { getPosts, openModal } from "redux/actions/postAction";

function Blog() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postReducers);
  const { isOpen } = useSelector((state) => state.modalReducers);

  //ComponentDidMount
  useEffect(() => {
    dispatch(getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <div className="bl__container">
      <Grid>
        {isOpen && <ModalCreatePost isOpen={isOpen} />}
        <Grid item xs={12} sm={12}>
          <Grid container justify="center">
            {data && data.length
              ? data.map((item, index) => <BlogItem key={index} item={item} />)
              : ""}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={() => dispatch(openModal())} className="bl__btn-add">
        <i className="fas fa-plus-circle"></i>
      </Button>
    </div>
  );
}

export default Blog;
