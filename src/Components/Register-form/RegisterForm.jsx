import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  Textarea,
  FormLabel,
  Stack,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [formData, setFormData] = useState({
    teamName: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
    privacy_policy_accepted: false,
    date_created: "",
    last_updated: "",
  });

  var raw = JSON.stringify({
    "email": "sample@eexample.com",
    "phone_number": "0903322445533",
    "team_name": "Space Explore",
    "group_size": 10,
    "project_topic": "Web server propagation",
    "category": 1,
    "privacy_poclicy_accepted": true
  });


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
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Response from API:", responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  // Update the selectedCategory state when the Category is changed
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setFormData({
      ...formData,
      category: value,
    });
  };

  // Update the selectedSize state when the Group Size is changed
  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSelectedSize(value);
    setFormData({
      ...formData,
      size: value,
    });
  };

  const handleChange = (event) => setValue(event.target.value);


  function validatePhone(value) {
    // Regular expression for a basic phone number pattern (e.g., +1 (555) 123-4567)
    const phonePattern = /^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phonePattern.test(value) ? "" : "Invalid phone number";
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");



  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var postOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const baseUrl = "https://backend.getlinked.ai";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/hackathon/categories-list`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Categories:", data);
        setCategoryOptions(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };



    fetchCategories();

  }, []);

  return (
    <>
      <div className="container register-container w-[100%] text-white">
        <h2 className="registerf py-6 text-[#D434FE]">Register</h2>
        <p className="part">Be part of this movement</p>
        <p className="create pt-4">CREATE YOUR ACCOUNT</p>
        <Stack>
          <FormControl>
            <Stack direction="row" spacing={8} className="py-4">
              <Stack>
                <FormLabel>Team's Name</FormLabel>
                <Input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  placeholder="Enter the name of your group"
                />
              </Stack>
              <Stack>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  isInvalid={validatePhone(formData.phone)}
                />
              </Stack>
            </Stack>

            <Stack direction="row" spacing={8} className="py-4">
              <Stack>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                />
              </Stack>
              <Stack>
                <FormLabel>Project Topic</FormLabel>
                <Input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  placeholder="What is your group project topic"
                />
              </Stack>
            </Stack>

            <Stack direction="row" spacing={8} className="py-4">
              <Stack className="w-[13.5rem]">
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select your category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  {categoryOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              </Stack>
              <Stack className="w-[13.5rem]">
                <FormLabel>Group Size</FormLabel>
                <Select
                  placeholder="Select"
                  onChange={handleSizeChange}
                  value={selectedSize}
                >
                  <option value="1">1</option>
                  <option value="2-4">2-4</option>
                  <option value="5-10">5-10</option>
                </Select>
              </Stack>
            </Stack>

            <p className="text-[#FF26B9] py-5 please">
              Please review your registration details before submitting
            </p>
          </FormControl>
          <Checkbox className="check pb-4"
          name="privacy_policy_accepted"
          isChecked={formData.privacy_policy_accepted}
          onChange={handleInputChange}
          >
            I agreed with the event terms and conditions and privacy policy
          </Checkbox>
          <Button
            type="submit"
            className="registerform-btn"
            onClick={handleSubmit}
            style={{
              background: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
              color: "#FFFFFF",
              fontSize: "16px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Register Now
          </Button>
        </Stack>
      </div>
    </>
  );
}
