import React, { useState } from "react";
import { FormControl, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = "https://backend.getlinked.ai";
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();
      console.log("Response from API:", responseData);
      toast({
        title: "Form submitted successfully",
        description: "We will get back to you soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
          <FormControl
            className="flex flex-col justify-center align-middle items-center gap-8"
            isRequired
          >
            <Input
              type="text"
              name="first_name"
              value={formData.first_name}
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
            <Button type="submit" className="form-btn register-btn" style={{background: 'linear-gradient(270deg, #903aff 0%, #fe34b9 100%)'}}>
              Submit
            </Button>
          </FormControl>
        </div>
      </div>
    </form>
  );
}
