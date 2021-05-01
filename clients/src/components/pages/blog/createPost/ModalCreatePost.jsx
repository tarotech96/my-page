import React, { useState, useCallback, useEffect } from "react";
import "../Blog.css";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { formatDateWithPadding } from "constants/utilities";
import { createPost, getPosts, closeModal } from "redux/actions/postAction";
import FormInput from "components/common/input/FormInput";
import FormInputTextArea from "components/common/input/FormInputTextArea";
import UploadImage from "components/common/upload/UploadImage";
import CustomCalendar from "components/common/calendar/CustomCalendar";

ModalCreatePost.propTypes = {
  isOpen: PropTypes.bool,
};

ModalCreatePost.defaultProps = {
  isOPen: false,
};

function ModalCreatePost({ isOpen }) {
  const dispatch = useDispatch();
  const { isSucceeded } = useSelector((state) => state.postReducers);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState(
    formatDateWithPadding(new Date(), "yyyy-MM-dd")
  );
  const [image, setImage] = useState("");

  const onSubmitForm = useCallback(() => {
    dispatch(
      createPost.createPostRequest({
        title,
        author,
        body,
        createdAt,
        image,
      })
    );
  }, [title, author, body, createdAt, image, dispatch]);

  useEffect(() => {
    if (isSucceeded) {
      dispatch(closeModal());
      dispatch(getPosts.getPostsRequest());
    }
  }, [isSucceeded, dispatch]);

  return (
    <div className="create-form">
      <Dialog
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        disableBackdropClick
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new post</DialogTitle>
        <DialogContent>
          <form
            noValidate
            autoComplete="off"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FormInput label="Title" setData={setTitle} />
            <FormInput label="Author" setData={setAuthor} />
            <FormInputTextArea
              rowsMin={5}
              rowsMax={100}
              label="Body"
              placeholder="Enter body..."
              setData={setBody}
            />
            <UploadImage
              setImage={setImage}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
            />
            <CustomCalendar
              label="CreatedAt"
              date={createdAt}
              setDate={setCreatedAt}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeModal())} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmitForm} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalCreatePost;
