// IMPORTS -
import React from "react";
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

const Contact = () => {
  return (
    <>
      <MetaData title="Contact" />
      <section className="container-fluid form__wrapper">
        <div className="row form__row__wrapper">
          <div className="col-md form__col__wrapper">
            <form>
              <div className="name__wrapper field">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" variant="filled" required />
                </FormControl>
              </div>

              <div className="email__wrapper field">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" variant="filled" required />
                  <FormHelperText>We'll never share your email</FormHelperText>
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
  );
};

export default Contact;
