import React, { useState } from "react";
import {
  FormControl,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container form-cont mb-[10%] w-[30rem] p-16">
        <h2>
          Questions or need assistance?
          <br />
          Let us know about it!
        </h2>
        <div className="mt-10">
          <FormControl className="flex flex-col justify-center align-middle items-center gap-8">
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Mail"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              size="lg"
            />
            <Button type="submit" className="form-btn register-btn">
              Submit
            </Button>
          </FormControl>
        </div>
      </div>
    </form>
  );
}
