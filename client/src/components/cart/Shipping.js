// IMPORTS -
import React from "react";
import "../../styles/Shipping.css";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { Country, State } from "country-state-city";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { shippingInfo } = useSelector((state) => state.Cart);
  const [houseNo, setHouseNo] = React.useState(shippingInfo.houseNo);
  const [city, setCity] = React.useState(shippingInfo.city);
  const [country, setCountry] = React.useState(shippingInfo.country);
  const [state, setState] = React.useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = React.useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = React.useState(shippingInfo.pinCode);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_SHIP_INFO",
      payload: {
        houseNo,
        city,
        country,
        state,
        phoneNo,
        pinCode,
      },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        houseNo,
        city,
        country,
        state,
        phoneNo,
        pinCode,
      })
    );

    history("/confirmOrder");
  };

  return (
    <>
      <MetaData title="Shipping" />
      <div className="shipping__wrapper__container container-fluid">
        <div className="row shipping__wrapper__row">
          <div className="col-md shipping__wrapper__column">
            <form onSubmit={submitHandler}>
              <div className="house__wrapper shipping__field">
                <FormControl>
                  <FormLabel>House Number</FormLabel>
                  <Input
                    type="number"
                    variant="filled"
                    required
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="city__wrapper shipping__field">
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="pin__wrapper shipping__field">
                <FormControl>
                  <FormLabel>Postal Code</FormLabel>
                  <Input
                    type="number"
                    variant="filled"
                    required
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="phone__wrapper shipping__field">
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    variant="filled"
                    required
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="country__wrapper shipping__field">
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select
                    placeholder="Select a country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {Country &&
                      Country.getAllCountries().map((i) => {
                        return (
                          <option value={i.isoCode} key={i.isoCode}>
                            {i.name}
                          </option>
                        );
                      })}
                  </Select>
                </FormControl>
              </div>

              <div className="state__wrapper shipping__field">
                {country && (
                  <FormControl>
                    <FormLabel>State</FormLabel>
                    <Select
                      placeholder="Select a state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      {State &&
                        State.getStatesOfCountry(country).map((i) => {
                          return (
                            <option value={i.isoCode} key={i.isoCode}>
                              {i.name}
                            </option>
                          );
                        })}
                    </Select>
                  </FormControl>
                )}
              </div>

              <div className="submit__btn__wrapper shipping__field">
                <FormControl>
                  <Button
                    type="submit"
                    className="shipping__form__btn"
                    isDisabled={
                      houseNo && city && country && phoneNo && pinCode && state
                        ? false
                        : true
                    }
                  >
                    Confirm
                    <span className="px-2">
                      <i class=" fas fa-duotone fa-paper-plane"></i>
                    </span>
                  </Button>
                </FormControl>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
