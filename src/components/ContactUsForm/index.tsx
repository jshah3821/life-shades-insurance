import React, { TextareaHTMLAttributes, useState } from "react";
import { emailRegex } from "../../helpers/storage";
import classes from "./contactus.module.scss";
import { Col, Row } from "react-bootstrap";

const ContactUsForm = () => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    query: "",
  });
  const [error, setError] = useState<{ [key: string]: any }>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    query: "",
  });
  const validate = (name: string, value: string) => {
    switch (name) {
      case "first_name":
        if (!value.trim()) {
          return "First name is Required";
        } else {
          return "";
        }
      case "last_name":
        if (!value.trim()) {
          return "Last name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (!value.match(emailRegex)) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "service":
        if (!value.trim()) {
          return "Select required service";
        } else {
          return "";
        }
      case "query":
        if (!value.trim()) {
          return "Enter your  query";
        } else {
          return "";
        }

      case "phone":
        if (!value.trim()) {
          return "Phone number is Required";
        } else if (!value.match(/^\d{8,15}$/)) {
          return "Enter a valid phone number.";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setError({
      ...error,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  type IState = {
    [key: string]: any;
  };
  const handleSubmit = () => {
    let validationErrors: IState = {};
    Object.keys(formData).forEach((name) => {
      const error = validate(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    if (
      formData.first_name &&
      formData.last_name &&
      formData.phone &&
      formData.email
    ) {
      const data = {};
    }
  };
  return (
    <div className={classes.contactUs_container}>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col lg={6} style={{ padding: "2px" }}>
            <div
              className={
                error.first_name
                  ? `${classes.name_field} ${classes.input_field} ${classes.border_error}`
                  : `${classes.name_field} ${classes.input_field}`
              }
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name*"
                value={formData?.first_name}
                maxLength={30}
                onChange={handleOnChange}
                onKeyDown={(event) => {
                  if (event.code === "Space") event.preventDefault();
                }}
              />
            </div>
            {error.first_name && (
              <div className="error-msg mt-1">{error.first_name}</div>
            )}
          </Col>
          <Col lg={6} style={{ padding: "2px" }}>
            <div
              className={
                error.last_name
                  ? `${classes.name_field} ${classes.input_field} ${classes.border_error}`
                  : `${classes.name_field} ${classes.input_field}`
              }
            >
              <input
                type="text"
                name="last_name"
                placeholder="Last Name*"
                value={formData?.last_name}
                maxLength={30}
                onChange={handleOnChange}
                onKeyDown={(event) => {
                  if (event.code === "Space") event.preventDefault();
                }}
              />
            </div>
            {error.last_name && (
              <div className="error-msg mt-1">{error.last_name}</div>
            )}
          </Col>
        </Row>
        <div
          className={
            error.email
              ? `${classes.field} ${classes.input_field} ${classes.border_error}`
              : `${classes.field} ${classes.input_field}`
          }
        >
          <input
            type="text"
            name="email"
            value={formData?.email}
            placeholder="Email*"
            onChange={handleOnChange}
            onKeyDown={(event: any) => {
              if (event.code === "Space") event.preventDefault();
            }}
            onKeyPress={(e: any) => {
              if (e.target.value.length >= 35) e.preventDefault();
            }}
          />
        </div>
        {error.email && <div className="error-msg">{error.email}</div>}
        <Row>
          <Col lg={6} style={{ padding: "2px" }}>
            <div
              className={
                !error.phone
                  ? `${classes.field} ${classes.input_field}`
                  : ` ${classes.field} ${classes.input_field} ${classes.border_error}`
              }
            >
              <input
                type="number"
                name="phone"
                value={formData?.phone}
                placeholder="Phone Number*"
                maxLength={15}
                minLength={8}
                onChange={handleOnChange}
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-", "ArrowUp", "ArrowDown"].includes(
                    evt.key
                  ) && evt.preventDefault()
                }
                onKeyPress={(e: any) => {
                  if (e.target.value.length >= 15) e.preventDefault();
                }}
              />
            </div>
            {error.phone && <div className="error-msg mt-1">{error.phone}</div>}
          </Col>
          <Col lg={6} style={{ padding: "2px" }}>
            <div
              className={
                error.service
                  ? `${classes.name_field} ${classes.input_field} ${classes.border_error}`
                  : `${classes.name_field} ${classes.input_field}`
              }
            >
              <input
                type="text"
                name="service"
                value={formData?.service}
                placeholder="Select Type of service"
                onChange={handleOnChange}
                onKeyDown={(event) => {
                  if (event.code === "Space") event.preventDefault();
                }}
              />
            </div>
            {error.service && (
              <div className="error-msg mt-1">{error.service}</div>
            )}
          </Col>
        </Row>
        <div
          className={
            error.query
              ? `${classes.name_field} ${classes.input_field} ${classes.border_error}`
              : `${classes.name_field} ${classes.input_field}`
          }
        >
          <textarea
            name="query"
            value={formData?.query}
            placeholder="What can we help you with?*"
            onChange={handleOnChange}
            onKeyDown={(event) => {
              if (event.code === "Space") event.preventDefault();
            }}
          />
        </div>
        {error.query && <div className="error-msg mt-1">{error.query}</div>}
        <div className={`${classes.field} ${classes.button_field}`}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
