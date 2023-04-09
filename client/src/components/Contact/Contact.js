// IMPORTS -
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import "../../styles/Contact.css";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { ContactUs } from "../../redux/actions/user";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

const Contact = () => {
  const dispatch = useDispatch();
  const { message, err, loading } = useSelector((state) => state.contactUs);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const contactHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("description", description);

    dispatch(ContactUs(myForm));

    setName("");
    setEmail("");
    setDescription("");
  };

  useEffect(() => {
    if (err) {
      toast.error(err);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
    }
  }, [dispatch, err, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title="Contact" />
          <section className="container-fluid form__wrapper">
            <div className="row form__row__wrapper">
              <div className="col-md form__col__wrapper">
                <form encType="multipart/form-data" onSubmit={contactHandler}>
                  <div className="name__wrapper field">
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        variant="filled"
                        required
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </FormControl>
                  </div>

                  <div className="email__wrapper field">
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        variant="filled"
                        required
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <FormHelperText>
                        We'll never share your email
                      </FormHelperText>
                    </FormControl>
                  </div>

                  <div className="text__wrapper field">
                    <FormControl>
                      <FormLabel>Write us</FormLabel>
                      <Textarea
                        rows="10"
                        cols="30"
                        variant="filled"
                        style={{ resize: "none" }}
                        required
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      ></Textarea>
                    </FormControl>
                  </div>

                  <div className="button__wrapper field">
                    <FormControl>
                      <Button type="submit" className="btn__form">
                        Send{" "}
                        <span className="px-2">
                          <i class=" fas fa-duotone fa-paper-plane"></i>
                        </span>
                      </Button>
                    </FormControl>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Contact;
