import React, { useState, useCallback } from "react";
import "../Blog.css";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import ImageUploader from "react-images-upload";
import { useDispatch, useSelector } from "react-redux";
import { formatDateWithPadding } from "constants/utilities";
import { createPost } from "redux/actions/postAction";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import localeJa from "date-fns/locale/ja";

ModalCreatePost.propTypes = {
  isShowModal: PropTypes.bool,
  setIsShowModal: PropTypes.func,
};

function ModalCreatePost({ isShowModal, setIsShowModal }) {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.createNewPost);

  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
    image: "",
    createdAt: "",
  });
  // const [selectedDate, setSelectedDate] = useState("");

  const onSubmitForm = useCallback(() => {
    dispatch(
      createPost.createPostRequest({
        ...data,
        createdAt: formatDateWithPadding(new Date(), "yyyy-MM-DD"),
      })
    );
    if (isSuccess) {
      setIsShowModal(false);
    }
  }, [data, dispatch]);

  return (
    <div className="create-form">
      <Dialog
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
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
            <TextField
              id="standard-basic"
              label="Title"
              style={{ marginBottom: 10 }}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <TextField
              id="filled-basic"
              label="Author"
              style={{ marginBottom: 10 }}
              onChange={(e) => setData({ ...data, author: e.target.value })}
            />
            <TextareaAutosize
              rowsMin={5}
              rowsMax={100}
              label="Body"
              placeholder="Enter body..."
              style={{ marginBottom: 10 }}
              onChange={(e) => setData({ ...data, body: e.target.value })}
            />
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={(files, imgUrls) =>
                setData({ ...data, image: imgUrls[0] })
              }
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
              maxFileSize={5242880}
            />
            {/* <MuiPickersUtilsProvider locale={localeJa} utils={CustomDateUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="CreatedAt"
                format="yyyy-MM-dd"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>  */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsShowModal(false)} color="primary">
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
